import './LoQueHago.css'
import frontend from './Imagenes/frontend.png'
import desarrollo from './Imagenes/desarrollo.png'
import diseño from './Imagenes/diseño.png'


const LoQueHago = () => {


    return(
        <div className='padreUno'>
           <main className='main'>
               <section className='section'>
               <div className='tituloOne'>
                   <h3>¿En que puedo ayuduarte?</h3>
                   <h1>Conecto mis experiencias </h1>
                   <h1>en tres grandes áreas</h1>
               </div>


                    <div className='card'>
                     <div className='cardUno rol'>

                        <img src={frontend} alt="" />
                        <h2>Front-end developer</h2>
                        <p>conversion of data into a graphical interface so that the user can view and interact with the information digitally.</p>

                    </div>

                    <div className='cardDos rol'>

                    <img src={desarrollo} alt="" />
                        <h2>Código</h2>
                        <p>HTML + CSS + JS + Boostrap+ React + Firebase.</p>
                    </div>

                    <div className='cardTres rol'>

                    <img src={diseño} alt="" />
                        <h2>Diseño wed</h2>
                        <p>Planificación, diseño, implementación y mantenimiento de sitios web.</p>
                    </div>

                    </div>

               </section>
           </main>
        </div>
    )
}

export default LoQueHago;