import './Favoritos.css';
import { useEffect, useState } from 'react';
import api from './services/Api';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerFavoritos = async () => {
      try {
        const response = await api.get('/carts');

        console.log("Respuesta API:", response.data);

        // 🔐 Nos aseguramos que sea arreglo
        if (Array.isArray(response.data)) {
          setFavoritos(response.data);
        } else {
          setFavoritos([]);
        }

      } catch (error) {
        console.error('error al obtener favoritos', error);
        setFavoritos([]);
      } finally {
        setCargando(false);
      }
    };

    obtenerFavoritos();
  }, []);

  if (cargando) return <p>Cargando favoritos...</p>;

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-title">Mis Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>No hay favoritos disponibles.</p>
      ) : (
        favoritos.map((favorito) => (
          <div className="favorito-card" key={favorito.id}>
            <p>ID: {favorito.id}</p>
            <p>Fecha: {favorito.date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;