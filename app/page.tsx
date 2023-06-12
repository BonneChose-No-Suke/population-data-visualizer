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
      <p className="pageDescription" style={{ textAlign: 'center' }}>
        人口構成の推移をグラフで表示します。都道府県を選択してください。
        <br />
        「総人口」、「年少人口」、「生産年齢人口」、「老年人口」の4種類のデータを表示できます。
      </p>
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
