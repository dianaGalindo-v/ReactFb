import './ContenedorTarjetas.css';

// imágenes
import teniNegro from './assets/teniNegro.jpg';
import jerseyL from './assets/jerseyL.jpg';
import espinillera from './assets/espinillera.jpg';
import balonA from './assets/balonA.jpg';
import fondoAnfield from './assets/fondoAnfield.jpg';

// vistas
import Galeria from './Galeria';
import Productos from './Productos';
import Contactos from './Contactos';
import Sucursales from './Sucursales';
import AcercaDe from './AcercaDe';
import Usuario from './UsuariosTabla';
import Carrito from './Carrito';

function ContenedorTarjetas({ vista }) {

    const vistas = {
        "Galeria": <Galeria />,
        "Productos": <Productos />,
        "Contactos": <Contactos />,
        "Sucursales": <Sucursales />,
        "AcercaDe": <AcercaDe />,
        "Usuarios": <Usuario />,
        "Carrito": <Carrito />
    };

    // 👉 SI NO ES INICIO, MOSTRAMOS OTRA VISTA
    if (vista !== "Inicio") {
        return (
            <div className="vistaExtra">
                {vistas[vista]}
            </div>
        );
    }

    // 👉 INICIO (tarjetas + promociones)
    return (
        <div className="ContenedorTarjetas">

            {/* Fondo */}
            <div
                className="fondoImagen"
                style={{ backgroundImage: `url(${fondoAnfield})` }}
            ></div>

            {/* TARJETAS */}
            <div className="tarjetasWrapper">
                <div className="tarjetas">
                    <Tarjeta imagen={teniNegro} titulo="Teniss Black" texto="Diseño deportivo y minimalista" />
                    <Tarjeta imagen={jerseyL} titulo="Jersey Liverpool" texto="Jersey Premier League" />
                    <Tarjeta imagen={espinillera} titulo="Espinillera Nike" texto="Diseño Black&White" />
                    <Tarjeta imagen={balonA} titulo="Balon Adidas" texto="adidas ft. Manchester United" />
                </div>
            </div>
        </div>
    );
}

function Tarjeta({ imagen, titulo, texto }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    );
}

export default ContenedorTarjetas;