import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import HomeCarousel from '../components/HomeCarrousel';

function Home() {
  return (
    <>
      <div className="bg-light p-5 text-center">
        <h1 className="display-4">Bienvenido a ZarazaShop</h1>
        <p className="lead">
          Tu lugar de confianza para conseguir cosas que probablemente no necesites.
        </p>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/productos/todos"} className="btn btn-dark btn-lg mt-3">Ver productos</Link>
      </div>

      <div className="bg-secondary text-white py-5">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p>
            Llevamos más de 15 años ofreciendo productos de APIs basicas usadas como ejemplo.
            Nuestros clientes comprarían, si tan solo existieran. Nuestro equipo de desarrollo
            multidisciplinario está compuesto por visionarios, soñadores, y un tipo que hace café.
          </p>
          <p>
            Nuestra misión es clara: gastar plata. Nuestra visión es aún más clara: colapsar la economia. No te pierdas nuestras ofertas de temporada,
            los miércoles de zaraza, y el viernes del descuento místico. Si llegaste hasta acá leyendo, te felicitamos: malgastaste tiempo de tu vida.
          </p>

          <h2>Nuestros Productos (los de la API)</h2>
          <HomeCarousel />
        </div>
      </div>
    </>
  )
}

export default Home