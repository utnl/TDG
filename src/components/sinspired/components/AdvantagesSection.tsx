"use client";

export default function AdvantagesSection() {
  return (
    <section className="container-wrap">
      <div className="container-custom">
        <div className="heading aos-init aos-animate" data-aos="fade-up">
          <h2>BENEFITS</h2>
          <p>BENEFITS</p>
        </div>
        <div className="content aos-init aos-animate" data-aos="fade-up">
          <div className="advantages-list">
            <div className="advantage-item">
              <div className="icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#FFC700" strokeWidth="2"/>
                  <path d="M20 30L27 37L40 24" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>We deliver high-quality game art that meets industry standards</p>
            </div>
            
            <div className="advantage-item">
              <div className="icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#FFC700" strokeWidth="2"/>
                  <path d="M30 15V30L40 35" stroke="#FFC700" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality</p>
            </div>
            
            <div className="advantage-item">
              <div className="icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#FFC700" strokeWidth="2"/>
                  <path d="M25 30H35M30 25V35" stroke="#FFC700" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Flexible Solutions</h3>
              <p>Adaptable to your project needs and requirements</p>
            </div>
            
            <div className="advantage-item">
              <div className="icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#FFC700" strokeWidth="2"/>
                  <path d="M20 30H40M30 20V40" stroke="#FFC700" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p>Experienced artists dedicated to your success</p>
            </div>
          </div>
          
          <div className="stats-counter">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
