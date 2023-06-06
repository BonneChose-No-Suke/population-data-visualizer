'use client';

import { usePopulationData } from '@/app/hooks/usePopulationData';
import { PrefCodeContext } from '@/app/utils/context';
import { useContext, useEffect, useState } from 'react';

export const ChartArea = () => {
  const PrefCodeList = useContext(PrefCodeContext);
  const [currentPrefList, setCurrentPrefList] = useState(PrefCodeList.prefList);
  const { updatePrefs, populationData } = usePopulationData(PrefCodeList.prefList);

  useEffect(() => {
    updatePrefs(currentPrefList);
    setCurrentPrefList(PrefCodeList.prefList);
  }, [PrefCodeList.prefList]);

  return (
    <>
      {/* チャート描画と繋ぎ込み */}
      {populationData.map((data, i) => (
        <div key={i}>
          <p>{data.prefName}</p>
        </div>
      ))}
    </>
  );
};
