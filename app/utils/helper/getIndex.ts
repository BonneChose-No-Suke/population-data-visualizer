import { DataType } from '../types';

export const getIndex = (dataType: DataType) => {
  switch (dataType) {
    case DataType.TotalPopulation:
      return 0;
    case DataType.YoungPopulation:
      return 1;
    case DataType.WorkingAgePopulation:
      return 2;
    case DataType.ElderlyPopulation:
      return 3;
    default:
      return 0;
  }
};
