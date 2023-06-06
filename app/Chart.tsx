'use client';

import { useState } from 'react';
import { PrefCodeContext } from './utils/context';
import { ChartArea } from './components/ChartArea/ChartArea';
import { Prefecture } from './utils/types';

export const Chart = ({ children }: { children: React.ReactNode }) => {
  // contextを使ってprefCodeのリストを管理する
  // const { prefCodeList } = useContext(PrefCodeContext);

  return (
    <>
      <PrefCodeContext.Provider value={usePrefList()}>
        {children}
        <ChartArea />
      </PrefCodeContext.Provider>
    </>
  );
};

const usePrefList = () => {
  const [prefList, setPrefList] = useState<Prefecture[]>([]);

  return { prefList, setPrefList };
};
