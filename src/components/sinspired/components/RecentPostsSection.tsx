'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RecentPostsSection() {
  const posts = [
    {
      title: 'How to create a game character',
      excerpt: 'In order to craft an effective story, characters serve as essential symbols, and creating compelling video game characters is a nuanced process.',
      date: '01.22.2024',
      image: '/images/blog-1.jpg',
      slug: 'how-to-create-a-game-character'
    },
    {
      title: 'HIGH POLY AND LOW POLY MODELING',
      excerpt: 'As the field of 3D modeling evolves, two prominent techniques have emerged: high poly and low poly modeling. Understanding the differences between these approaches is crucial for achieving desired outcomes.',
      date: '01.22.2024',
      image: '/images/blog-2.jpg',
      slug: 'high-poly-and-low-poly-modeling'
    },
    {
      title: 'Animation Outsourcing: A Guide for Success',
      excerpt: 'Animation outsourcing involves assigning parts of an animation project to external entities, including individuals or companies.',
      date: '01.22.2024',
      image: '/images/blog-1.jpg',
      slug: 'animation-outsourcing-guide'
    }
  ];

  return (
    <section className="container-wrap recent-posts">
      <div className="container-custom">
        <div className="content-wrap">
          <div className="heading" data-aos="fade-up">
            <h2>Stay Informed with <em>Our Blog</em></h2>
          </div>
          
          <div className="posts-grid" data-aos="fade-up">
            {posts.map((post, idx) => (
              <div key={idx} className="post">
                <div className="image-wrap">
                  <Link href={`/blog/${post.slug}`} className="image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="post-image"
                    />
                  </Link>
                </div>
                <div className="post-details">
                  <div className="details-inner">
                    <h6>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h6>
                    <div className="excerpt">
                      <div className="excerpt-inner">
                        <p>{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="post-meta">
                      <div className="published-on">{post.date}</div>
                      <Link href={`/blog/${post.slug}`}></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/blog" className="button">More news</Link>
        </div>
      </div>
    </section>
  );
}
