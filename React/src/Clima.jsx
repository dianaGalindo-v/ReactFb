import { useEffect, useState } from "react";
import "./Clima.css";

function Clima({ lat, lng }) {
  const [clima, setClima] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!lat || !lng || !API_KEY) return;

    const obtenerClima = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = await res.json();

        // 🔥 Validación para que no truene
        if (data && data.main && data.weather) {
          setClima(data);
        } else {
          console.error("Respuesta inválida del clima:", data);
        }
      } catch (error) {
        console.error("Error clima:", error);
      }
    };

    obtenerClima();
  }, [lat, lng, API_KEY]);

  if (!API_KEY) {
    return <p className="clima-loading">⚠ Sin API del clima</p>;
  }

  if (!clima) {
    return <p className="clima-loading">Cargando clima...</p>;
  }

  return (
    <div className="clima-card">
      <p>🌡 {Math.round(clima.main.temp)}°C</p>
      <p>☁ {clima.weather[0].description}</p>
    </div>
  );
}

export default Clima;