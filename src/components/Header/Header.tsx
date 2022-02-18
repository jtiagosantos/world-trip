import { useRouter } from 'next/router';
import { Flex, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  showLeftIcon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showLeftIcon = false }) => {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/');

  return (
    <Flex h={[50, 100]} align="center" justify="center" py={27}>
      {showLeftIcon && (
        <Icon
          as={ChevronLeftIcon}
          position="absolute"
          left={{
            base: 8,
            md: 50,
            lg: 100,
          }}
          fontSize={32}
          cursor="pointer"
          onClick={navigateToHomePage}
        />
      )}
      <img src="/assets/images/logo.svg" alt="logo" />
    </Flex>
  );
};
