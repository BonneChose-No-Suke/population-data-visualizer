'use client';

import { Prefecture } from '@/app/utils/types';

type Props = {
  prefecture: Prefecture;
  selected: boolean;
  onSelectPrefecture: (prefecture: Prefecture) => void;
};

export const CheckboxItem = (props: Props) => {
  return (
    <button className="checkboxItem" onClick={() => props.onSelectPrefecture(props.prefecture)}>
      <input type="checkbox" defaultChecked={props.selected} />
      <p>{props.prefecture.prefName}</p>
    </button>
  );
};
