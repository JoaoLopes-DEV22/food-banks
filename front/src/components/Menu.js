import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const Menu = () => {
  const menuItems = [
    { name: 'Neva Burguer', desc: 'Carne suculenta, queijo derretido e molho especial.', price: 'R$20,99', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330' },
    { name: 'Cósmico Burguer', desc: 'Bacon crocante, cebolas caramelizadas e explosão de sabor.', price: 'R$24,99', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330' },
    { name: 'Shazan Burguer', desc: 'Carne grelhada, bacon crocante e molho defumado.', price: 'R$28,99', img: 'https://images.unsplash.com/photo-1617196039897-ef6f3f1e1f4c' },
  ];

  const MenuCard = ({ item }) => (
    <Card className="card-hover border-0 rounded-lg shadow-lg text-center">
      <Card.Img variant="top" src={item.img} className="h-48 object-cover rounded-top" loading="lazy" />
      <Card.Body>
        <Card.Title className="text-2xl font-bold">{item.name}</Card.Title>
        <Card.Text className="text-muted mb-3">{item.desc}</Card.Text>
        <p className="text-[#f7931e] text-lg font-bold mb-3">{item.price}</p>
        <button className="btn btn-primary rounded-pill px-4 py-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adicionar ao carrinho">
          <i className="bi bi-cart-plus"></i> Adicionar
        </button>
      </Card.Body>
    </Card>
  );

  return (
    <section className="py-20 bg-gray-100" id="menu" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center display-4 font-bold mb-12">Nosso Cardápio Premium</h2>
        <Carousel className="d-md-none" id="menuCarousel" >
          {menuItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="mx-auto" style={{ maxWidth: '300px' }}>
                <MenuCard item={item} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="row g-4 d-none d-md-flex">
          {menuItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;