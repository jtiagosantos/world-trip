import { Box, HStack, Text } from '@chakra-ui/react';
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
    <HStack maxW={1160} mx="auto" my="20" spacing={70}>
      <Box maxWidth={600} color="#47585B" fontSize="1.3rem" lineHeight="36px">
        {bio}
      </Box>
      <HStack spacing={42}>
        <Info number={countriesNumber} text="países" />
        <Info number={languagesNumber} text="línguas" />
        <Info number={citiesNumber} text="cidades +100" showInfoTooltip />
      </HStack>
    </HStack>
  );
};
