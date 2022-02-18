import { HStack, Text, Box, Image, useBreakpointValue } from '@chakra-ui/react';

export const Banner: React.FC = () => {
  const isShowAirplaneImage = useBreakpointValue({
    md: false,
    lg: true,
  });

  return (
    <HStack
      w="100%"
      h={[200, 368]}
      px={{
        base: 5,
        md: 50,
        lg: 140,
      }}
      spacing={100}
      bgImage="/assets/images/background-banner.svg"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box>
        <Text
          color="#F5F8FA"
          fontSize={{
            base: '1.75rem',
            md: '2rem',
            lg: '2.25rem',
          }}
          fontWeight="500"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          color="#DADADA"
          fontSize={{
            base: '0.875rem',
            md: '1.25rem',
          }}
          fontWeight="400"
          pt="5"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Box>
      {isShowAirplaneImage && (
        <Image src="/assets/images/airplane.svg" alt="airplane" pt="20" />
      )}
    </HStack>
  );
};
