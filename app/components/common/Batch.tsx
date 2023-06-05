'use client';

import { IoClose } from 'react-icons/io5';
import '../../styles/components/common/Batch.css';

type Props = {
  prefName: string;
  prefCode: number;
  colorCode?: string;
  onRemovePrefecture: (prefCode: number) => void;
};

export const Batch = (props: Props) => {
  return (
    <div className="Batch" style={{ background: `${props.colorCode ?? '#ccc'}` }}>
      <p className="Batch_text">
        {props.prefCode}
        <span>.</span>
        {props.prefName}
      </p>
      <button className="Batch_button" onClick={() => props.onRemovePrefecture(props.prefCode)}>
        <IoClose size={'15px'} color={'#fff'} className="Batch_icon" />
      </button>
    </div>
  );
};
