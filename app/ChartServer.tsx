import { Chart } from './Chart';

export const ChartServer = async () => {
  const prefectures = await getPrefectures();
  return <Chart prefectures={prefectures} />;
};

const getPrefectures = async () => {
  const API_KEY = process.env.RESAS_API_KEY || '';
  const response = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.result;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
