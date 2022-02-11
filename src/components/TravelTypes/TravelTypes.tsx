import { Image, HStack } from '@chakra-ui/react';

export const TravelTypes: React.FC = () => {
  return (
    <HStack maxW={1160} maxH={145} mx="auto" spacing={150} my="20">
      <Image src="/assets/images/nightlife.svg" alt="nightlife" />
      <Image src="/assets/images/beach.svg" alt="beach" />
      <Image src="/assets/images/modern.svg" alt="modern" />
      <Image src="/assets/images/classic.svg" alt="classic" />
      <Image src="/assets/images/more.svg" alt="more" />
    </HStack>
  );
};
