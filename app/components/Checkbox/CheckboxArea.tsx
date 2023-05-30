'use client';

import { prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';
import styles from '../../styles/components/CheckboxArea.module.css';

type Props = {
  prefectures: prefecture[];
};

export const CheckboxArea = (props: Props) => {
  const { prefectures } = props;

  return (
    <div className={styles.checkboxArea}>
      {prefectures.map((prefecture) => {
        return (
          <CheckboxItem key={prefecture.prefCode} prefecture={prefecture} />
        );
      })}
    </div>
  );
};
