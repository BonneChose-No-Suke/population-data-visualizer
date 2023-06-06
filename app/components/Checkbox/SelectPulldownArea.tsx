'use client';

import { Prefecture } from '@/app/utils/types';
import { SelectPulldown } from './SelectPulldown';
import { PrefCodeContext } from '@/app/utils/context';
import { useContext } from 'react';
import { Batch } from '../common/Batch';
import '../../styles/components/Checkbox/SelectPulldownArea.css';
import { AreaCode, getAreaCode } from '@/app/utils/helper/getAreaNumber';

type Props = {
  prefectures: Prefecture[];
};

export const SelectPulldownArea = (props: Props) => {
  const PrefCodeList = useContext(PrefCodeContext);
  const getColorCode = (prefCode: number) => {
    const area = getAreaCode(prefCode) ?? AreaCode.Hokkaido;
    return getAreaColor(area);
  };

  const addPrefecture = (prefecture: Prefecture) => {
    PrefCodeList.setPrefList((prevList) => {
      if (prevList.includes(prefecture)) {
        return prevList.filter((pref) => pref !== prefecture);
      } else {
        return [...prevList, prefecture];
      }
    });
  };

  const removePrefecture = (prefecture: Prefecture) => {
    PrefCodeList.setPrefList((prevList) => {
      return prevList.includes(prefecture)
        ? prevList.filter((pref) => pref !== prefecture)
        : prevList;
    });
  };

  return (
    <div className="SelectPulldownArea">
      <SelectPulldown prefectures={props.prefectures} onSelectPrefecture={addPrefecture} />
      <div className="BatchArea">
        {PrefCodeList.prefList.map((prefecture, i) => (
          <Batch
            key={i}
            prefecture={prefecture}
            colorCode={getColorCode(prefecture.prefCode)}
            onRemovePrefecture={removePrefecture}
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
