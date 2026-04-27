"use client";

export default function Footer() {
  return (
    <footer className="site-footer" id="colophon">
      <div className="site-primary-footer-wrap">
        <div className="ast-builder-grid-row-container-inner">
          <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
            
            {/* Social Icons */}
            <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
              <div className="footer-social-wrap">
                <a
                  href="https://www.linkedin.com/company/sinspired"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-item"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/Sinspiredstudio"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-item"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/sinspired.studio/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-item"
                >
                  Instagram
                </a>
                <a
                  href="https://www.artstation.com/sinspired"
                  aria-label="ArtStation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-item"
                >
                  ArtStation
                </a>
                <a
                  href="https://www.behance.net/sinspired"
                  aria-label="Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-item"
                >
                  Behance
                </a>
              </div>
            </div>

            {/* Footer Widgets */}
            <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <p>
                  <a href="https://maps.app.goo.gl/dDE1iMsTUHY5s2ur8" target="_blank" rel="noopener">
                    Harju maakond, Tallinn, Kesklinna linnaosa, Kaupmehe tn 7-120, 10114
                  </a>
                </p>
                <p>
                  <a href="https://maps.app.goo.gl/hQSAKZU6ptEQ5grH9" target="_blank" rel="noopener">
                    Zelena St, 25, Lviv, Lviv Oblast, 79005
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@sinspiredstudio.com">hello@sinspiredstudio.com</a>
                </p>
                <p>
                  <a href="/contacts/">Contact us</a>
                </p>
              </div>

              <div className="footer-widget">
                <h4>Services</h4>
                <p><a href="/3d-art/">3D Art</a></p>
                <p><a href="/2d-art/">2D Art</a></p>
                <p><a href="/game-animation/">Game Animation</a></p>
              </div>

              <div className="footer-widget">
                <h4>Company</h4>
                <p><a href="/company/">Company</a></p>
                <p><a href="/projects/">Our projects</a></p>
                <p><a href="/careers/">Careers</a></p>
                <p><a href="/blog/">Blog</a></p>
              </div>

              <div className="footer-widget">
                <h4>Info</h4>
                <p><a href="/privacy-policy">Privacy policy</a></p>
                <p><a href="/terms-of-use/">Terms of use</a></p>
                <p><a href="/faq/">FAQ</a></p>
                <p><a href="/glossary/">Glossary</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="site-below-footer-wrap">
        <div className="ast-builder-grid-row-container-inner">
          <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
            <div className="site-footer-below-section-1">
              <p>© 2023 SINSPIRED</p>
              <p>
                «All company names, brand names, trademarks, logos, illustrations, videos and any 
                other intellectual property (Intellectual Property) published on this website are 
                the property of their respective owners. Any non-authorized usage of Intellectual 
                Property is strictly prohibited and any violation will be prosecuted under the law.»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Running Text */}
      <div className="running-text">
        {[...Array(20)].map((_, i) => {
          const shapes = ["square", "circle", "triangle", "cross"];
          const shape = shapes[i % 4];
          return (
            <div key={i} className={`text-line ${shape}`}>
              Sinspired studio
            </div>
          );
        })}
      </div>
    </footer>
  );
}
