'use client';

import { useState } from 'react';
import { PrefectureContext } from './utils/context';
import { ChartArea } from './components/ChartArea/ChartArea';
import { Prefecture } from './utils/types';

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrefectureContext.Provider value={usePrefList()}>
        {children}
        <ChartArea />
      </PrefectureContext.Provider>
    </>
  );
};

const usePrefList = () => {
  const [prefList, setPrefList] = useState<Prefecture[]>([]);

  return { prefList, setPrefList };
};
