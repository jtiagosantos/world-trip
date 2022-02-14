import { Flex, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  showLeftIcon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showLeftIcon = false }) => {
  return (
    <Flex h={[50, 100]} align="center" justify="center" py={27}>
      {showLeftIcon && (
        <Icon
          as={ChevronLeftIcon}
          position="absolute"
          fontSize={32}
          left={100}
        />
      )}
      <img src="/assets/images/logo.svg" alt="logo" />
    </Flex>
  );
};
