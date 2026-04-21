# Requirements Document

## Introduction

TD Games là studio chuyên Outsource 2D Art / Animation / VFX cho game mobile với phong cách Cartoon 2D. Dự án này redesign lại trang landing page chính (`page.tsx`) theo hướng **B2B professional studio** — nhắm đến client doanh nghiệp cần thuê outsource art/animation. Bỏ hoàn toàn phong cách AAA cinematic (neon glow, purple/neon colors) của bản home-cyber, thay bằng dark elegant theme dùng charcoal/slate với accent vàng tiết kiệm. Trang home-cyber giữ nguyên làm reference, không bị ảnh hưởng.

---

## Glossary

- **Landing_Page**: Trang chính tại route `/` (`src/app/page.tsx`) — trang được redesign
- **Home_Cyber**: Trang reference tại `/home-cyber` — giữ nguyên, không chỉnh sửa
- **Navbar**: Component navigation bar cố định ở đầu trang
- **Hero_Section**: Phần đầu trang (above the fold) với headline, subtext và CTA chính
- **Services_Section**: Phần giới thiệu các dịch vụ: 2D Art, Animation, VFX
- **Portfolio_Section**: Phần showcase các dự án đã làm, có filter theo category
- **Stats_Section**: Phần hiển thị số liệu ấn tượng của studio (số artist, dự án, năm kinh nghiệm)
- **Testimonials_Section**: Phần trích dẫn đánh giá từ client
- **CTA_Section**: Phần kêu gọi hành động cuối trang
- **Footer**: Phần chân trang với links và thông tin liên hệ
- **Dark_Theme**: Bảng màu tối dùng charcoal (`#1a1a1a`, `#0f0f0f`) và slate (`#1e2530`, `#252d3a`) — KHÔNG dùng neon/purple
- **Gold_Accent**: Màu vàng đặc trưng TD Games (`amber-400` / `#fbbf24`) — dùng tiết kiệm cho highlight và CTA
- **Portfolio_Filter**: Bộ lọc danh mục portfolio (All, 2D Art, Animation, VFX)
- **Video_Asset**: Các file `.mp4` trong `/public/video/` — CutScene_SE, Super_Move, logo
- **Marquee_Ticker**: Component chạy chữ/logo liên tục ngang trang
- **Client_Logo**: Logo của các công ty đã hợp tác với TD Games

---

## Requirements

### Requirement 1: Tổng thể Visual Identity & Theme

**User Story:** As a potential B2B client, I want to see a professional dark-themed studio website, so that I can immediately recognize TD Games as a credible outsource partner.

#### Acceptance Criteria

1. THE Landing_Page SHALL use Dark_Theme as the primary background color scheme throughout all sections.
2. THE Landing_Page SHALL use Gold_Accent exclusively for primary CTA buttons, active navigation states, section dividers, and key highlight elements — no more than 20% of visual surface area.
3. THE Landing_Page SHALL NOT use neon colors (purple, cyan, electric blue) or glow/bloom effects from the Home_Cyber reference.
4. THE Landing_Page SHALL use a consistent typographic hierarchy with a bold display font for headings and a clean sans-serif for body text.
5. WHEN a user views the Landing_Page on any device, THE Landing_Page SHALL render responsively across mobile (≥320px), tablet (≥768px), and desktop (≥1280px) breakpoints.

---

### Requirement 2: Navbar

**User Story:** As a site visitor, I want a clear and persistent navigation bar, so that I can access any section of the site at any time.

#### Acceptance Criteria

1. THE Navbar SHALL be fixed at the top of the viewport and remain visible during scroll.
2. WHEN the user scrolls more than 40px from the top, THE Navbar SHALL apply a semi-transparent dark background with backdrop blur (`bg-black/90 backdrop-blur-md`).
3. THE Navbar SHALL display the TD Games logo (from `/public/video/logo/logo_td2.png`) on the left side.
4. THE Navbar SHALL include navigation links to: Home, Services, Portfolio, About, Blog, Careers.
5. THE Navbar SHALL display a "Get a Quote" CTA button on the right side styled with Gold_Accent border/accent.
6. WHEN the viewport width is less than 768px, THE Navbar SHALL collapse navigation links into a hamburger menu.
7. WHEN the hamburger menu is toggled open, THE Navbar SHALL display navigation links in a full-width dropdown panel.
8. WHEN a navigation link matches the current route, THE Navbar SHALL highlight that link with Gold_Accent color.

