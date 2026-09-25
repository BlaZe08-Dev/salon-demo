import { Sparkles, Share2, Users, Phone, MapPin, Mail } from 'lucide-react';
import salon, { sections } from '../salon';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <div className="footer__logo">
            <Sparkles size={16} />
            <span>{salon.name}</span>
          </div>
          <p className="footer__tagline">{salon.tagline}</p>
          {(salon.social.instagram || salon.social.facebook) && (
            <div className="footer__social">
              {salon.social.instagram && (
                <a href={salon.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-btn">
                  <Share2 size={18} />
                </a>
              )}
              {salon.social.facebook && (
                <a href={salon.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-btn">
                  <Users size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="footer__links-group">
          <h4>Explore</h4>
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a>
            {sections.packages && <a href="#packages">Packages</a>}
            {sections.bridal && <a href="#bridal">Bridal</a>}
            {sections.gallery && <a href="#gallery">Gallery</a>}
            {sections.team && <a href="#team">Our Team</a>}
          </nav>
        </div>

        <div className="footer__links-group">
          <h4>Connect</h4>
          <div className="footer__contact">
            <a href={`tel:${salon.phone}`} className="footer__contact-item">
              <Phone size={14} />{salon.phone}
            </a>
            {salon.email && (
              <a href={`mailto:${salon.email}`} className="footer__contact-item">
                <Mail size={14} />{salon.email}
              </a>
            )}
            <div className="footer__contact-item">
              <MapPin size={14} />{salon.address.full}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {year} {salon.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
