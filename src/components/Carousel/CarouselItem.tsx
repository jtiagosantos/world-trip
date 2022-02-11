import { Box, Flex, Text } from '@chakra-ui/react';

interface CarouselItemProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  imageUrl,
  title,
  subTitle,
}) => {
  return (
    <Box
      bgImage={imageUrl}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100%"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="16px"
        w="100%"
        h="100%"
        bg="rgba(28, 20, 10, 0.5)"
      >
        <Text color="#F5F8FA" fontSize="3rem" fontWeight="700">
          {title}
        </Text>
        <Text color="#DADADA" fontSize="1.5rem" fontWeight="700">
          {subTitle}
        </Text>
      </Flex>
    </Box>
  );
};
