'use client';

import { AreaCode, getAreaCode } from '@/app/utils/helper/getAreaNumber';
import { Prefecture } from '@/app/utils/types';
import { SelectDropdown } from './SelectDropdown';
import { Batch } from '../common/Batch';

type Props = {
  prefectures: Prefecture[];
  prefList: Prefecture[];
  onSelectPrefecture: (prefecture: Prefecture) => void;
};

export const SelectDropdownArea = (props: Props) => {
  const getColorCode = (prefCode: number) => {
    const area = getAreaCode(prefCode) ?? AreaCode.Hokkaido;
    return getAreaColor(area);
  };

  return (
    <div className="SelectDropdownArea">
      <SelectDropdown
        prefectures={props.prefectures}
        onSelectPrefecture={props.onSelectPrefecture}
        prefList={props.prefList}
      />
      <div className="BatchArea">
        {props.prefList.map((prefecture, i) => (
          <Batch
            key={i}
            prefecture={prefecture}
            colorCode={getColorCode(prefecture.prefCode)}
            onRemovePrefecture={props.onSelectPrefecture}
          />
        ))}
      </div>
    </div>
  );
};

const getAreaColor = (area: AreaCode) => {
  switch (area) {
    case AreaCode.Hokkaido:
      return '#8986D8';
    case AreaCode.Tohoku:
      return '#619FEB';
    case AreaCode.Kanto:
      return '#3DA941';
    case AreaCode.Chubu:
      return '#99CC33';
    case AreaCode.Kinki:
      return '#F1C101';
    case AreaCode.Chugoku:
      return '#FF9900';
    case AreaCode.Shikoku:
      return '#FD9EAB';
    case AreaCode.Kyushu:
      return '#FF6460';
  }
};
