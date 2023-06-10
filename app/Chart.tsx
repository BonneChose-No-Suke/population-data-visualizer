'use client';

import { PrefectureContext } from './utils/context';
import { usePrefList } from './hooks/usePrefList';
import { Prefecture } from './utils/types';
import { ChartArea } from './components/ChartArea/ChartArea';
import { Checkbox } from './components/Checkbox/Checkbox';

type Props = {
  prefectures: Prefecture[];
};

export const Chart = (props: Props) => {
  return (
    <>
      <PrefectureContext.Provider value={usePrefList()}>
        <Checkbox prefectures={props.prefectures} />
        <ChartArea />
      </PrefectureContext.Provider>
    </>
  );
};
