'use client';

import { useContext } from 'react';
import { PrefectureContext } from '@/app/utils/context';
import { Prefecture } from '@/app/utils/types';
import { SelectDropdownArea } from './SelectDropdownArea';
import { CheckboxArea } from './CheckboxArea';

type Props = {
  prefectures: Prefecture[];
};

export const Checkbox = (props: Props) => {
  const PrefList = useContext(PrefectureContext);

  const updatePrefectures = (prefecture: Prefecture) => {
    PrefList.prefList.includes(prefecture)
      ? PrefList.removePref(prefecture)
      : PrefList.addPref(prefecture);
  };

  return (
    <>
      <CheckboxArea
        prefectures={props.prefectures}
        prefList={PrefList.prefList}
        onSelectPrefecture={updatePrefectures}
      />
      <SelectDropdownArea
        prefectures={props.prefectures}
        prefList={PrefList.prefList}
        onSelectPrefecture={updatePrefectures}
      />
    </>
  );
};
