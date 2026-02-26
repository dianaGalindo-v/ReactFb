import { useState } from "react";
import Encabezado from './Encabezado.jsx';
import ContenedorTarjetas from './ContenedorTarjetas';
import Footer from './Footer';
import BannerSuave from './BannerSuave';
import Productos from "./Productos";
import Comentarios from "./Comentarios";
import Sucursales from "./Sucursales";
import Acerca from "./Acerca";
import Jugadores from "./Jugadores";
import Favoritos from "./Favoritos.jsx";
import Usuario from "./UsuariosTabla.jsx";

function App(){

  const [seccion, setSeccion] = useState("inicio");

  return(
    <>
      <Encabezado onCambiar={setSeccion} />

      {/* --------- CONTENIDO DINÁMICO --------- */}

      {seccion === "inicio" && (
        <>
          <ContenedorTarjetas />
          <BannerSuave />
          <Footer />
        </>
      )}

      {seccion === "acerca" && <Acerca />}


      {seccion === "productos" && <Productos />}


      {seccion === "comentarios" && <Comentarios />}


      {seccion === "sucursales" && <Sucursales />}

      {seccion === "Jugadores" && <Jugadores />}

      {seccion === "favoritos" && <Favoritos />}

      {seccion === "usuarios" && <Usuario />}

    </>
  );
}

export default App;
