import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

export default function LandingPage() {
  useEffect(() => {
    // Inicializa AOS
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });

    // Inicializar Bootstrap tooltips
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Smooth Scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const el = document.querySelector(this.getAttribute("href"));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Validação simples do formulário
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          form.classList.add("was-validated");
        } else {
          e.preventDefault();
          alert("Mensagem enviada com sucesso! (Simulação)");
          form.reset();
          form.classList.remove("was-validated");
        }
      });
    }
  }, []);

  const burgers = [
    {
      imgSrc: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
      alt: "Neva Burguer",
      title: "Neva Burguer",
      description: "Carne suculenta, queijo derretido e molho especial.",
      price: "R$20,99",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
      alt: "Cósmico Burguer",
      title: "Cósmico Burguer",
      description: "Bacon crocante, cebolas caramelizadas e explosão de sabor.",
      price: "R$24,99",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
      alt: "Shazan Burguer",
      title: "Shazan Burguer",
      description: "Carne grelhada, bacon crocante e molho defumado.",
      price: "R$28,99",
    },
  ];

  return (
    <>
      <style>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1, h2, h3 {
          font-family: 'Anton', sans-serif;
        }
        .hero-bg {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1550317138-10000687a72b');
          background-size: cover;
          background-position: center;
          min-height: 90vh;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .btn-primary {
          background-color: #f7931e;
          border-color: #f7931e;
        }
        .btn-primary:hover {
          background-color: #e5831c;
          border-color: #e5831c;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #f7931e;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #e5831c;
        }
        .promotion-bg {
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1550547660-d9450f859349');
          background-size: cover;
          background-position: center;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-bg d-flex align-items-center text-white text-center"
        id="home"
      >
        <div className="container">
          <h1 className="display-2 font-bold mb-4 animate__animated animate__fadeInDown">
            O Hambúrguer dos Seus Sonhos Awaits
          </h1>
          <p className="lead mb-6 animate__animated animate__fadeInUp">
            Suculento, artesanal e crafted com ingredientes premium. Peça agora
            e transforme sua refeição!
          </p>
          <a
            href="#menu"
            className="btn btn-primary btn-lg rounded-pill px-5 py-3 transition-all duration-300 hover:scale-105 me-3"
          >
            <i className="bi bi-bag-fill me-2"></i> Peça Agora
          </a>
          <a
            href="#contato"
            className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 transition-all duration-300 hover:scale-105"
          >
            <i className="bi bi-calendar-event me-2"></i> Reserve uma Mesa
          </a>
        </div>
      </section>

      {/* Sobre Nós */}
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
                Desde 2020, a Prime Burguers eleva o hambúrguer a uma arte. Com
                ingredientes orgânicos, receitas inovadoras e dedicação total,
                criamos experiências que vão além do paladar.
              </p>
              <p className="text-muted mb-5">
                Seja para um almoço rápido ou uma noite especial, nossos burguers
                entregam felicidade em cada mordida. Junte-se à revolução do sabor!
              </p>
              <a
                href="#menu"
                className="btn btn-primary btn-lg rounded-pill px-5 py-3 transition-all duration-300 hover:scale-105"
              >
                <i className="bi bi-menu-up me-2"></i> Explorar Cardápio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promoções */}
      <section
        className="py-20 promotion-bg text-white text-center"
        id="promocoes"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="display-4 font-bold mb-12">Promoções Imperdíveis</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-5 card-hover">
                <h3 className="text-2xl font-bold mb-3">Combo Família</h3>
                <p className="mb-4">
                  4 Burguers + Fritas + Bebidas por apenas R$79,99!
                </p>
                <a href="#menu" className="btn btn-primary rounded-pill px-4 py-2">
                  Aproveitar
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-5 card-hover">
                <h3 className="text-2xl font-bold mb-3">Happy Hour</h3>
                <p className="mb-4">20% off em todos os burguers das 17h às 19h.</p>
                <a href="#menu" className="btn btn-primary rounded-pill px-4 py-2">
                  Ver Mais
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-5 card-hover">
                <h3 className="text-2xl font-bold mb-3">Delivery Grátis</h3>
                <p className="mb-4">
                  Pedidos acima de R$50 com entrega gratuita em Taubaté.
                </p>
                <a href="#menu" className="btn btn-primary rounded-pill px-4 py-2">
                  Pedir Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section className="py-20 bg-gray-100" id="menu" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center display-4 font-bold mb-12">
            Nosso Cardápio Premium
          </h2>

          {/* Carousel para mobile */}
          <div
            id="menuCarousel"
            className="carousel slide d-md-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {burgers.map((burger, index) => (
                <div
                  key={burger.title}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <Card {...burger} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#menuCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#menuCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>

          {/* Grid para desktop */}
          <div className="row g-4 d-none d-md-flex py-3">
            {burgers.map((burger) => (
              <div key={burger.title} className="col-md-4">
                <Card {...burger} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-5 bg-white" id="depoimentos" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center display-4 font-bold mb-12">
            O Que Nossos Clientes Amam
          </h2>
          <div
            id="depoimentosCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow-lg text-center p-5">
                      <i className="bi bi-quote text-[#f7931e] text-5xl mb-3"></i>
                      <p className="text-muted fs-4">
                        "O melhor hambúrguer da cidade! Sabor inigualável e serviço
                        impecável."
                      </p>
                      <h5 className="font-bold mt-4">- João Silva</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow-lg text-center p-5">
                      <i className="bi bi-quote text-[#f7931e] text-5xl mb-3"></i>
                      <p className="text-muted fs-4">
                        "Ingredientes frescos e combinações criativas. Recomendo de
                        olhos fechados!"
                      </p>
                      <h5 className="font-bold mt-4">- Maria Oliveira</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow-lg text-center p-5">
                      <i className="bi bi-quote text-[#f7931e] text-5xl mb-3"></i>
                      <p className="text-muted fs-4">
                        "Cada visita é uma explosão de sabores. Meu novo spot favorito!"
                      </p>
                      <h5 className="font-bold mt-4">- Pedro Santos</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#depoimentosCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#depoimentosCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-gray-100" id="contato" data-aos="fade-up">
        <div className="container">
          <h2 className="display-4 font-bold mb-8 text-center">Fale Conosco</h2>
          <form
            id="contactForm"
            noValidate
            className="row g-4 justify-content-center"
          >
            <div className="col-md-6">
              <label htmlFor="name" className="form-label fw-bold">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Seu nome"
                required
              />
              <div className="invalid-feedback">Por favor, insira seu nome.</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="nome@email.com"
                required
              />
              <div className="invalid-feedback">Por favor, insira um email válido.</div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label fw-bold">
                Mensagem
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Sua mensagem"
                required
              ></textarea>
              <div className="invalid-feedback">Por favor, escreva uma mensagem.</div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary rounded-pill px-5 py-3" type="submit">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
