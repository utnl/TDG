'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const portfolioData = {
  '3D Characters': [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
  ],
  '3D Props': [
    '/images/img11.jpg',
    '/images/img12.png',
    '/images/img13.jpg',
    '/images/img14.jpg',
    '/images/img15.png',
  ],
};

export default function GameArtPortfolio() {
  const [activeTab, setActiveTab] = useState('3D Characters');
  const categories = Object.keys(portfolioData);

  return (
    <section className="container-wrap game-art-portfolio">
      <div className="container-custom">
        <div className="portfolio-wrap">
          <div className="portfolio-content">
            <div className="heading" data-aos="fade-up">
              <h2>GAME ART <em>PORTFOLIO</em></h2>
              <p>Sinspired Studio&apos;s featured work. View our curated selection<br />of top-quality game art.</p>
            </div>
            
            <div className="portfolio-filter" data-aos="fade-up">
              <div className="portfolio-titles">
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`title ${activeTab === category ? 'active' : ''}`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
              
              <div className="portfolio-items-container">
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`portfolio-items ${activeTab === category ? 'active' : ''}`}
                  >
                    <div className="item swiper mySwiper">
                      <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                          delay: 0,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }}
                        speed={5000}
                        navigation={{
                          prevEl: '.portfolio-prev',
                          nextEl: '.portfolio-next',
                        }}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                          },
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                          },
                        }}
                        className="swiper-wrapper"
                      >
                        {portfolioData[category as keyof typeof portfolioData].map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="portfolio-item">
                              <div className="image-inner">
                                <Image
                                  src={img}
                                  alt={`${category} ${idx + 1}`}
                                  width={400}
                                  height={300}
                                  className="portfolio-image"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="portfolio-nav">
                        <div className="portfolio-prev">←</div>
                        <div className="portfolio-next">→</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
