import { Image, Flex } from '@chakra-ui/react';

export const TravelTypes: React.FC = () => {
  return (
    <Flex
      maxW={1160}
      w="100%"
      mx="auto"
      px="5"
      my={{
        base: '10',
        md: '20',
      }}
      gap={70}
      justify="center"
      flexWrap="wrap"
    >
      <Image
        boxSize={['120px', '150px']}
        src="/assets/images/nightlife.svg"
        alt="nightlife"
      />
      <Image
        boxSize={['120px', '150px']}
        src="/assets/images/beach.svg"
        alt="beach"
      />
      <Image
        boxSize={['120px', '150px']}
        src="/assets/images/modern.svg"
        alt="modern"
      />
      <Image
        boxSize={['120px', '150px']}
        src="/assets/images/classic.svg"
        alt="classic"
      />
      <Image
        boxSize={['120px', '150px']}
        src="/assets/images/more.svg"
        alt="more"
      />
    </Flex>
  );
};
