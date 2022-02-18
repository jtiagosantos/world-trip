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
      w="100%"
      h={{
        base: 200,
        md: 300,
        lg: 500,
      }}
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
        align={{
          base: 'center',
          md: 'flex-end',
        }}
        justify={{
          base: 'center',
          md: 'flex-start',
        }}
      >
        <Text
          color="#F5F8FA"
          fontSize={{
            base: '1.75rem',
            md: '2.5rem',
            lg: '3rem',
          }}
          fontWeight="600"
          ml={{
            base: 0,
            md: 140,
          }}
          mb={{
            base: 0,
            md: 35,
          }}
        >
          {continentName}
        </Text>
      </Flex>
    </Box>
  );
};
