
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServiceCarousel = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='../../public/images/gallery-1.jpg' className='img-fluid'></img></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-2.jpg' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-3.jpg' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-4.jpg' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-1.jpg' className='img-fluid'></img></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-2.jpg' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-3.jpg' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src='../../public/images/gallery-4.jpg' className='img-fluid' /></SwiperSlide>
      ...
    </Swiper>
  );
};

export default ServiceCarousel;