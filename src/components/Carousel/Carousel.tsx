import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselItem } from './CarouselItem';

export const Carousel: React.FC = () => {
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
        <SwiperSlide>
          <CarouselItem
            imageUrl="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1"
            title="Europa"
            subTitle="O continente mais antigo."
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
