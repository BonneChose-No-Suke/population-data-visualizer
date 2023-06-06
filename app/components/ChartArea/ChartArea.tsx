'use client';

import { usePopulationData } from '@/app/hooks/usePopulationData';
import { PrefectureContext } from '@/app/utils/context';
import { useContext, useEffect, useState } from 'react';

export const ChartArea = () => {
  const PrefList = useContext(PrefectureContext);
  const [currentPrefList, setCurrentPrefList] = useState(PrefList.prefList);
  const { updatePrefs, populationData } = usePopulationData(PrefList.prefList);

  useEffect(() => {
    updatePrefs(currentPrefList);
    setCurrentPrefList(PrefList.prefList);
  }, [PrefList.prefList]);

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
