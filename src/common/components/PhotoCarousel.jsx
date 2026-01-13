import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = ["/images/gallery/img-1.webp", "/images/gallery/img-2.webp", "/images/gallery/img-3.webp", "/images/gallery/img-4.webp", "/images/gallery/img-1.webp", "/images/gallery/img-2.webp", "/images/gallery/img-3.webp", "/images/gallery/img-4.webp"];

const PhotoCarousel = () => {
  return (
    <section className='bg-white py-20 dark:bg-dark'>
      <div className='container mx-auto px-4 wow fadeInUp'>
        <div className='mb-12 text-center'>
          <span className='font-heading block text-3xl font-light text-primary'>GALLERY</span>
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect='coverflow'
          centeredSlides
          slidesPerView={3}
          loop
          grabCursor
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          className='pb-12'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='overflow-hidden rounded-xl shadow-lg'>
                <img src={img} alt={`Gallery ${index + 1}`} className='h-[300px] w-full object-cover object-center' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(PhotoCarousel);
