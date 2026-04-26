import './Carrito.css';
import { useEffect, useState } from 'react';
import { carritosAPI, carritoDetalleAPI } from './Services/api';
import { useAuth } from './AuthContext';

function Carrito() {

  const { isLoggedIn, userId, role } = useAuth();
  const isClient = role !== 'admin';
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const limpiarCarrito = async () => {
    const confirmar = window.confirm("¿Seguro que deseas limpiar el carrito?");
    if (!confirmar) return;

    try {
      if (carritos.length === 0) return;
      const carrito = carritos[0];

      if (carrito.detalles && carrito.detalles.length > 0) {
        await Promise.all(
          carrito.detalles.map((detalle) =>
            carritoDetalleAPI.eliminar(detalle.id)
          )
        );
      }

      await carritosAPI.actualizar(carrito.id, {
        total: 0,
        estado: carrito.estado,
        fecha_creacion: carrito.fecha_creacion,
        id_usuario: carrito.id_usuario,
      });

      alert("✅ Carrito limpiado");
      setCarritos([
        { ...carrito, detalles: [], total: 0 }
      ]);
    } catch (error) {
      console.error('Error al limpiar el carrito:', error);
      alert("❌ No se pudo limpiar el carrito");
    }
  };

  useEffect(() => {

    const obtenerCarritos = async () => {

      if (!isLoggedIn) {
        setCarritos([]);
        setCargando(false);
        return;
      }

      try {
        const response = await carritosAPI.listar({ id_usuario: userId });
        const data = response.data || [];

        if (data.length === 0) {
          setCarritos([]);
        } else {
          setCarritos([data[data.length - 1]]);
        }
      } catch (error) {
        console.error('error al obtener carritos', error);
        setCarritos([]);
      } finally {
        setCargando(false);
      }

    };

    obtenerCarritos();

  }, [isLoggedIn, userId]);

  if (cargando) return <p>Cargando carritos.......</p>;

  if (!isLoggedIn) {
    return (
      <div className="carrito-container">
        <h1 className="carrito-title">Carrito de compras</h1>
        <p>Por favor inicia sesión para ver tu carrito.</p>
      </div>
    );
  }

  const carrito = carritos.length > 0 ? carritos[0] : null;

  return (

    <div className="carrito-container">

      <h1 className="carrito-title">Carrito de compras</h1>

      {!carrito || !carrito.detalles || carrito.detalles.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="carrito-cards">
            {carrito.detalles.map((detalle, idx) => {
              const producto = detalle.producto;
              const rating = 4.5;
              const reviews = Math.floor(Math.random() * 100) + 10;

              return (
                <div className="carrito-card" key={idx}>
                  
                  <div className="producto-imagen">
                    {producto?.imagen ? (
                      <img
                        src={producto.imagen}
                        alt={producto?.nombre || 'Producto'}
                      />
                    ) : (
                      <div style={{ color: '#999', fontSize: '14px' }}>
                        Sin imagen
                      </div>
                    )}
                    <span className="categoria-badge">
                      {producto?.categoria || 'Otros'}
                    </span>
                  </div>

                  <div className="card-body">
                    <h4>{producto?.nombre || 'Producto sin nombre'}</h4>
                    
                    <div className="producto-rating">
                      <span className="estrellas">★★★★★</span>
                      <span>({reviews} Reviews)</span>
                    </div>

                    <div className="producto-precio">
                      ${producto?.precio || 0}
                    </div>

                    <p style={{ fontSize: '13px', color: '#666', margin: '8px 0' }}>
                      Cantidad: <strong>{detalle.cantidad}</strong>
                    </p>

                    <div className="carrito-botones">
                      <button className="carrito-btn">
                        Quitar del carrito
                      </button>
                      <button className="carrito-btn">
                        Comprar ahora
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
              Total del carrito: ${carrito.total}
            </div>
            {isClient && (
              <button 
                className="carrito-btn"
                onClick={limpiarCarrito}
                style={{ maxWidth: '300px', padding: '12px 20px', fontSize: '16px' }}
              >
                Limpiar carrito completo
              </button>
            )}
          </div>
        </>
      )}

    </div>

  );

}

export default Carrito;