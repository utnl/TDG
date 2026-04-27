'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Overall we are EXTREMELY happy! The only thing we'd love to improve upon is more frequent communication. Twice a day even would be great. This will help us better understand the timeline it takes for each mission and have better expectations for what we're about to receive on a daily basis. We're a small team, so every day is very important for us to make significant progress and know we are on the right direction. Thank you for being incredible partners!",
      author: "Jonn Weinberg",
      company: "Astronomica"
    },
    {
      text: "We are fully satisfied with the quality of your work and even if sometimes the deadlines are not fully respected it is worth waiting.",
      author: "Fabrizio Vesprini",
      company: "Eurobet"
    },
    {
      text: "Guys are professionals. We have a very smooth experience and would love to keep working with Sinspired Studio on future projects.",
      author: "Pavel Agoshkov",
      company: "SuperGaming"
    },
    {
      text: "I've worked with the Sinspired Studio a couple of times, and, frankly, I'm fully satisfied with the results they've created. All objects were created before the deadline, and all our adjustments were implemented. We're looking to move forward with another projects this year. Strongly recommend!",
      author: "Tom Johnson",
      company: "CSC Games"
    },
    {
      text: "I recently had a 3D character created, and the experience was fantastic! The team nailed my vision, delivered on time, and the character exceeded my expectations.",
      author: "Tom Brunner",
      company: "GI Group"
    },
    {
      text: "Awesome job, guys! Thanks for easy cooperation, delivery in time, and of course quality of the animation. P.S. Also we're thankful for the tools you shared with us. Now, we're using them in our workflow as well.",
      author: "Adal Werner",
      company: "RocketGames"
    },
    {
      text: "We had a very short deadlines for creation a couple of characters, because of poor quality of our previous supplier, and guys helped us to deal with our needs on time with a very high quality. Thanks to the team, and looking forward to our future cooperation.",
      author: "Peter Wilson",
      company: "Dot Games"
    }
  ];

  return (
    <section className="container-wrap testimonials">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>WHAT ARE PEOPLE <em>SAYING</em></h2>
          <p>REVIEWS</p>
        </div>
        
        <div className="testimonials-grid" data-aos="fade-up">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial">
              <div className="testimonial-inner">
                <p>{testimonial.text}</p>
                <p><strong>{testimonial.author}<br /></strong>{testimonial.company}</p>
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
