import Head from 'next/head';
import { Flex, Divider, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner/Banner';
import { Header } from '../components/Header/Header';
import { TravelTypes } from '../components/TravelTypes/TravelTypes';
import { Carousel } from '../components/Carousel/Carousel';

export default function Home() {
  return (
    <Flex flexDirection="column" align="center">
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Divider w={90} mb="52px" borderColor="#47585B" border="1px" />

      <Text
        align="center"
        color="#47585B"
        fontSize="2.25rem"
        fontWeight="500"
        mb="52px"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>

      <Carousel />
    </Flex>
  );
}
