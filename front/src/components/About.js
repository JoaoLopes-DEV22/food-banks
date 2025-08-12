import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="sobre" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-md-6 order-md-2">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Hamburguer Artesanal"
              className="img-fluid rounded-lg shadow-lg animate__animated animate__zoomIn"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="display-4 font-bold mb-4">Nossa Paixão por Sabor</h2>
            <p className="text-muted mb-4 lead">
              Desde 2020, a Prime Burguers eleva o hambúrguer a uma arte. Com ingredientes orgânicos, receitas inovadoras e dedicação total, criamos experiências que vão além do paladar.
            </p>
            <p className="text-muted mb-5">
              Seja para um almoço rápido ou uma noite especial, nossos burguers entregam felicidade em cada mordida. Junte-se à revolução do sabor!
            </p>
            <a href="#menu" className="btn btn-primary btn-lg rounded-pill px-5 py-3 transition-all duration-300 hover:scale-105">
              <i className="bi bi-menu-up me-2"></i> Explorar Cardápio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;