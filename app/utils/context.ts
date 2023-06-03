import { Dispatch, SetStateAction, createContext } from 'react';

export type PrefCodeContextType = {
  prefCodeList: number[];
  setPrefCodeList: Dispatch<SetStateAction<number[]>>;
};

export const PrefCodeContext = createContext<PrefCodeContextType>(
  {} as PrefCodeContextType
);
