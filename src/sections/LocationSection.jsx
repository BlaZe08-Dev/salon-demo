import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import salon from '../salon';
import './LocationSection.css';

export default function LocationSection() {

  return (
    <section className="location-section section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="text-label">Find Us</span>
          <h2 className="text-section-title">Come visit
            <br />your sanctuary.</h2>
          <div className="divider" />
        </div>

        <div className="location-grid">
          {/* Info card */}
          <motion.div
            className="location-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {salon.address.full && (
              <div className="location-card__item">
                <span className="location-card__icon"><MapPin size={18} /></span>
                <div>
                  <div className="location-card__label">Address</div>
                  <div className="location-card__value">{salon.address.full}</div>
                </div>
              </div>
            )}

            <div className="location-card__item">
              <span className="location-card__icon"><Phone size={18} /></span>
              <div>
                <div className="location-card__label">Phone</div>
                <a
                  href={`tel:${salon.phone}`}
                  className="location-card__value location-card__value--link"
                >
                  {salon.phone}
                </a>
              </div>
            </div>

            {salon.hoursDisplay.length > 0 && (
            <div className="location-card__item">
              <span className="location-card__icon"><Clock size={18} /></span>
              <div>
                <div className="location-card__label">Hours</div>
                <div className="location-card__hours">
                  {salon.hoursDisplay.map((h) => (
                    <div key={h.days} className="location-card__hour-row">
                      <span>{h.days}</span>
                      <span className={h.time === 'Closed' ? 'location-card__closed' : ''}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            <div className="location-card__actions">
              <a
                href={salon.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="get-directions-btn"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${salon.phone}`}
                className="btn btn-outline"
                id="call-now-btn"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map visual card */}
          <motion.div
            className="location-map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="location-map__img-wrap">
              <img src={salon.about.image} alt={`${salon.name} salon`} loading="lazy" />
              <div className="location-map__overlay">
                <a
                  href={salon.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-map__cta"
                  id="open-maps-btn"
                >
                  <ExternalLink size={14} />
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
