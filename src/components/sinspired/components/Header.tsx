"use client";
import { useState, useEffect } from "react";

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline${scrolled ? " show" : ""}`}
      id="masthead"
    >
      {/* Desktop header */}
      <div id="ast-desktop-header" data-toggle-type="off-canvas">
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item">
            <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container">
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout">

                {/* Logo */}
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                    <div className="site-branding ast-site-identity">
                      <span className="site-logo-img">
                        <a href="https://sinspiredstudio.com/" className="custom-logo-link" rel="home">
                          <img width={70} height={60} src="/images/img1.svg" className="custom-logo" alt="Sinspired" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nav center */}
                <div className="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                  <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-layout-element site-header-focus-item">
                    <div className="ast-main-header-bar-alignment">
                      <div className="main-header-bar-navigation">
                        <nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation-desktop" aria-label="Site Navigation">
                          <div className="main-navigation ast-inline-flex">
                            <ul className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile">
                              <li className="menu-item menu-item-has-children">
                                <a href="#" className="menu-link">
                                  Services
                                  <span className="dropdown-menu-toggle ast-header-navigation-arrow">
                                    <span className="ast-icon icon-arrow">
                                      <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="26px" height="16.043px" viewBox="57 35.171 26 16.043">
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                                <ul className="sub-menu">
                                  <li><a href="https://sinspiredstudio.com/2d-art/" className="menu-link">2D Art</a></li>
                                  <li><a href="https://sinspiredstudio.com/3d-art/" className="menu-link">3D Art</a></li>
                                  <li><a href="https://sinspiredstudio.com/game-animation/" className="menu-link">Game Animation</a></li>
                                  <li><a href="https://sinspiredstudio.com/concept-art/" className="menu-link">Concept Art</a></li>
                                  <li><a href="https://sinspiredstudio.com/environment-art/" className="menu-link">Environment Art</a></li>
                                  <li><a href="https://sinspiredstudio.com/illustrations/" className="menu-link">Illustrations</a></li>
                                  <li><a href="https://sinspiredstudio.com/slots-game-art/" className="menu-link">Slots Game Art</a></li>
                                  <li><a href="https://sinspiredstudio.com/ui-ux-design/" className="menu-link">UI/UX Design</a></li>
                                </ul>
                              </li>
                              <li className="menu-item"><a href="https://sinspiredstudio.com/projects/" className="menu-link">Our projects</a></li>
                              <li className="menu-item"><a href="https://sinspiredstudio.com/company/" className="menu-link">Company</a></li>
                              <li className="menu-item"><a href="https://sinspiredstudio.com/blog/" className="menu-link">Blog</a></li>
                              <li className="menu-item"><a href="https://sinspiredstudio.com/careers/" className="menu-link">Careers</a></li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Us button */}
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1">
                    <div className="ast-builder-button-wrap ast-builder-button-size-">
                      <a className="ast-custom-button-link" href="#open-form" onClick={(e) => { e.preventDefault(); onContactClick(); }}>
                        <div className="ast-custom-button">CONTACT US</div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div id="ast-mobile-header" className="ast-mobile-header-wrap">
        <div className="ast-primary-header-bar ast-primary-header main-header-bar">
          <div className="site-primary-header-wrap ast-builder-grid-row-container ast-container">
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout">
              <div className="site-header-primary-section-left site-header-section ast-flex">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                  <div className="site-branding ast-site-identity">
                    <span className="site-logo-img">
                      <a href="https://sinspiredstudio.com/" className="custom-logo-link" rel="home">
                        <img width={70} height={60} src="/images/img1.svg" className="custom-logo" alt="Sinspired" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="site-header-primary-section-right site-header-section ast-flex">
                <div className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1">
                  <div className="ast-builder-button-wrap">
                    <a className="ast-custom-button-link" href="#open-form" onClick={(e) => { e.preventDefault(); onContactClick(); }}>
                      <div className="ast-custom-button">CONTACT US</div>
                    </a>
                  </div>
                </div>
                <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                  <div className="ast-mobile-menu-buttons">
                    <button
                      type="button"
                      className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                      aria-expanded={mobileOpen}
                      onClick={() => setMobileOpen(!mobileOpen)}
                    >
                      <span className="screen-reader-text">Main Menu</span>
                      <span className="mobile-menu-toggle-icon">
                        {mobileOpen ? (
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">✕</span>
                        ) : (
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">☰</span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div id="ast-mobile-site-navigation" className="ast-mobile-navigation-active">
            <div className="ast-mobile-nav-wrap">
              <ul id="ast-hf-mobile-menu" className="main-header-menu ast-nav-menu ast-flex submenu-with-border">
                <li className="menu-item menu-item-has-children">
                  <a href="#" className="menu-link">Services</a>
                  <ul className="sub-menu">
                    <li><a href="https://sinspiredstudio.com/2d-art/">2D Art</a></li>
                    <li><a href="https://sinspiredstudio.com/3d-art/">3D Art</a></li>
                    <li><a href="https://sinspiredstudio.com/game-animation/">Game Animation</a></li>
                    <li><a href="https://sinspiredstudio.com/concept-art/">Concept Art</a></li>
                    <li><a href="https://sinspiredstudio.com/environment-art/">Environment Art</a></li>
                    <li><a href="https://sinspiredstudio.com/illustrations/">Illustrations</a></li>
                    <li><a href="https://sinspiredstudio.com/slots-game-art/">Slots Game Art</a></li>
                    <li><a href="https://sinspiredstudio.com/ui-ux-design/">UI/UX Design</a></li>
                  </ul>
                </li>
                <li className="menu-item"><a href="https://sinspiredstudio.com/projects/" className="menu-link">Our projects</a></li>
                <li className="menu-item"><a href="https://sinspiredstudio.com/company/" className="menu-link">Company</a></li>
                <li className="menu-item"><a href="https://sinspiredstudio.com/blog/" className="menu-link">Blog</a></li>
                <li className="menu-item"><a href="https://sinspiredstudio.com/careers/" className="menu-link">Careers</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
