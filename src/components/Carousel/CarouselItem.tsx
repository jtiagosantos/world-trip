import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface CarouselItemProps {
  imageUrl: string;
  title: string;
  subTitle: string;
  slug: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  imageUrl,
  title,
  subTitle,
  slug,
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
      <Link href={`/continents/${slug}`}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="16px"
          w="100%"
          h="100%"
          bg="rgba(28, 20, 10, 0.5)"
        >
          <Text
            color="#F5F8FA"
            fontSize={{
              base: '1.5rem',
              md: '3rem',
            }}
            fontWeight="700"
          >
            {title}
          </Text>
          <Text
            maxW={{
              base: '280px',
              md: '100%',
            }}
            align="center"
            color="#DADADA"
            fontSize={{
              base: '0.875rem',
              md: '1.5rem',
            }}
            fontWeight="700"
          >
            {subTitle}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
