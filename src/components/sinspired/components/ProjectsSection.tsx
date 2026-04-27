"use client";

const IMAGE_6 = "/images/img6.jpg";
const IMAGE_7 = "/images/img7.jpg";
const IMAGE_8 = "/images/img8.jpg";

export default function ProjectsSection() {
  return (
    <section className="container-wrap">
      <div className="container-custom">
        <div className="heading aos-init aos-animate" data-aos="fade-up">
          <h2>OUR <em>PROJECTS</em></h2>
          <p>OUR PROJECTS</p>
        </div>
        <div className="projects" data-count="5">
          <div className="project aos-init aos-animate" data-aos="fade-up">
            <div className="project-inner">
              <a href="https://sinspiredstudio.com/projects/adventure-legacy/"></a>
              <h5 className="title">
                <a href="https://sinspiredstudio.com/projects/adventure-legacy/" rel="bookmark" title="Adventure Legacy">Adventure Legacy</a>
              </h5>
              <div className="image">
                <img width="1024" height="768" src={IMAGE_6} className="attachment-large size-large wp-post-image" alt="Adventure Legacy" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="project aos-init aos-animate" data-aos="fade-up">
            <div className="project-inner">
              <a href="https://sinspiredstudio.com/projects/fantasy-quest/"></a>
              <h5 className="title">
                <a href="https://sinspiredstudio.com/projects/fantasy-quest/" rel="bookmark" title="Fantasy Quest">Fantasy Quest</a>
              </h5>
              <div className="image">
                <img width="1024" height="768" src={IMAGE_7} className="attachment-large size-large wp-post-image" alt="Fantasy Quest" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="project aos-init aos-animate" data-aos="fade-up">
            <div className="project-inner">
              <a href="https://sinspiredstudio.com/projects/space-odyssey/"></a>
              <h5 className="title">
                <a href="https://sinspiredstudio.com/projects/space-odyssey/" rel="bookmark" title="Space Odyssey">Space Odyssey</a>
              </h5>
              <div className="image">
                <img width="1024" height="768" src={IMAGE_8} className="attachment-large size-large wp-post-image" alt="Space Odyssey" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
