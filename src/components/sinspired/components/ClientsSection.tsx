'use client';

import Image from 'next/image';

export default function ClientsSection() {
  const clients = [
    '/images/client-slide-1.jpg',
    '/images/client-slide-2.jpg',
    '/images/client-slide-3.jpg',
  ];

  return (
    <section className="container-wrap clients">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>OUR <em>CLIENTS</em></h2>
          <p>TRUST</p>
        </div>
      </div>
      
      <div className="logos-slider" data-aos="fade-up">
        <div className="logos-track">
          {[...clients, ...clients].map((logo, idx) => (
            <div key={idx} className="logo">
              <div className="logo-inner">
                <Image
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  width={200}
                  height={100}
                  className="client-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
