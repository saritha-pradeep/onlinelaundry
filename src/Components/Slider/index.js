import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider=() => {
  return (
    <Swiper
    className='slider_main'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => swiper.slideNext()}
    >
      <SwiperSlide ><div className='slider_item'> <img className='slider_img' src={require('../../assets/il_600x600.3398355904_oqhs.webp')}/><div className='slider_item_positioned'></div></div></SwiperSlide>
      <SwiperSlide ><div className='slider_item'> <img className='slider_img'  src={require('../../assets/slider_quotes1.jpg')}/><div className='slider_item_positioned'></div></div></SwiperSlide>
      <SwiperSlide  ><div className='slider_item'> <img className='slider_img' src={require('../../assets/il_794xN.3827337969_173d.webp')}/><div className='slider_item_positioned'>This dreesss is not good</div></div></SwiperSlide>
    </Swiper>
  );
};
export default Slider

