import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './HomeCarrousel.css'

const HomeCarousel = () => {
    type RandomImagesType = {id: number, images: string[], title: string};
    type ChosenImagesType = {id: number, imagen: string | undefined, titulo: string};

    const [randomImages, setRandomImages] = useState<ChosenImagesType[]>([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products');
                const productos = res.data.products;

                const productosConImagen = productos.filter(
                    (p: RandomImagesType) => Array.isArray(p.images) && p.images.length > 0
                );

                const cantidad = Math.min(4, productosConImagen.length);
                const seleccionados: RandomImagesType[] = [];

                while (seleccionados.length < cantidad) {
                    const random =
                        productosConImagen[
                        Math.floor(Math.random() * productosConImagen.length)
                        ];
                    if (!seleccionados.includes(random)) {
                        seleccionados.push(random);
                    }
                }

                const imagenes: ChosenImagesType[] = seleccionados.map(p => ({
                    id: p.id,
                    imagen: p.images[0],
                    titulo: p.title
                }));
                setRandomImages(imagenes);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        fetchProductos();
    }, []);

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {randomImages.map((item, index) => (
                    <Link key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} to={`/TP07_Productos_GrzendaME_AguileraS/productodetalle/${item.id}`}>
                        <img src={item.imagen} className="d-block w-100" alt={`Producto ${index + 1}`} style={{ maxHeight: "400px", objectFit: "contain", margin: "0 auto" }} />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                            <h5>{item.titulo}</h5>
                        </div>
                    </Link>
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