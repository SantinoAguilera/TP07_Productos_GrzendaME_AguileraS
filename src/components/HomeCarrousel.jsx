import React, { useEffect, useState } from 'react';
import './HomeCarrousel.css'

const HomeCarousel = () => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            const productos = data.products;

            const productosConImagen = productos.filter(p => Array.isArray(p.images) && p.images.length > 0);

            const cantidad = Math.min(4, productosConImagen.length);
            const seleccionados = [];

            while (seleccionados.length < cantidad) {
                const random = productosConImagen[Math.floor(Math.random() * productosConImagen.length)];
                if (!seleccionados.includes(random)) {
                    seleccionados.push(random);
                }
            }

            const imagenes = seleccionados.map(p => ({
                imagen: p.images[0],
                titulo: p.title
            }));
            setRandomImages(imagenes);
            setRandomImages(imagenes);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        fetchProductos();
    }, []);

  if (randomImages.length === 0) return null;

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {randomImages.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={item.imagen} className="d-block w-100" alt={`Producto ${index + 1}`} style={{ maxHeight: "400px", objectFit: "contain", margin: "0 auto" }} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>{item.titulo}</h5>
                </div>
            </div>
            ))}
      </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
    </button>
    </div>
  );
};

export default HomeCarousel;