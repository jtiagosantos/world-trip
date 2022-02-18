import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Info } from '../Info/Info';

interface ContinentDetailsProps {
  bio: string;
  countriesNumber?: number;
  languagesNumber?: number;
  citiesNumber?: number;
}

export const ContinentDetails: React.FC<ContinentDetailsProps> = ({
  bio,
  countriesNumber,
  languagesNumber,
  citiesNumber,
}) => {
  return (
    <Flex
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align="center"
      justify="space-between"
      maxW={1140}
      gap={{
        base: '16px',
        md: '25px',
        lg: '70px',
      }}
      mx="auto"
      my={{
        base: '24px',
        md: 10,
        lg: 20,
      }}
      px={{
        base: 5,
        lg: 0,
      }}
    >
      <Box
        maxWidth={{
          md: '100vw',
          lg: 500,
        }}
        color="#47585B"
        fontSize={{
          base: '0.875rem',
          md: '1.3rem',
        }}
        lineHeight={{
          base: '25px',
          md: '36px',
        }}
      >
        {bio}
      </Box>
      <HStack
        spacing={{
          base: 30,
          md: 38,
        }}
        mt={{
          base: '18px',
          lg: 0,
        }}
      >
        <Info number={countriesNumber} text="países" />
        <Info number={languagesNumber} text="línguas" />
        <Info number={citiesNumber} text="cidades +100" showInfoTooltip />
      </HStack>
    </Flex>
  );
};
