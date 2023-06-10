'use client';
import { usePopulationData } from '@/app/hooks/usePopulationData';
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
import '../../styles/components/ChartArea/ChartArea.css';

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
  const { updatePrefs, populationData } = usePopulationData(PrefList.prefList);

  useEffect(() => {
    updatePrefs(currentPrefList);
    setCurrentPrefList(PrefList.prefList);
  }, [PrefList.prefList]);

  const prefDataSets = populationData.map((data) => {
    return {
      label: `${data.prefCode}.${data.prefName}`,
      data: data.populationData[0].data.map((data) => {
        return data.value;
      }),
    };
  });

  const prefDataLabels = populationData[0]?.populationData[0].data.map((data) => {
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
        text: '都道府県別人口構成グラフ',
      },
    },
  };

  return (
    <div className="ChartArea">
      {populationData.length !== 0 && (
        <Line data={data} options={options} width={900} height={450} />
      )}
    </div>
  );
};
