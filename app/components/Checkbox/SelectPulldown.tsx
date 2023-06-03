'use client';

import { useContext } from 'react';
import { PrefCodeContext } from '@/app/utils/context';
import { Prefecture } from '@/app/utils/types';
import '../../styles/components/Checkbox/SelectPulldown.css';

type Props = {
  prefectures: Prefecture[];
  onSelectPrefecture: (prefCode: number) => void;
};

export const SelectPulldown = (props: Props) => {
  const PrefCodeList = useContext(PrefCodeContext);

  console.log(PrefCodeList.prefCodeList);

  return (
    <label className='SelectPulldown'>
      <select
        onChange={(e) => {
          props.onSelectPrefecture(Number(e.target.value));
        }}>
        <option hidden>都道府県を選択してください</option>
        {props.prefectures.map((prefecture, i) => (
          <option
            key={i}
            value={prefecture.prefCode}
            disabled={PrefCodeList.prefCodeList.includes(prefecture.prefCode)}>
            {prefecture.prefName}
          </option>
        ))}
      </select>
    </label>
  );
};
