import Head from 'next/head';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />
    </>
  );
}
