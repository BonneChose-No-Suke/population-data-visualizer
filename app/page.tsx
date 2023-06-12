import { ChartServer } from './ChartServer';
import './styles/page.css';

const Home = async () => {
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
      {/* @ts-expect-error Server Component */}
      <ChartServer />
    </main>
  );
};

export default Home;
