'use client';

import { useState } from 'react';
import { PrefCodeContext } from './utils/context';

export const Chart = ({ children }: { children: React.ReactNode }) => {
  // contextを使ってprefCodeのリストを管理する
  // const { prefCodeList } = useContext(PrefCodeContext);

  return (
    <>
      <PrefCodeContext.Provider value={usePrefCodeList()}>
        {children}
        <div>チャートエリア</div>
      </PrefCodeContext.Provider>
    </>
  );
};

const usePrefCodeList = () => {
  const [prefCodeList, setPrefCodeList] = useState<number[]>([]);

  return { prefCodeList, setPrefCodeList };
};
