import { Box, Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  continentName: string;
  continentImageUrl: string;
}

export const ContinentBanner: React.FC<ContinentBannerProps> = ({
  continentName,
  continentImageUrl,
}) => {
  return (
    <Box
      maxW={1440}
      h={500}
      mx="auto"
      bgImage={continentImageUrl}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        h="100%"
        bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
        align="flex-end"
      >
        <Text color="#F5F8FA" fontSize="3rem" fontWeight="600" ml={140} mb={35}>
          {continentName}
        </Text>
      </Flex>
    </Box>
  );
};