---

### Requirement 3: Hero Section

**User Story:** As a game studio or publisher visiting the site, I want to immediately understand what TD Games does and feel confident in their quality, so that I consider reaching out for outsource work.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a primary headline communicating TD Games' core value proposition as a 2D Art / Animation / VFX outsource studio.
2. THE Hero_Section SHALL display a subheadline with 1–2 sentences describing the studio's specialization (Cartoon 2D, mobile game art).
3. THE Hero_Section SHALL include a primary CTA button ("Get a Quote" or "View Our Work") styled with Gold_Accent.
4. THE Hero_Section SHALL include a secondary CTA button ("See Portfolio") with a ghost/outline style.
5. THE Hero_Section SHALL use at least one Video_Asset from `/public/video/` as a background or showcase element to demonstrate work quality.
6. WHEN the Video_Asset is playing, THE Hero_Section SHALL display it muted and looping without user interaction required.
7. THE Hero_Section SHALL display a minimum height of 100vh on desktop viewports.
8. IF the Video_Asset fails to load, THEN THE Hero_Section SHALL display a static fallback image or gradient background.

---

### Requirement 4: Stats / Social Proof Bar

**User Story:** As a potential client, I want to see quantifiable proof of TD Games' experience and scale, so that I trust them with my project.

#### Acceptance Criteria

1. THE Stats_Section SHALL display at least 3 key metrics (e.g., number of artists, projects delivered, years of experience, client retention rate).
2. THE Stats_Section SHALL present each metric as a large bold number with a short label.
3. THE Stats_Section SHALL be placed immediately after the Hero_Section or integrated into the Marquee_Ticker area.
4. WHEN the Stats_Section enters the viewport, THE Stats_Section SHALL animate the numbers counting up from 0 to their final value.

---

### Requirement 5: Services Section

**User Story:** As a client looking to outsource game art, I want to clearly understand what services TD Games offers, so that I can determine if they match my project needs.

#### Acceptance Criteria

1. THE Services_Section SHALL display exactly 3 primary service cards: 2D Art, Animation, VFX.
2. EACH service card SHALL include: a service icon or representative visual, a service title, a 2–3 sentence description, and a "Learn More" link.
3. THE Services_Section SHALL use a card-based grid layout (3 columns on desktop, 1 column on mobile).
4. WHEN a user hovers over a service card, THE Services_Section SHALL apply a subtle highlight effect (border color change to Gold_Accent or slight card elevation).
5. THE Services_Section SHALL include a section heading and a brief intro paragraph above the cards.
6. WHERE sub-services exist (e.g., Character Art, Environment Art under 2D Art), THE service card SHALL list them as bullet points or tags below the description.

---

### Requirement 6: Portfolio Highlights Section

**User Story:** As a client evaluating TD Games, I want to browse a curated selection of their best work, so that I can assess their art style and quality.

#### Acceptance Criteria

1. THE Portfolio_Section SHALL display a filterable grid of portfolio items.
2. THE Portfolio_Filter SHALL include at minimum these categories: All, 2D Art, Animation, VFX.
3. WHEN a user clicks a Portfolio_Filter category, THE Portfolio_Section SHALL show only items matching that category without a full page reload.
4. THE Portfolio_Section SHALL display at least 6 portfolio items in the highlights view.
5. EACH portfolio item SHALL display: a thumbnail image or video preview, a project title, and a category tag.
6. WHEN a user hovers over a portfolio item, THE Portfolio_Section SHALL display an overlay with the project title and a "View" action.
7. THE Portfolio_Section SHALL include a "View Full Portfolio" link/button directing to the `/portfolio` page.
8. THE Portfolio_Section SHALL use Video_Assets from `/public/video/Super_Move/` and `/public/video/CutScene_SE/` as portfolio item previews where applicable.

