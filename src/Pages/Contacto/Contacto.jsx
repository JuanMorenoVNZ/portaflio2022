import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contacto.css'
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {


    return(
        <div className='contacto'>
            <div className='redes'>
                <FontAwesomeIcon className='faIcon' icon={faInstagram} />{" "}
                <FontAwesomeIcon className='faIcon'  icon={faLinkedinIn} />{" "}
                <FontAwesomeIcon className='faIcon'  icon={faWhatsapp} />{" "}
               

            </div>

           <div className='titCon'>
               <h2>¿Conversamos?</h2>
               <h2>juanmorenoperu.23@gmail.com</h2>
               <h3>©2022 Juan Moreno|#CoderHouse</h3>
           </div>

        </div>
    )
}

export default Contacto;