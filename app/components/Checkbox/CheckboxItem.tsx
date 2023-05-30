'use client';

import { prefecture } from '@/app/utils/types';
import styles from '../../styles/components/CheckboxItem.module.css';

type Props = {
  prefecture: prefecture;
};

export const CheckboxItem = (props: Props) => {
  return (
    <div className={styles.checkboxItem}>
      <input type='checkbox' />
      <label>{props.prefecture.prefName}</label>
    </div>
  );
};
