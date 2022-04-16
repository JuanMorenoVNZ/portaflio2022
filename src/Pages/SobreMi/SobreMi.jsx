import imagenuno from './Imagenes/imagenuno.jpg'
import './SobreMi.css'
import instagram from './Imagenes/instagram.png'
import linkedin from './Imagenes/linkedin.png'
import gmail from './Imagenes/gmail.png'
import React from 'react';
import { Link } from 'react-router-dom'

const SobreMi = () => {


    return(
        <div className="padre">
            <div className="titulo">
            <h2>Sobre Mi</h2>

            </div>
            <div className="contenido">
                <div className="contenidoUno">
                    <h2>Hola Soy Juan Moreno </h2>
                    <p>Soy un Front-End Developer fascinado con el poder conectar y crear proyectos a través de la tecnología, me apasiona el poder trasmitir mi creatividad a través del código; a demás toda mi vida me he dedicado a comunicarme con las personas ya que fui un comerciante y estudié cocina, al conocer este mundo de la tecnología y saber que puedo hacer llegar mis ideas a muchas personas me hizo el querer esta profesión.</p>
                 <div>
                    <a as={Link} className='curriculo' href="#"><h4>Descargar cv</h4></a>
                    </div>
                    <div>
                        <img className='instagram' src={instagram} alt="" />
                        <a as={Link} href="http://demo.harnishdesign.net/html/callum/index-image-parallax.html"> <img className='linkedin' src={linkedin} alt="" /></a>
                        <img className='gmail' src={gmail} alt="instagram"  />
                    </div>
    
                </div>
                <div className="contenidoDos">
                    <img className="imagen" src={imagenuno} alt="imagen" />
                </div>

            </div>
          
        </div>
    ) 
}

export default SobreMi;