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
  label: string;
  data: {
    year: number;
    value: number;
  }[];
};
