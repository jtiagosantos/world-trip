import { Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  continentName: string;
  continentImageUrl: string;
}

export const ContinentBanner: React.FC<ContinentBannerProps> = ({
  continentName,
  continentImageUrl,
}) => {
  return (
    <Flex
      maxW={1440}
      h={500}
      mx="auto"
      align="flex-end"
      bgImage={continentImageUrl}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Text color="#F5F8FA" fontSize="3rem" fontWeight="600" ml={140} mb={35}>
        {continentName}
      </Text>
    </Flex>
  );
};
