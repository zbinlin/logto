import type { AdminConsoleKey } from '@logto/phrases';
import classNames from 'classnames';
import type { ReactNode } from 'react';

import Info from '@/assets/images/info.svg';
import Error from '@/assets/images/toast-error.svg';
import Success from '@/assets/images/toast-success.svg';

import Button from '../Button';
import DynamicT from '../DynamicT';
import TextLink from '../TextLink';

import * as styles from './index.module.scss';

type Props = {
  severity?: 'info' | 'alert' | 'success' | 'error';
  children?: ReactNode;
  action?: AdminConsoleKey;
  href?: string;
  onClick?: () => void;
  variant?: 'plain' | 'shadow';
  hasIcon?: boolean;
  className?: string;
};

function InlineNotification({
  children,
  action,
  href,
  onClick,
  severity = 'info',
  variant = 'plain',
  hasIcon = true,
  className,
}: Props) {
  return (
    <div
      className={classNames(
        styles.inlineNotification,
        styles[severity],
        styles[variant],
        className
      )}
    >
      {hasIcon && (
        <div className={styles.icon}>
          {(severity === 'info' || severity === 'alert') && <Info />}
          {severity === 'success' && <Success />}
          {severity === 'error' && <Error />}
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {action && href && (
        <TextLink to={href}>
          <DynamicT forKey={action} />
        </TextLink>
      )}
      {action && onClick && (
        <div className={styles.action}>
          <Button title={action} type="text" size="small" onClick={onClick} />
        </div>
      )}
    </div>
  );
}

export default InlineNotification;
