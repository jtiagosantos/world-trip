import { Flex, Text, Box, Image } from '@chakra-ui/react';

export const Banner: React.FC = () => {
  return (
    <Flex
      align="center"
      h={[163, 368]}
      px={[16, 140]}
      gap={200}
      bgImage="/assets/images/background-banner.svg"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box>
        <Text color="#F5F8FA" fontSize="2.25rem" fontWeight="500">
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text color="#DADADA" fontSize="1.25rem" fontWeight="400" pt="5">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Box>
      <Image src="/assets/images/airplane.svg" alt="airplane" pt="20" />
    </Flex>
  );
};
