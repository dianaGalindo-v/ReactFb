import { useEffect, useState } from "react";
import { categoriasAPI } from "./Services/api";
import "./Categorias.css";

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    obtenerCategorias();

  }, []);

  const obtenerCategorias = async () => {
    try {
      setCargando(true);
      const response = await categoriasAPI.listar();
      setCategorias(response.data);
      setError(null);
    } catch (err) {
      console.error("Error cargando categorias:", err);
      setError("No se pudieron cargar las categorías");
    } finally {
      setCargando(false);
    }
  };

  if (cargando) return <div className="categorias-loading">⏳ Cargando categorías...</div>;
  if (error) return <div className="categorias-error">❌ {error}</div>;

  return (

    <div className="categorias-container">

      <h2 className="categorias-title">Categorías de Productos</h2>

      <div className="categorias-grid">

        {categorias.map((cat) => (

          <div key={cat.id} className="categoria-card">

            <div className="categoria-icon">📦</div>

            <h3 className="categoria-nombre">{cat.nombre}</h3>

            <p className="categoria-id">ID: {cat.id}</p>

            <button className="categoria-btn">
              Ver productos
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Categorias;