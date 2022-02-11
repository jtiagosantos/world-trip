import { Flex } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex h={[50, 100]} justify="center" py={27}>
      <img src="/assets/images/logo.svg" alt="logo" />
    </Flex>
  );
};
