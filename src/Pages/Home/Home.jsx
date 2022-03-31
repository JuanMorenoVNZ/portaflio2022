import './Home.css'
import Typed from "react-typed";
import React from "react";
import icono from './icono.png'
import imagenuno from '../SobreMi/Imagenes/imagenuno.jpg'



class Home extends React.Component {
    render() {

  const texto = ["SOY FRONT-END DEVELOPER",
                 "SOY VENEZOLANO ACTUALMENTE EN LIMA-PERU",
                 "ME GUSTA APRENDER Y ASI PODER CREAR PROYECTOS",
                 
                ]


    return(
        <div className="Home">
          <header className='nav'>
          <img src={imagenuno} alt="" />
          </header>
          <div className="HomeHijos">
            <h2 >
          JUAN MORENO
          </h2>
            <h4 >
            {" "}
            <span >
              <Typed
                typedRef={typed => {
                  this.typed = typed;
                }}
                loop
                typeSpeed={100}
                backSpeed={0}
                strings ={texto}
                smartBackspace
                shuffle={false}
                backDelay={1500}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
                contentType= 'html'
              />
            </span>
          </h4>
          </div>
        </div>
    )
}
}

export default Home;