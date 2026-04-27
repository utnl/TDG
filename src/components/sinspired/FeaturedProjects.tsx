"use client";
import Image from "next/image";

const projects = [
  {
    title: "Adventure Legacy",
    image: "/images/img6.jpg",
    link: "https://sinspiredstudio.com/projects/adventure-legacy/",
  },
  {
    title: "Claws & Paws",
    image: "/images/img7.jpg",
    link: "https://sinspiredstudio.com/projects/claws-paws/",
  },
  {
    title: "Doctor Brain",
    image: "/images/img8.jpg",
    link: "https://sinspiredstudio.com/projects/doctor-brain/",
  },
  {
    title: "Greytail Adventure PART I",
    image: "/images/img9.jpg",
    link: "https://sinspiredstudio.com/projects/greytail-adventure-part-i/",
  },
  {
    title: "Mavka Enchanted Game",
    image: "/images/img10.jpg",
    link: "https://sinspiredstudio.com/projects/mavka-enchanted-game/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="container-wrap featured-projects">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>
            OUR <em>PROJECTS</em>
          </h2>
          <p>OUR PROJECTS</p>
        </div>

        <div className="projects" data-count={projects.length}>
          {projects.map((project, index) => (
            <div key={index} className="project" data-aos="fade-up">
              <div className="project-inner">
                <a href={project.link}></a>
                <h5 className="title">
                  <a href={project.link} rel="bookmark" title={project.title}>
                    {project.title}
                  </a>
                </h5>
                <div className="image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={600}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
