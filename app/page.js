'use client' 

import NavbarDoor from './components/Navbar/NavbarDoor'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '../public/images/banner1.jpg'
import banner2 from '../public/images/banner2.jpg'
import banner3 from '../public/images/banner3.jpg'
import banner4 from '../public/images/banner4.jpg'
import "./page.css"
import Image from 'next/image';

export default async function Home() {

  return (
    <main>
      <NavbarDoor />
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src={banner1} alt='1'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner2} alt='1'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner3} alt='1'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner4} alt='1'/>
        </SwiperSlide>
      </Swiper>
      <Section />
      <Footer />
    </main>
   
  );
}
