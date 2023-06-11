'use client';

import { DataType } from '@/app/utils/types';
import '../../styles/components/ChartArea/DataTypeSelector.css';

type Props = {
  dataType: DataType;
  onSelectDataType: (dataType: DataType) => void;
  isChartEmpty: boolean;
};

export const DataTypeSelector = (props: Props) => {
  if (props.isChartEmpty) return <></>;
  return (
    <div className="DataTypeSelector">
      {Object.values(DataType).map((dataType, i) => (
        <label key={i} onClick={() => props.onSelectDataType(dataType)}>
          <input type="checkbox" checked={props.dataType === dataType} />
          <p>{dataType}</p>
        </label>
      ))}
    </div>
  );
};
