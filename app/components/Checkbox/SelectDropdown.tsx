'use client';

import { Prefecture } from '@/app/utils/types';
import '../../styles/components/Checkbox/SelectDropdown.css';

type Props = {
  prefectures: Prefecture[];
  prefList: Prefecture[];
  onSelectPrefecture: (prefecture: Prefecture) => void;
};

export const SelectDropdown = (props: Props) => {
  return (
    <label className="SelectDropdown">
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
            disabled={props.prefList.includes(prefecture)}
          >
            {prefecture.prefName}
          </option>
        ))}
      </select>
    </label>
  );
};
