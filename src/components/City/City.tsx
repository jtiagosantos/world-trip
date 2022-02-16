import { Box, Image, Flex, Text } from '@chakra-ui/react';

interface CityProps {
  cityImageUrl: string;
  city: string;
  country: string;
  flagImageUrl: string;
}

export const City: React.FC<CityProps> = ({
  cityImageUrl,
  city,
  country,
  flagImageUrl,
}) => {
  return (
    <Box
      w={250}
      h={279}
      borderRadius={5}
      borderWidth={1}
      borderStyle="solid"
      borderColor="rgba(255, 186, 8, 0.5)"
      overflow="hidden"
    >
      <Image src={cityImageUrl} alt={city} w="100%" h="173px" />
      <Flex justify="space-between" p={4} align="center">
        <Box>
          <Text as="h3" color="#47585B" fontSize="1.25rem" fontWeight="500">
            {city}
          </Text>
          <Text
            as="h4"
            color="#999999"
            fontSize="1rem"
            fontWeight="normal"
            mt="10px"
          >
            {country}
          </Text>
        </Box>
        <Image src={flagImageUrl} w={50} h={33} borderRadius={5} />
      </Flex>
    </Box>
  );
};
