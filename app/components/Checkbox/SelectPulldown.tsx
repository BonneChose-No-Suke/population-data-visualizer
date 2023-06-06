'use client';

import { useContext } from 'react';
import { PrefectureContext } from '@/app/utils/context';
import { Prefecture } from '@/app/utils/types';
import '../../styles/components/Checkbox/SelectPulldown.css';

type Props = {
  prefectures: Prefecture[];
  onSelectPrefecture: (prefecture: Prefecture) => void;
};

export const SelectPulldown = (props: Props) => {
  const PrefCodeList = useContext(PrefectureContext);

  return (
    <label className="SelectPulldown">
      <select
        onChange={(e) => {
          props.onSelectPrefecture(props.prefectures[e.target.selectedIndex - 1]);
        }}
      >
        <option hidden>都道府県を選択してください</option>
        {props.prefectures.map((prefecture, i) => (
          <option
            key={i}
            value={prefecture.prefCode}
            disabled={PrefCodeList.prefList.includes(prefecture)}
          >
            {prefecture.prefName}
          </option>
        ))}
      </select>
    </label>
  );
};
