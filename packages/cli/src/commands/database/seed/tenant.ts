import { createTenantMetadata } from '@logto/core-kit';
import type {
  CreateTenant,
  AdminData,
  UpdateAdminData,
  CreateScope,
  CreateRolesScope,
} from '@logto/schemas';
import { generateStandardId } from '@logto/shared';
import { assert } from '@silverhand/essentials';
import type { CommonQueryMethods } from 'slonik';
import { sql } from 'slonik';
import { raw } from 'slonik-sql-tag-raw';

import { insertInto } from '../../../database.js';
import { getDatabaseName } from '../../../queries/database.js';

export const createTenant = async (pool: CommonQueryMethods, tenantId: string) => {
  const database = await getDatabaseName(pool, true);
  const { parentRole, role, password } = createTenantMetadata(database, tenantId);
  const createTenant: CreateTenant = { id: tenantId, dbUser: role, dbUserPassword: password };

  await pool.query(insertInto(createTenant, 'tenants'));
  await pool.query(sql`
    create role ${sql.identifier([role])} with inherit login
      password '${raw(password)}'
      in role ${sql.identifier([parentRole])};
  `);
};

export const seedAdminData = async (
  pool: CommonQueryMethods,
  data: AdminData | UpdateAdminData,
  ...additionalScopes: CreateScope[]
) => {
  const { resource, scopes, role } = data;

  assert(
    scopes.every(
      (scope) => resource.tenantId === scope.tenantId && scope.tenantId === role.tenantId
    ),
    new Error('All data should have the same tenant ID')
  );

  const processRole = async () => {
    if ('id' in role) {
      await pool.query(insertInto(role, 'roles'));

      return role.id;
    }

    // Query by role name for existing roles
    const { id } = await pool.one<{ id: string }>(sql`
      select id from roles
      where name=${role.name}
      and tenant_id=${String(role.tenantId)}
    `);

    return id;
  };

  await pool.query(insertInto(resource, 'resources'));
  await Promise.all(
    [...scopes, ...additionalScopes].map(async (scope) => pool.query(insertInto(scope, 'scopes')))
  );

  const roleId = await processRole();
  await Promise.all(
    scopes.map(async ({ id }) =>
      pool.query(
        insertInto(
          {
            id: generateStandardId(),
            roleId,
            scopeId: id,
            tenantId: resource.tenantId,
          } satisfies CreateRolesScope,
          'roles_scopes'
        )
      )
    )
  );
};

export const assignScopesToRole = async (
  pool: CommonQueryMethods,
  tenantId: string,
  roleId: string,
  ...scopeIds: string[]
) => {
  await Promise.all(
    scopeIds.map(async (scopeId) =>
      pool.query(
        insertInto(
          {
            id: generateStandardId(),
            roleId,
            scopeId,
            tenantId,
          } satisfies CreateRolesScope,
          'roles_scopes'
        )
      )
    )
  );
};
