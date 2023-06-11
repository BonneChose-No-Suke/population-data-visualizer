import { useEffect, useState } from 'react';
import axios from 'axios';
import { getIndex } from '../utils/helper/getIndex';
import { DataType, PopulationComparison, PopulationData, Prefecture } from '../utils/types';

export const usePopulationData = (latestPrefList: Prefecture[]) => {
  const [populationData, setPopulationData] = useState<PopulationComparison[]>([]);
  const [targetDataIndex, setTargetDataIndex] = useState<number>(0);
  const [targetDatasets, setTargetDatasets] = useState<PopulationComparison[]>([]);

  useEffect(() => {
    if (populationData.length === 0) return;
    setTargetDatasets(
      populationData.map((populationComp) => {
        return {
          prefCode: populationComp.prefCode,
          prefName: populationComp.prefName,
          populationData: [populationComp.populationData[targetDataIndex]],
        };
      }),
    );
  }, [populationData, targetDataIndex]);

  const updatePrefs = async (newPrefList: Prefecture[]) => {
    if (newPrefList.length < latestPrefList.length) {
      const addedPref = latestPrefList.filter((pref) => !newPrefList.includes(pref));
      if (addedPref.length !== 1) return;
      const newPopulationData = await axios
        .get(`/api/populationComposition?prefCode=${addedPref[0].prefCode}`)
        .then((res) => {
          {
            const populationData = res.data as PopulationData[];
            const newPrefData: PopulationComparison = {
              prefCode: addedPref[0].prefCode,
              prefName: addedPref[0].prefName,
              populationData,
            };
            return newPrefData;
          }
        })
        .catch((err) => {
          err instanceof Error && alert('Failed to fetch data');
        });

      newPopulationData?.populationData.length
        ? setPopulationData((prev) => [...prev, newPopulationData])
        : populationData;
    } else if (newPrefList.length > latestPrefList.length) {
      const deletedPref = newPrefList.filter((pref) => !latestPrefList.includes(pref));
      deletedPref.length === 1 &&
        setPopulationData((prev) => {
          return prev.filter(
            (populationComp) => populationComp.prefCode !== deletedPref[0].prefCode,
          );
        });
    }
  };

  const updateTargetDataIndex = (dataType: DataType) => {
    const index = getIndex(dataType);

    setTargetDataIndex(index);
  };

  return { targetDatasets, updatePrefs, updateTargetDataIndex };
};
