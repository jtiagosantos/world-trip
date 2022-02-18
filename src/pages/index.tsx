import Head from 'next/head';
import { Flex, Divider, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner/Banner';
import { Header } from '../components/Header/Header';
import { TravelTypes } from '../components/TravelTypes/TravelTypes';
import { Carousel } from '../components/Carousel/Carousel';
import { GetStaticProps } from 'next';
import { getContinentsService } from '../services/get-continents';
import { SSGContinents } from '../types/ssg-continents';

export default function Home({ continents }: SSGContinents) {
  return (
    <Flex flexDirection="column" maxW={1440} mx="auto" align="center">
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Divider
        w={90}
        mb={{
          base: '20px',
          md: '52px',
        }}
        borderColor="#47585B"
        border="1px"
      />

      <Text
        align="center"
        color="#47585B"
        fontSize={{
          base: '1.5rem',
          md: '2rem',
          lg: '2.25rem',
        }}
        fontWeight="500"
        mb="52px"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>

      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await getContinentsService();

  return {
    props: { continents },
  };
};
