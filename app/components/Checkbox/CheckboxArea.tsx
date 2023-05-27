'use client';

import { prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';

type Props = {
  prefectures: prefecture[];
};

export const CheckboxArea = (props: Props) => {
  const { prefectures } = props;
  console.log(prefectures);

  return (
    <div>
      {prefectures.map((prefecture) => {
        return (
          <CheckboxItem key={prefecture.prefCode} prefecture={prefecture} />
        );
      })}
    </div>
  );
};
