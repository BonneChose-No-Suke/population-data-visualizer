'use client';

import { useContext } from 'react';
import { PrefCodeContext } from '@/app/utils/context';
import { Prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';
import '../../styles/components/Checkbox/CheckboxArea.css';

type Props = {
  prefectures: Prefecture[];
};

export const CheckboxArea = (props: Props) => {
  const { prefectures } = props;
  const PrefList = useContext(PrefCodeContext);

  const prefectureSelected = (prefecture: Prefecture) => {
    PrefList.setPrefList((prev) => {
      if (prev.includes(prefecture)) {
        return prev.filter((pref) => pref.prefCode !== prefecture.prefCode);
      } else {
        return [...prev, prefecture];
      }
    });
  };

  return (
    <div className="checkboxArea">
      {prefectures.map((prefecture, i) => (
        <CheckboxItem
          key={i}
          prefecture={prefecture}
          selected={PrefList.prefList.includes(prefecture)}
          onSelectPrefecture={prefectureSelected}
        />
      ))}
    </div>
  );
};
