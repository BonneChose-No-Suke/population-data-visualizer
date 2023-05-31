import { Chart } from './Chart';
import { Checkbox } from './components/Checkbox/Checkbox';
import './styles/page.css';

export default function Home() {
  return (
    <main className='main'>
      <h1 className='pageTitle' style={{ textAlign: 'center' }}>
        都道府県別人口構成グラフ
      </h1>
      <p className='pageDescription'></p>
      <Chart>
        {/* @ts-expect-error Async Server Component */}
        <Checkbox />
      </Chart>
    </main>
  );
}
