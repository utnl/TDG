"use client";

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="container-wrap banner-carousel">
      <div className="banner-content colors-white">
        <div className="content-wrap" data-aos="fade-up">
          <h1>2D &amp; 3D GAME ART <em>STUDIO</em></h1>
          <h3>Game art outsource</h3>
          <p>Sinspired Studio specializes in transforming creative ideas into vibrant art. We offer a range of services including professional game visuals, 2D stylized art, concept designs, environment art, illustrations, and 2D spine animation. Our skilled team uses advanced techniques to produce both 2D and 3D art, ensuring dynamic and interactive results.</p>
          <p><a className="button" href="#open-form">Get in touch</a></p>
        </div>
      </div>
      <div className="image overlay">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Game Art Studio" 
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="running-text">
        <div className="text-line square">Sinspired studio</div>
        <div className="text-line circle">Sinspired studio</div>
        <div className="text-line triangle">Sinspired studio</div>
        <div className="text-line cross">Sinspired studio</div>
        <div className="text-line square">Sinspired studio</div>
        <div className="text-line circle">Sinspired studio</div>
        <div className="text-line triangle">Sinspired studio</div>
        <div className="text-line cross">Sinspired studio</div>
        <div className="text-line square">Sinspired studio</div>
        <div className="text-line circle">Sinspired studio</div>
        <div className="text-line triangle">Sinspired studio</div>
        <div className="text-line cross">Sinspired studio</div>
        <div className="text-line square">Sinspired studio</div>
        <div className="text-line circle">Sinspired studio</div>
        <div className="text-line triangle">Sinspired studio</div>
        <div className="text-line cross">Sinspired studio</div>
        <div className="text-line square">Sinspired studio</div>
        <div className="text-line circle">Sinspired studio</div>
        <div className="text-line triangle">Sinspired studio</div>
        <div className="text-line cross">Sinspired studio</div>
      </div>
    </section>
  );
}
