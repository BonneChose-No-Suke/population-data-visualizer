import { Prefecture } from './utils/types';
import { Chart } from './Chart';
import './styles/page.css';

const Home = async () => {
  const prefectures: Prefecture[] = await getPrefectures();

  return (
    <main className="main">
      <h1 className="pageTitle" style={{ textAlign: 'center' }}>
        都道府県別人口構成グラフ
      </h1>
      <p className="pageDescription"></p>
      <Chart prefectures={prefectures} />
    </main>
  );
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

export default Home;
