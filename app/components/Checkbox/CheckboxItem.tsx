'use client';

import { Prefecture } from '@/app/utils/types';
import '../../styles/components/Checkbox/CheckboxItem.css';

type Props = {
  prefecture: Prefecture;
  selected: boolean;
  onSelectPrefecture: (prefCode: number) => void;
};

export const CheckboxItem = (props: Props) => {
  return (
    <div
      className="checkboxItem"
      onClick={() => props.onSelectPrefecture(props.prefecture.prefCode)}
    >
      <input type="checkbox" defaultChecked={props.selected} />
      <p>{props.prefecture.prefName}</p>
    </div>
  );
};