import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../contact.css";

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    formRef.current.reset();
  };

  return (
    <>
      <section id="contact" className="modern-contact-section">
        {/* Barra lateral (solo en desktop) */}
        <div className="contact-sidebar">
          <span className="contact-sidebar-label">CONTACT</span>
          <span className="contact-sidebar-bar"></span>
        </div>

        {/* Contenido */}
        <div className="modern-contact-grid">
          {/* Columna izquierda: Formulario */}
          <div className="modern-contact-form-col">
            <p className="contact-with-me">Contact with me</p>
            <div className="modern-contact-form-box">
              <p className="contact-form-desc">
                If you have any questions or concerns, please don't hesitate to contact me. 
                I am open to any work opportunities that align with my skills and interests.
              </p>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="off"
                className="modern-contact-form"
              >
                <div className="form-group">
                  <label>Your Name:</label>
                  <input className="modern-input" type="text" name="name" maxLength={100} required />
                </div>
                <div className="form-group">
                  <label>Your Email:</label>
                  <input className="modern-input" type="email" name="email" maxLength={100} required />
                </div>
                <div className="form-group">
                  <label>Your Message:</label>
                  <textarea className="modern-input" name="message" maxLength={500} rows={4} required></textarea>
                </div>
                <div className="form-btn-row">
                  <button type="submit" className="modern-send-btn">
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                  {sent && <div className="contact-sent-msg">Message sent! 🚀</div>}
                </div>
              </form>
            </div>
          </div>

          {/* Columna derecha: Datos de contacto */}
          <div className="modern-contact-info-col">
            <div className="modern-contact-info-list">
              <div className="modern-contact-info-item">
                <i className="fa-solid fa-envelope info-icon"></i>
                <span>facundo.esolis@gmail.com</span>
              </div>
              <div className="modern-contact-info-item">
                <i className="fa-brands fa-whatsapp info-icon"></i>
                <span>+34 601235967</span>
              </div>
              <div className="modern-contact-info-item">
                <i className="fa-solid fa-location-dot info-icon"></i>
                <span>Las Palmas de Gran Canaria, España</span>
              </div>
            </div>
            <div className="modern-contact-social-row">
              <a className="modern-contact-social" href="https://github.com/FacundoSolis" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="modern-contact-social" href="https://www.linkedin.com/in/facundosolis/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="modern-contact-social" href="mailto:facundosolisdev@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a className="modern-contact-social" href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Botón volver atrás */}
      <div className="contact-back-row">
        <button className="modern-send-btn" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left"></i> Volver atrás
        </button>
      </div>
    </>
  );
}

export default Contact;
