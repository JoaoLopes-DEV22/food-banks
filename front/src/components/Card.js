import React from "react";

export default function Card({ imgSrc, alt, title, description, price }) {
  return (
    <div className="card card-hover border-0 rounded-lg shadow-lg text-center mx-auto" style={{ maxWidth: 300 }}>
      <img
        src={imgSrc}
        alt={alt}
        className="card-img-top h-48 object-cover rounded-top"
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-title text-2xl font-bold">{title}</h3>
        <p className="text-muted mb-3">{description}</p>
        <p className="text-[#f7931e] text-lg font-bold mb-3">{price}</p>
        <button
          className="btn btn-primary rounded-pill px-4 py-2"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Adicionar ao carrinho"
          type="button"
        >
          <i className="bi bi-cart-plus"></i> Adicionar
        </button>
      </div>
    </div>
  );
}
