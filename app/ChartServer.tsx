import { Chart } from './Chart';

export const ChartServer = async () => {
  const prefectures = await getPrefectures();
  return <Chart prefectures={prefectures} />;
};

const getPrefectures = async () => {
  const response = await fetch('http://localhost:3000/api/prefectures', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
