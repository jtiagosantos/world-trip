import { Box, Flex, Text } from '@chakra-ui/react';
import { City } from '../../components/City/City';
import { ContinentBanner } from '../../components/ContinentBanner/ContinentBanner';
import { ContinentDetails } from '../../components/ContinentDetails/ContinentDetails';
import { Header } from '../../components/Header/Header';
import { getContinentDetails } from '../../services/get-continent-details';
import { GetStaticProps } from 'next';

interface City {
  id: number;
  city_image_url: string;
  city_name: string;
  country: string;
  flag_image_url: string;
}

interface ContinentProps {
  continentDetails: {
    continent_name: string;
    continent_image_url: string;
    bio: string;
    countries_number: number;
    languages_number: number;
    cities_number: number;
    major_cities: City[];
  };
}

export default function Continent({ continentDetails }: ContinentProps) {
  return (
    <Flex maxW={1440} direction="column" mx="auto" align="center">
      <Header showLeftIcon />

      <ContinentBanner
        continentImageUrl={continentDetails.continent_image_url}
        continentName={continentDetails.continent_name}
      />

      <ContinentDetails
        bio={continentDetails.bio}
        countriesNumber={continentDetails.countries_number}
        languagesNumber={continentDetails.languages_number}
        citiesNumber={continentDetails.cities_number}
      />

      <Box maxW={1140} mb={35} px={10}>
        <Text
          mb="40px"
          color="#47585B"
          fontSize={{
            base: '1.5rem',
            md: '1.8rem',
          }}
          fontWeight="500"
        >
          Cidades +100
        </Text>

        <Flex mx="auto" gap="20px" wrap="wrap" justify="center">
          {continentDetails.major_cities.map((city) => (
            <City
              key={city.id}
              cityImageUrl={city.city_image_url}
              city={city.city_name}
              country={city.country}
              flagImageUrl={city.flag_image_url}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentName = params.slug as string;

  const [continentDetails] = await getContinentDetails(continentName);

  return {
    props: {
      continentDetails,
    },
  };
};
