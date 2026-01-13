import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = ["/images/gallery/img-1.webp", "/images/gallery/img-2.webp", "/images/gallery/img-3.webp", "/images/gallery/img-4.webp"];

const PhotoCarousel = () => {
  return (
    <section className='bg-white py-20 dark:bg-dark '>
      <div className='container mx-auto px-4 wow fadeInUp'>
        {/* Title */}
        <div className='mb-12 text-center'>
          <span className='mb-2 font-heading block text-3xl font-light text-primary'>GALLERY</span>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='pb-12'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='group overflow-hidden'>
                <img src={img} alt={`Gallery ${index + 1}`} className='h-[280px] w-full object-cover object-center transition duration-300 group-hover:scale-110' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(PhotoCarousel);
