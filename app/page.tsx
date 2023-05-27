import { Checkbox } from './components/Checkbox/Checkbox';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* @ts-expect-error Async Server Component */}
      <Checkbox />
      <div>チャートエリア</div>
    </main>
  );
}
