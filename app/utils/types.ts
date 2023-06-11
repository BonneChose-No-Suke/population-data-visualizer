export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationComparison = {
  prefCode: number;
  prefName: string;
  populationData: PopulationData[];
};

export type PopulationData = {
  label: DataType;
  data: {
    year: number;
    value: number;
  }[];
};

export enum DataType {
  TotalPopulation = '総人口',
  YoungPopulation = '年少人口',
  WorkingAgePopulation = '生産年齢人口',
  ElderlyPopulation = '老年人口',
}
