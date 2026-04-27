"use client";

const IMAGE_15 = "/images/contact-image.png";

export default function ContactSection() {
  return (
    <section className="container-wrap">
      <div className="container-custom">
        <div className="content aos-init aos-animate" data-aos="fade-up">
          <h2>Ready to Bring <em>Your Vision to Life?</em></h2>
          <p>Contact us today to discuss your project and get a free quote.</p>
          
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your project" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
        
        <div className="image aos-init aos-animate" data-aos="fade-up">
          <img src={IMAGE_15} alt="Contact Sinspired Studio" />
        </div>
      </div>
    </section>
  );
}
