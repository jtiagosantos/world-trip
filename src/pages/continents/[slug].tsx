import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { City } from '../../components/City/City';
import { ContinentBanner } from '../../components/ContinentBanner/ContinentBanner';
import { ContinentDetails } from '../../components/ContinentDetails/ContinentDetails';
import { Header } from '../../components/Header/Header';

export default function Continent() {
  return (
    <>
      <Header showLeftIcon />

      <ContinentBanner
        continentImageUrl="https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1"
        continentName="Europa"
      />

      <ContinentDetails
        bio="A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se 
          da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar 
          Cáspio, o Cáucaso, e o mar Negro a sudeste"
        countriesNumber={50}
        languagesNumber={60}
        citiesNumber={27}
      />

      <Text
        color="#47585B"
        fontSize="1.8rem"
        fontWeight="500"
        ml={140}
        mb="40px"
      >
        Cidades +100
      </Text>

      <Flex maxW={1070} mx="auto" gap="20px" mb={35} wrap="wrap">
        <City
          cityImageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1"
          city="Londres"
          country="Reino Unido"
          flagImageUrl="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
        />
        <City
          cityImageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1"
          city="Londres"
          country="Reino Unido"
          flagImageUrl="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
        />
        <City
          cityImageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1"
          city="Londres"
          country="Reino Unido"
          flagImageUrl="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
        />
        <City
          cityImageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1"
          city="Londres"
          country="Reino Unido"
          flagImageUrl="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
        />
        <City
          cityImageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1"
          city="Londres"
          country="Reino Unido"
          flagImageUrl="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
        />
      </Flex>
    </>
  );
}
