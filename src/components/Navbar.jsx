import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --navy-950: #020917;
          --navy-900: #050f1f;
          --navy-800: #0a1a33;
          --navy-700: #0e2347;
          --navy-600: #133060;
          --navy-400: #2a5ba8;
          --accent-blue: #4d8ef0;
          --accent-cyan: #38bdf8;
          --accent-glow: rgba(77, 142, 240, 0.35);
          --text-bright: #e8f0ff;
          --text-muted: #6b84ad;
          --text-dim: #3d5278;
          --border-subtle: rgba(77, 142, 240, 0.12);
          --border-glow: rgba(77, 142, 240, 0.3);
        }

        .navbar-root {
          font-family: 'Outfit', sans-serif;
        }

        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(2, 9, 23, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .navbar-header.scrolled {
          background: rgba(5, 15, 31, 0.92);
          border-bottom-color: var(--border-glow);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.4), 0 1px 0 var(--border-glow);
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, var(--navy-600), var(--accent-blue));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 13px;
          color: white;
          letter-spacing: 0.5px;
          box-shadow: 0 0 16px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.15);
          position: relative;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .logo-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          border: 1px solid rgba(77, 142, 240, 0.4);
        }

        .logo-wrap:hover .logo-badge {
          box-shadow: 0 0 28px var(--accent-glow), 0 0 8px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.2);
          transform: scale(1.05);
        }

        .logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 2.5px;
          color: var(--text-bright);
          text-transform: uppercase;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-bright);
          background: rgba(77, 142, 240, 0.08);
        }

        .nav-link:hover::after {
          width: 60%;
        }

        /* Right Controls */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Timezone Pill */
        .timezone-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(10, 26, 51, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: 100px;
          transition: border-color 0.3s ease;
        }

        .timezone-pill:hover {
          border-color: var(--border-glow);
        }

        .tz-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent-cyan);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--accent-cyan); }
          50% { opacity: 0.6; box-shadow: 0 0 12px var(--accent-cyan); }
        }

        .tz-location {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .tz-time {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--accent-cyan);
          letter-spacing: 0.5px;
          border-left: 1px solid var(--border-subtle);
          padding-left: 8px;
          margin-left: 2px;
        }

        /* CTA Button */
        .cta-btn {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent-blue);
          background: transparent;
          border: 1.5px solid rgba(77, 142, 240, 0.4);
          padding: 9px 20px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(77, 142, 240, 0.12), rgba(56, 189, 248, 0.08));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-btn:hover {
          color: white;
          border-color: var(--accent-blue);
          box-shadow: 0 0 20px var(--accent-glow), 0 0 40px rgba(77, 142, 240, 0.1);
          transform: translateY(-1px);
        }

        .cta-btn:hover::before {
          opacity: 1;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          background: rgba(10, 26, 51, 0.8);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-toggle:hover {
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.1);
          color: var(--accent-blue);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(5, 15, 31, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-glow);
          padding: 8px 24px 24px;
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 20px;
        }

        .mobile-nav-link {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid var(--border-subtle);
          transition: color 0.2s ease, padding-left 0.2s ease;
          letter-spacing: 0.3px;
        }

        .mobile-nav-link:hover {
          color: var(--text-bright);
          padding-left: 8px;
        }

        .mobile-cta {
          width: 100%;
          margin-top: 20px;
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: white;
          background: linear-gradient(135deg, var(--navy-600), var(--accent-blue));
          border: none;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px var(--accent-glow);
        }

        .mobile-cta:hover {
          box-shadow: 0 6px 30px rgba(77, 142, 240, 0.5);
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .cta-btn { display: none; }
        }

        @media (max-width: 480px) {
          .tz-location { display: none; }
          .timezone-pill { gap: 6px; padding: 5px 10px; }
        }

        @media (max-width: 640px) {
          .logo-name { display: none; }
          .navbar-inner { padding: 0 1.25rem; }
        }

        @media (min-width: 769px) {
          .mobile-toggle { display: none; }
        }
      `}</style>

      <div className="navbar-root">
        <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-inner">

            {/* Logo */}
            <div className="logo-wrap">
              <div className="logo-badge">AK</div>
              <span className="logo-name">Asad Khan</span>
            </div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <Link to="/" className="nav-link">
                  Home
                </Link>
              {['Projects', 'Experience', 'Contact'].map((item) => (
                <Link key={item} to={`${item.toLowerCase()}`} className="nav-link">
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="nav-right">
              <div className="timezone-pill">
                <div className="tz-dot" />
                <span className="tz-location">Karachi, PK</span>
                <span className="tz-time">{currentTime}</span>
              </div>

              <button className="cta-btn">
                Let's Talk
              </button>

              <button
                className="mobile-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-divider" />
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mobile-cta" onClick={() => setIsMenuOpen(false)}>
                Let's Talk
              </button>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;