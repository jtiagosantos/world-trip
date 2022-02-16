import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselItem } from './CarouselItem';
import { SSGContinents } from '../../types/ssg-continents';

export const Carousel: React.FC<SSGContinents> = ({ continents }) => {
  return (
    <Flex
      maxW={1240}
      h={450}
      mb="20"
      css={{
        '.swiper-button-next': {
          color: '#FFBA08',
        },
        '.swiper-button-prev': {
          color: '#FFBA08',
        },
        '.swiper-pagination-bullet': {
          background: '#FFFFFF',

          '&.swiper-pagination-bullet-active': {
            background: '#FFBA08',
          },
        },
      }}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <CarouselItem
              imageUrl={continent.image_url}
              title={continent.title}
              subTitle={continent.subtitle}
              slug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