---

### Requirement 7: Client Testimonials Section

**User Story:** As a potential client, I want to read testimonials from companies that have worked with TD Games, so that I feel confident in their reliability and quality.

#### Acceptance Criteria

1. THE Testimonials_Section SHALL display at least 3 client testimonials.
2. EACH testimonial SHALL include: a quote text, the client's name, their role/title, and their company name.
3. THE Testimonials_Section SHALL present testimonials in a carousel or slider format on desktop.
4. WHEN the carousel auto-advances, THE Testimonials_Section SHALL transition between testimonials every 5 seconds.
5. THE Testimonials_Section SHALL provide manual navigation controls (previous/next arrows or dot indicators).
6. WHEN a user interacts with navigation controls, THE Testimonials_Section SHALL pause auto-advance for the duration of the user's session on that section.
7. WHERE client company logos are available, THE Testimonials_Section SHALL display the company logo alongside the testimonial.

---

### Requirement 8: Call-to-Action Section

**User Story:** As a client ready to start a project, I want a clear and compelling final CTA, so that I know exactly how to get in touch with TD Games.

#### Acceptance Criteria

1. THE CTA_Section SHALL be placed near the bottom of the Landing_Page, above the Footer.
2. THE CTA_Section SHALL display a headline encouraging the visitor to start a project.
3. THE CTA_Section SHALL include a primary button ("Get a Quote" or "Start a Project") linking to `/contact`, styled prominently with Gold_Accent.
4. THE CTA_Section SHALL include a secondary option (e.g., "Or email us directly" with a mailto link).
5. THE CTA_Section SHALL use a visually distinct background (slightly lighter or textured dark) to separate it from surrounding sections.

---

### Requirement 9: Footer

**User Story:** As a site visitor, I want a well-organized footer with key links and contact info, so that I can navigate to any part of the site or reach TD Games easily.

#### Acceptance Criteria

1. THE Footer SHALL display the TD Games logo.
2. THE Footer SHALL include navigation links grouped by category: Services, Company (About, Blog, Careers), Legal (Privacy Policy, Terms).
3. THE Footer SHALL display contact information: email address and social media links.
4. THE Footer SHALL display a copyright notice with the current year.
5. THE Footer SHALL use Dark_Theme background consistent with the rest of the Landing_Page.

---

### Requirement 10: Page-Level Routes & Navigation Structure

**User Story:** As a developer, I want a clear routing structure for all pages, so that the site is navigable and scalable.

#### Acceptance Criteria

1. THE Landing_Page SHALL be accessible at the root route `/`.
2. THE Landing_Page SHALL NOT modify or affect the Home_Cyber page at `/home-cyber`.
3. THE Landing_Page SHALL include route stubs (placeholder pages) for: `/services`, `/portfolio`, `/about`, `/blog`, `/contact`, `/careers`.
4. WHEN a user navigates to any stub route, THE stub page SHALL display a minimal placeholder with the Navbar and a "Coming Soon" message rather than a 404 error.
5. THE Landing_Page SHALL use the new Navbar component (not NavbarCyber) for the redesigned theme.

---

### Requirement 11: Performance & Accessibility

**User Story:** As a site visitor on any device or network, I want the page to load quickly and be usable, so that I have a good experience regardless of my setup.

#### Acceptance Criteria

1. THE Landing_Page SHALL lazy-load Video_Assets and off-screen images to avoid blocking initial page render.
2. WHEN a user has `prefers-reduced-motion` enabled, THE Landing_Page SHALL disable or reduce animations (count-up, carousel auto-advance, video autoplay).
3. THE Landing_Page SHALL provide `alt` text for all `<img>` elements.
4. THE Landing_Page SHALL provide `aria-label` attributes for all icon-only buttons (hamburger menu, carousel navigation).
5. THE Landing_Page SHALL achieve a Lighthouse Performance score of at least 70 on desktop.
6. IF a Video_Asset exceeds 10MB, THEN THE Landing_Page SHALL use the `loading="lazy"` strategy or defer video load until the section is near the viewport.
