'use client';

import { Prefecture } from '@/app/utils/types';
import '../../styles/components/CheckboxItem.css';

type Props = {
  prefecture: Prefecture;
  onSelectPrefecture: (prefCode: number) => void;
};

export const CheckboxItem = (props: Props) => {
  return (
    <div
      className='checkboxItem'
      onClick={() => props.onSelectPrefecture(props.prefecture.prefCode)}>
      {/* checkBoxはiconに差し替え */}
      <input type='checkbox' />
      {props.prefecture.prefName}
    </div>
  );
};
