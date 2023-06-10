import { Dispatch, SetStateAction, createContext } from 'react';
import { Prefecture } from './types';

export type PrefContextType = {
  prefList: Prefecture[];
  addPref: (pref: Prefecture) => void;
  removePref: (pref: Prefecture) => void;
  setPrefList: Dispatch<SetStateAction<Prefecture[]>>;
};

export const PrefectureContext = createContext<PrefContextType>({} as PrefContextType);
