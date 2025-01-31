import { yes } from '@silverhand/essentials';

export const isProduction = process.env.NODE_ENV === 'production';
export const isCloud = yes(process.env.IS_CLOUD);
export const adminEndpoint = process.env.ADMIN_ENDPOINT;
