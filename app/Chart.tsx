'use client';

import { useState } from 'react';
import { PrefCodeContext } from './utils/context';
import { ChartArea } from './components/ChartArea/ChartArea';

export const Chart = ({ children }: { children: React.ReactNode }) => {
  // contextを使ってprefCodeのリストを管理する
  // const { prefCodeList } = useContext(PrefCodeContext);

  return (
    <>
      <PrefCodeContext.Provider value={usePrefCodeList()}>
        {children}
        <ChartArea />
      </PrefCodeContext.Provider>
    </>
  );
};

const usePrefCodeList = () => {
  const [prefCodeList, setPrefCodeList] = useState<number[]>([]);

  return { prefCodeList, setPrefCodeList };
};