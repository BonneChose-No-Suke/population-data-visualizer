'use client';

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
//TODO モックデータの読み込みからAPIの生データに変更する
import { mockData } from '../../utils/mockData.json';
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
  //TODO dataとlabelsを返す関数を作成する
  const prefDataSets = mockData.map((mock) => {
    return {
      label: `${mock.prefCode}.${mock.prefName}`,
      data: mock.populationData[0].data.map((data) => {
        return data.value;
      }),
    };
  });

  const prefDataLabels = mockData[0].populationData[0].data.map((data) => {
    return data.year;
  });

  const data = {
    labels: prefDataLabels,
    datasets: prefDataSets,
  };
  // ここまで

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
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
      <Line data={data} options={options} width={900} height={450} />
    </div>
  );
};
