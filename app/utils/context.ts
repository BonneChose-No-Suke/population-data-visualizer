import { Dispatch, SetStateAction, createContext } from 'react';
import { Prefecture } from './types';

export type PrefContextType = {
  prefList: Prefecture[];
  setPrefList: Dispatch<SetStateAction<Prefecture[]>>;
};

export const PrefectureContext = createContext<PrefContextType>({} as PrefContextType);
