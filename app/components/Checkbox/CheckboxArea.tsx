'use client';

import { Prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';
import '../../styles/components/CheckboxArea.css';
import { useContext } from 'react';
import { PrefCodeContext } from '@/app/utils/context';

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

  console.log(PrefCodeList.prefCodeList);

  return (
    <>
      <div className='checkboxArea'>
        {prefectures.map((prefecture, i) => (
          <CheckboxItem
            key={i}
            prefecture={prefecture}
            onSelectPrefecture={prefectureSelected}
          />
        ))}
      </div>
    </>
  );
};
