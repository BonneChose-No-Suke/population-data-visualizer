'use client';

import { IoClose } from 'react-icons/io5';
import '../../styles/components/common/Batch.css';
import { Prefecture } from '@/app/utils/types';

type Props = {
  prefecture: Prefecture;
  colorCode?: string;
  onRemovePrefecture: (prefecture: Prefecture) => void;
};

export const Batch = (props: Props) => {
  return (
    <div className="Batch" style={{ background: `${props.colorCode ?? '#ccc'}` }}>
      <p className="Batch_text">
        {props.prefecture.prefCode}.{props.prefecture.prefName}
      </p>
      <button className="Batch_button" onClick={() => props.onRemovePrefecture(props.prefecture)}>
        <IoClose size={'15px'} color={'#fff'} className="Batch_icon" />
      </button>
    </div>
  );
};
