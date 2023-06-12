'use client';

import { Prefecture } from '@/app/utils/types';
import { SelectPulldown } from './SelectPulldown';
import { PrefCodeContext } from '@/app/utils/context';
import { useContext } from 'react';
import { Batch } from '../common/Batch';
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

  const addPrefecture = (prefCode: number) => {
    PrefCodeList.setPrefCodeList((prevList) => {
      if (prevList.includes(prefCode)) {
        return prevList.filter((codeInPrevCode) => codeInPrevCode !== prefCode);
      } else {
        return [...prevList, prefCode];
      }
    });
  };

  const removePrefecture = (prefCode: number) => {
    PrefCodeList.setPrefCodeList((prevList) => {
      return prevList.includes(prefCode)
        ? prevList.filter((code) => code !== prefCode)
        : prevList;
    });
  };

  return (
    <div className='SelectPulldownArea'>
      <SelectPulldown
        prefectures={props.prefectures}
        onSelectPrefecture={addPrefecture}
      />
      <div className='BatchArea'>
        {PrefCodeList.prefCodeList.map((prefCode, i) => (
          <Batch
            key={i}
            prefCode={prefCode}
            prefName={
              props.prefectures.filter(
                (prefecture) => prefecture.prefCode === prefCode
              )[0]!.prefName
            }
            colorCode={getColorCode(prefCode)}
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
