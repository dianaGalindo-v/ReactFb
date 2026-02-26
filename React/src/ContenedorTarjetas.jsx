import './ContenedorTarjetas.css';
import live from './assets/live.jpg';
import taco2 from './assets/taco2.jpg';
import balo from './assets/balo.jpg';
import man from './assets/man.jpg';

function ContenedorTarjetas(){
    return(
        <div className="ContenedorTarjetas">

            <div className="tarjetasWrapper">
                <div className="contenedorHorizontal">
                    <div className="tarjetas">

                        <Tarjeta 
                            img={live}
                            titulo="Liverpool"
                            texto="Jersey Rojo"
                        />

                        <Tarjeta 
                            img={taco2}
                            titulo="NIKE C"
                            texto="Tacos"
                        />

                        <Tarjeta 
                            img={balo}
                            titulo="Nike Balón"
                            texto="Balón"
                        />

                        <Tarjeta 
                            img={man}
                            titulo="Liverpool"
                            texto="Jersey Azul"
                        />

                    </div>
                </div>
            </div>

        </div>
    );
}


function Tarjeta({img, titulo, texto}){
    return(
        <div className="tarjeta">
            <img src={img} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    );
}

export default ContenedorTarjetas;
