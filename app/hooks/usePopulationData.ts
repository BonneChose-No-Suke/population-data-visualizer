import { useState } from 'react';
import { PopulationComparison, PopulationData, Prefecture } from '../utils/types';
import axios from 'axios';

export const usePopulationData = (latestPrefList: Prefecture[]) => {
  const [populationData, setPopulationData] = useState<PopulationComparison[]>([]);

  const updatePrefs = async (newPrefList: Prefecture[]) => {
    if (newPrefList.length < latestPrefList.length) {
      const addedPref = latestPrefList.filter((pref) => !newPrefList.includes(pref));
      if (addedPref.length !== 1) return;
      const newPopulationData = await axios
        .get(`/api/populationComposition?prefCode=${addedPref[0].prefCode}`)
        .then((res) => {
          const populationData = res.data as PopulationData[];
          const newPrefData: PopulationComparison = {
            prefCode: addedPref[0].prefCode,
            prefName: addedPref[0].prefName,
            populationData,
          };
          return newPrefData;
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

  // データの追加・削除を行った後、描画用のデータを返す
  // 描画用データを変更する

  return { updatePrefs, populationData };
};
