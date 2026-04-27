"use client";

const IMAGE_3 = "/images/service-2d.jpg";
const IMAGE_4 = "/images/service-3d.jpg";
const IMAGE_5 = "/images/service-animation.jpg";

export default function ServicesSection() {
  return (
    <section className="container-wrap">
      <div className="container-custom">
        <div className="heading aos-init aos-animate" data-aos="fade-up">
          <h2>OUR <em>SERVICES</em></h2>
          <p>OUR SERVICES</p>
        </div>
        <div className="cards" style={{ maxHeight: '448.667px' }}>
          <div className="card aos-init aos-animate" data-aos="fade-up">
            <a href="https://sinspiredstudio.com/2d-art/"></a>
            <div className="card-inner">
              <img src={IMAGE_3} alt="2D Art" />
              <div className="card-info">
                <h6>2D Art</h6>
                <div className="sub-title">
                  <p>Create hand-drawn, storytelling visuals with our expert team.</p>
                </div>
                <div className="desc">
                  <p><strong>50+</strong><br />Completed projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card aos-init aos-animate" data-aos="fade-up">
            <a href="https://sinspiredstudio.com/3d-art/"></a>
            <div className="card-inner">
              <img src={IMAGE_4} alt="3D Art" />
              <div className="card-info">
                <h6>3D Art</h6>
                <div className="sub-title">
                  <p>Turn concepts into engaging 3D art.</p>
                </div>
                <div className="desc">
                  <p><strong>50+</strong><br />Completed projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card aos-init aos-animate" data-aos="fade-up">
            <a href="https://sinspiredstudio.com/game-animation/"></a>
            <div className="card-inner">
              <img src={IMAGE_5} alt="Game Animation" />
              <div className="card-info">
                <h6>Game animation</h6>
                <div className="sub-title">
                  <p>Bring your game characters and worlds to life.</p>
                </div>
                <div className="desc">
                  <p><strong>50+</strong><br />Completed projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
