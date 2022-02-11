import Head from 'next/head';
import { Banner } from '../components/Banner/Banner';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />

      <Banner />
    </>
  );
}
