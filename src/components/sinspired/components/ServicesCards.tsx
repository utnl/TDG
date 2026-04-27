"use client";
import Image from "next/image";

const services = [
  {
    title: "2D Art",
    subtitle: "Create hand-drawn, storytelling visuals with our expert team.",
    projects: "50+",
    image: "/images/img3.jpg",
    link: "https://sinspiredstudio.com/2d-art/",
  },
  {
    title: "3D Art",
    subtitle: "Turn concepts into engaging 3D art.",
    projects: "50+",
    image: "/images/img4.jpg",
    link: "https://sinspiredstudio.com/3d-art/",
  },
  {
    title: "Game animation",
    subtitle: "Bring your game characters and worlds to life.",
    projects: "50+",
    image: "/images/img5.jpg",
    link: "https://sinspiredstudio.com/game-animation/",
  },
];

export default function ServicesCards() {
  return (
    <section className="container-wrap services-cards">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>
            OUR <em>SERVICES</em>
          </h2>
          <p>OUR SERVICES</p>
        </div>

        <div className="cards">
          {services.map((service, index) => (
            <div key={index} className="card" data-aos="fade-up">
              <a href={service.link}></a>
              <div className="card-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-info">
                  <h6>{service.title}</h6>
                  <div className="sub-title">
                    <p>{service.subtitle}</p>
                  </div>
                  <div className="desc">
                    <p>
                      <strong>{service.projects}</strong>
                      <br />
                      Completed projects
                    </p>
                    <a href={service.link}></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
