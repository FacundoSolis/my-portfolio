import "../scrollbar-intro.css";


import { useEffect } from "react";
const perfil = import.meta.env.BASE_URL + "images/perfil.png"; // ✅
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Intro() {
  const navigate = useNavigate();

  return (
    <>
      <section className="modern-intro-section" style={{ width: '100vw', maxWidth: 'none', margin: 0, padding: 0, overflow: 'hidden' }}>
        {/* Imagen decorativa SVG de fondo */}
        <img
  src={`${import.meta.env.BASE_URL}images/hero.svg`}
          alt="Hero background"
          className="intro-hero-bg"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <div className="modern-intro-grid" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: '4rem' }}>
          {/* Columna izquierda: texto y botones */}
          <div className="modern-intro-content">
            <h1 className="modern-intro-title">
              Hello,<br />This is <span className="intro-name-highlight">Facundo Solis
                <img
                  alt="👋"
                  draggable="false"
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                  className="wave-emoji"
                  style={{ height: '1em', width: '1em', margin: '0 0.05em 0 0.1em', verticalAlign: '-0.1em' }}
                />
              </span>,<br />
              I'm a Professional <span className="intro-role-highlight">Full-Stack Developer</span>.
            </h1>
            <div className="modern-intro-socials">
              <a href="https://github.com/FacundoSolis" target="_blank" rel="noopener noreferrer" className="modern-intro-social" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/facundosolis/" target="_blank" rel="noopener noreferrer" className="modern-intro-social" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:facundosolisdev@gmail.com" target="_blank" rel="noopener noreferrer" className="modern-intro-social" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="modern-intro-social" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          {/* Columna derecha: bloque de código decorativo */}
          <div className="modern-intro-code-window">
            <div className="code-window-bar">
              <span className="code-dot code-dot-red"></span>
              <span className="code-dot code-dot-orange"></span>
              <span className="code-dot code-dot-green"></span>
            </div>
            <div className="code-window-content">
              <pre className="code-pre">
<code className="code-block">
  <>
    <span className="code-keyword">const</span> <span className="code-var">coder</span> <span className="code-operator">=</span> <span className="code-brace">{'{'}</span><br />
    &nbsp;&nbsp;<span className="code-prop">name</span>: <span className="code-string">'Facundo Solis'</span>,<br />
    &nbsp;&nbsp;<span className="code-prop">skills</span>: [<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Express'</span>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'MongoDB'</span>, <span className="code-string">'Docker'</span>
    &nbsp;&nbsp;],<br />
    &nbsp;&nbsp;<span className="code-prop">hardWorker</span>: <span className="code-boolean">true</span>,<br />
    &nbsp;&nbsp;<span className="code-prop">quickLearner</span>: <span className="code-boolean">true</span>,<br />
    &nbsp;&nbsp;<span className="code-prop">problemSolver</span>: <span className="code-boolean">true</span>,<br />
    &nbsp;&nbsp;<span className="code-prop">hireable</span>: <span className="code-function">function</span>() <span className="code-brace">{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> (<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">this</span>.<span className="code-prop">hardWorker</span> &&<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">this</span>.<span className="code-prop">problemSolver</span> &&<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">this</span>.<span className="code-prop">skills</span>.length <span className="code-operator">&gt;=</span> <span className="code-number">5</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;);<br />
    &nbsp;&nbsp;<span className="code-brace">{'}'}</span><br />
    <span className="code-brace">{'}'}</span>;<br />
  </>
</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
