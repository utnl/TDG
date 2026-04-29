'use client';

import Image from 'next/image';

const testimonials = [
  {
    text: "Overall we are EXTREMELY happy! The only thing we'd love to improve upon is more frequent communication. Twice a day even would be great.",
    author: "Jonn Weinberg",
    company: "Astronomica",
    rating: 5,
    avatar: "/images/avatar1.jpg"
  },
  {
    text: "We are fully satisfied with the quality of your work and even if sometimes the deadlines are not fully respected it is worth waiting.",
    author: "Fabrizio Vesprini",
    company: "Eurobet",
    rating: 5,
    avatar: "/images/avatar2.jpg"
  },
  {
    text: "Guys are professionals. We have a very smooth experience and would love to keep working with Sinspired Studio on future projects.",
    author: "Pavel Agoshkov",
    company: "SuperGaming",
    rating: 5,
    avatar: "/images/avatar3.jpg"
  },
  {
    text: "I've worked with the Sinspired Studio a couple of times, and, frankly, I'm fully satisfied with the results they've created.",
    author: "Tom Johnson",
    company: "CSC Games",
    rating: 5,
    avatar: "/images/avatar4.jpg"
  },
  {
    text: "I recently had a 3D character created, and the experience was fantastic! The team nailed my vision, delivered on time.",
    author: "Tom Brunner",
    company: "GI Group",
    rating: 5,
    avatar: "/images/avatar5.jpg"
  },
  {
    text: "Awesome job, guys! Thanks for easy cooperation, delivery in time, and of course quality of the animation.",
    author: "Adal Werner",
    company: "RocketGames",
    rating: 5,
    avatar: "/images/avatar6.jpg"
  }
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '60px',
  } as React.CSSProperties,
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  } as React.CSSProperties,
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  stars: {
    display: 'flex',
    gap: '4px',
  } as React.CSSProperties,
  star: {
    color: '#ffc700',
    fontSize: '18px',
  } as React.CSSProperties,
  quoteIcon: {
    fontSize: '48px',
    color: '#e8e8e8',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
  } as React.CSSProperties,
  content: {
    flex: 1,
  } as React.CSSProperties,
  contentText: {
    color: '#323232',
    fontSize: '15px',
    lineHeight: '1.7',
    fontStyle: 'italic',
  } as React.CSSProperties,
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #e8e8e8',
  } as React.CSSProperties,
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#e8e8e8',
  } as React.CSSProperties,
  authorInfo: {
    flex: 1,
  } as React.CSSProperties,
  authorName: {
    color: '#151515',
    fontSize: '16px',
    fontWeight: 600,
    margin: 0,
  } as React.CSSProperties,
  authorCompany: {
    color: '#a1a1a1',
    fontSize: '14px',
    margin: '4px 0 0 0',
  } as React.CSSProperties,
};

export default function TestimonialsSection() {
  return (
    <section className="container-wrap testimonials">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>WHAT ARE PEOPLE <em>SAYING</em></h2>
          <p>REVIEWS</p>
        </div>
        
        <div className="testimonials-grid" data-aos="fade-up" style={styles.grid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card" style={styles.card}>
              <div style={styles.header}>
                <div style={styles.stars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={styles.star}>★</span>
                  ))}
                </div>
                <p style={styles.quoteIcon}>"</p>
              </div>
              <div style={styles.content}>
                <p style={styles.contentText}>"{testimonial.text}"</p>
              </div>
              <div style={styles.footer}>
                <div style={styles.avatar}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div style={styles.authorInfo}>
                  <h4 style={styles.authorName}>{testimonial.author}</h4>
                  <p style={styles.authorCompany}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-content" data-aos="fade-up">
          <div className="image">
            <Image
              src="/images/contact-image.png"
              alt="Join Sinspired Studio"
              width={400}
              height={400}
            />
          </div>
          <div className="content">
            <div className="content-wrap">
              <h3>Join the <em>Sinspired Studio</em> Team</h3>
              <p>We invite passionate, talented individuals to join our ambitious and welcoming team. Discover career opportunities and contribute to our artistic excellence.</p>
              <p><a className="button" href="/careers#available-vacancies">View vacancies</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
