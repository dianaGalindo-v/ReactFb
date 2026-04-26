import './Galeria.css';
import hoddie from './assets/hoddie.jpg';
import termo from './assets/termo.jpg';
import tacoNike from './assets/tacoNike.jpg';
import jerseyL from './assets/jerseyL.jpg';
import espinillera from './assets/espinillera.jpg';
import balonN from './assets/balonN.jpg';
import calcetaD from './assets/calcetaD.jpg';

function Galeria() {
    return (
        <div className="vista">
            <h2>Galería</h2>
            <p>Nuestros bolsos en diferentes estilos y momentos.</p>

            <div className="galeriaGrid">
                <div className="foto">
                    <img src={jerseyL} alt="Jersey Liverpool" />
                    <span>Jersey Liverpool</span>
                </div>

                <div className="foto">
                    <img src={hoddie} alt="Hoddie Deportiva" />
                    <span>Hoddie Deportiva</span>
                </div>

                <div className="foto">
                    <img src={balonN} alt="Balon adidas" />
                    <span>Balon ft. Manchester United</span>
                </div>

                <div className="foto">
                    <img src={termo} alt="Souvenirs" />
                    <span>Termo Nike</span>
                </div>

                <div className="foto">
                    <img src={tacoNike} alt="Tacos" />
                    <span>Tacos Nike Black</span>
                </div>

                <div className="foto">
                    <img src={espinillera} alt="Espinillera" />
                    <span>Espinilleras Nike</span>
                </div>
            </div>
        </div>
    );
}

export default Galeria;
