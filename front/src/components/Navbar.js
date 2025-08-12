import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-[#f7931e] shadow-lg fixed-top">
      <div className="container">
        <a className="navbar-brand flex items-center text-2xl" href="#">
          <i className="bi bi-basket-fill me-2"></i> Prime Burguers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#promocoes">
                Promoções
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Cardápio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#depoimentos">
                Depoimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
