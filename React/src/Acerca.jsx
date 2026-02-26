import "./Acerca.css";
import estadio from "./assets/santiago.jpg"; // puedes cambiar imagen

function Acerca(){
  return (
    <div className="acerca-container">

      <div className="acerca-hero">
        <img src={estadio} alt="Champions"/>
        <div className="acerca-overlay">
          <h1>Sobre la Plataforma</h1>
        </div>
      </div>

      <div className="acerca-texto">
        <p>
          Nuestro sitio web es una plataforma dedicada a la venta de artículos deportivos, especializada en productos de fútbol como jerseys oficiales de equipos nacionales e internacionales, balones profesionales, tacos (botines) y accesorios deportivos.
        </p>

        <p>
          Ofrecemos productos originales y de alta calidad, diseñados para brindar comodidad, rendimiento y estilo tanto a jugadores como a aficionados del deporte. Nuestro objetivo es crear un espacio digital donde los amantes del fútbol puedan encontrar fácilmente todo lo que necesitan en un solo lugar, con una experiencia de compra rápida, segura y confiable.
        </p>

        <p>
          Nos enfocamos en ofrecer una navegación intuitiva, información clara de los productos y un catálogo actualizado que refleje las últimas tendencias y equipos más populares.
        </p>
      </div>

      <div className="acerca-grid">

        <div className="acerca-card">
          <h2>Misión</h2>
          <p>
            Brindar a los aficionados y deportistas productos deportivos originales y de calidad, promoviendo la pasión por el fútbol a través de una plataforma accesible, segura y eficiente que garantice una excelente experiencia de compra.
          </p>
        </div>

        <div className="acerca-card">
          <h2>Visión</h2>
          <p>
            Convertirnos en una tienda en línea reconocida a nivel nacional por nuestra variedad de productos deportivos, calidad, confianza y compromiso con nuestros clientes, posicionándonos como una de las principales opciones para los amantes del fútbol.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Acerca ;
