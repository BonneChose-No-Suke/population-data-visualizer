'use client';

import { useContext } from 'react';
import { PrefCodeContext } from '@/app/utils/context';
import { Prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';

type Props = {
  prefectures: Prefecture[];
};

export const CheckboxArea = (props: Props) => {
  const { prefectures } = props;
  const PrefCodeList = useContext(PrefCodeContext);

  const prefectureSelected = (prefCode: number) => {
    PrefCodeList.setPrefCodeList((prev) => {
      if (prev.includes(prefCode)) {
        return prev.filter((pref) => pref !== prefCode);
      } else {
        return [...prev, prefCode];
      }
    });
  };

  return (
    <div className='checkboxArea'>
      {prefectures.map((prefecture, i) => (
        <CheckboxItem
          key={i}
          prefecture={prefecture}
          selected={PrefCodeList.prefCodeList.includes(prefecture.prefCode)}
          onSelectPrefecture={prefectureSelected}
        />
      ))}
    </div>
  );
};
