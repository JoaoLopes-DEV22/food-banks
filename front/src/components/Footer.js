import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="container">
        <p>&copy; 2025 Prime Burguers - Todos os direitos reservados.</p>
        <a
          href="#home"
          style={{color: 'white'}}
          className="text-[#fff] hover:text-white transition"
          aria-label="Voltar ao topo"
        >
          <i className="bi bi-arrow-up-circle-fill fs-3"></i>
        </a>
      </div>
    </footer>
  );
}
