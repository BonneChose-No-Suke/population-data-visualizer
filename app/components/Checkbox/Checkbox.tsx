'use client';

import { Prefecture } from '@/app/utils/types';
import { CheckboxArea } from './CheckboxArea';
import { SelectDropdownArea } from './SelectDropdownArea';
import { useContext } from 'react';
import { PrefectureContext } from '@/app/utils/context';

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
