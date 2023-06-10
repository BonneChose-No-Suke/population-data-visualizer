import { useState } from 'react';
import { Prefecture } from '../utils/types';

export const usePrefList = () => {
  const [prefList, setPrefList] = useState<Prefecture[]>([]);

  const addPref = (prefecture: Prefecture) => {
    setPrefList((prev) => {
      return [...prev, prefecture];
    });
  };

  const removePref = (prefecture: Prefecture) => {
    setPrefList((prev) => {
      return prev.filter((pref) => pref.prefCode !== prefecture.prefCode);
    });
  };

  return { prefList, addPref, removePref };
};
