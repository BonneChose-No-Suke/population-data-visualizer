'use client';

import { usePopulationData } from '@/app/hooks/usePopulationData';
import { DataType } from '@/app/utils/types';
import { PrefectureContext } from '@/app/utils/context';
import { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DataTypeSelector } from './DataTypeSelector';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend,
);

export const ChartArea = () => {
  const PrefList = useContext(PrefectureContext);
  const [currentPrefList, setCurrentPrefList] = useState(PrefList.prefList);
  const { targetDatasets, updatePrefs, updateTargetDataIndex } = usePopulationData(
    PrefList.prefList,
  );

  useEffect(() => {
    updatePrefs(currentPrefList);
    setCurrentPrefList(PrefList.prefList);
  }, [PrefList.prefList]);

  const prefDataSets = targetDatasets.map((data) => {
    return {
      label: `${data.prefCode}.${data.prefName}`,
      data: data.populationData[0].data.map((data) => {
        return data.value;
      }),
    };
  });

  const prefDataLabels = targetDatasets[0]?.populationData[0].data.map((data) => {
    return data.year;
  });

  const data = {
    labels: prefDataLabels,
    datasets: prefDataSets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      colors: {
        forceOverride: true,
      },
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: targetDatasets[0]?.populationData[0].label ?? DataType.TotalPopulation,
      },
    },
  };

  return (
    <>
      <div className="ChartArea">
        {targetDatasets.length !== 0 && (
          <Line data={data} options={options} width={900} height={450} />
        )}
      </div>
      <DataTypeSelector
        dataType={targetDatasets[0]?.populationData[0].label ?? DataType.TotalPopulation}
        onSelectDataType={(dataType) => {
          dataType !== targetDatasets[0]?.populationData[0].label &&
            updateTargetDataIndex(dataType);
        }}
        isChartEmpty={targetDatasets.length === 0}
      />
    </>
  );
};
