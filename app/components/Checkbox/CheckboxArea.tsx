'use client';

import { Prefecture } from '@/app/utils/types';
import { CheckboxItem } from './CheckboxItem';

type Props = {
  prefectures: Prefecture[];
  prefList: Prefecture[];
  onSelectPrefecture: (prefecture: Prefecture) => void;
};

export const CheckboxArea = (props: Props) => {
  const { prefectures } = props;

  return (
    <div className="checkboxArea">
      {prefectures.map((prefecture, i) => (
        <CheckboxItem
          key={i}
          prefecture={prefecture}
          selected={props.prefList.includes(prefecture)}
          onSelectPrefecture={props.onSelectPrefecture}
        />
      ))}
    </div>
  );
};
