import { useState } from 'react';
import '../utils/css/quote-form.css'

const CotizacionForm = () => {
    const [boletaFactura, setBoletaFactura] = useState('');
    const [nombreApellido, setNombreApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [lugarOrigenNombre, setLugarOrigenNombre] = useState('');
    const [lugarOrigenDireccion, setLugarOrigenDireccion] = useState('');
    const [lugarDestinoNombre, setLugarDestinoNombre] = useState('');
    const [lugarDestinoDireccion, setLugarDestinoDireccion] = useState('');
    const [productos, setProductos] = useState([]);

    const agregarProducto = () => {
        setProductos([
            ...productos,
            {
                nombre: '',
                dimensiones: '',
                valorDeclarado: '',
            },
        ]);
    };

    const eliminarProducto = (indice) => {
        const nuevosProductos = [...productos];
        nuevosProductos.splice(indice, 1);
        setProductos(nuevosProductos);
    };

    const actualizarProducto = (indice, campo, valor) => {
        const nuevosProductos = [...productos];
        nuevosProductos[indice][campo] = valor;
        setProductos(nuevosProductos);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            boletaFactura,
            nombreApellido,
            telefono,
            lugarOrigenNombre,
            lugarOrigenDireccion,
            lugarDestinoNombre,
            lugarDestinoDireccion,
            productos,
        });
    };

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="boleta-factura">Boleta/Factura:</label>
                <input
                    type="text"
                    id="boleta-factura"
                    value={boletaFactura}
                    onChange={(e) => setBoletaFactura(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="nombre-apellido">Nombre y Apellido:</label>
                <input
                    type="text"
                    id="nombre-apellido"
                    placeholder='Juan Perez'
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                    type="tel"
                    id="telefono"
                    placeholder='+569999999'
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lugar-origen-nombre">Lugar de Origen:</label>
                <input
                    type="text"
                    id="lugar-origen-nombre"
                    placeholder='Ej: Tienda Pocuro'
                    value={lugarOrigenNombre}
                    onChange={(e) => setLugarOrigenNombre(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="lugar-origen-direccion">
                    Dirección Lugar de Origen:
                </label>
                <input
                    type="text"
                    id="lugar-origen-direccion"
                    placeholder='Pocuro 123'
                    value={lugarOrigenDireccion}
                    onChange={(e) => setLugarOrigenDireccion(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lugar-destino-nombre">Lugar de Destino:</label>
                <input type="text"
                    id="lugar-destino-nombre"
                    placeholder='Ej: Dpto Cliente'
                    value={lugarDestinoNombre}
                    onChange={(e) => setLugarDestinoNombre(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="lugar-destino-direccion">
                    Dirección Lugar de Destino:
                </label>
                <input
                    type="text"
                    id="lugar-destino-direccion"
                    placeholder='Tobalaba 321'
                    value={lugarDestinoDireccion}
                    onChange={(e) => setLugarDestinoDireccion(e.target.value)}
                    required
                />
            </div>

            <div className="productos-group">
                <h3>Productos:</h3>
                {productos.map((producto, index) => (
                    <div key={index} className="producto">
                        <h4>Producto {index + 1}</h4>
                        <div className="form-group">
                            <label htmlFor={`nombre-producto-${index}`}>Nombre Producto:</label>
                            <input
                                type="text"
                                id={`nombre-producto-${index}`}
                                placeholder='Ej: Mesa de centro'
                                value={producto.nombre}
                                onChange={(e) =>
                                    actualizarProducto(index, 'nombre', e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`dimensiones-producto-${index}`}>Dimensiones:</label>
                            <input
                                type="text"
                                id={`dimensiones-producto-${index}`}
                                placeholder='alto x ancho x fondo'
                                value={producto.dimensiones}
                                onChange={(e) =>
                                    actualizarProducto(index, 'dimensiones', e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`valor-declarado-producto-${index}`}>
                                Valor Declarado:
                            </label>
                            <input
                                type="text"
                                id={`valor-declarado-producto-${index}`}
                                value={producto.valorDeclarado}
                                onChange={(e) =>
                                    actualizarProducto(index, 'valorDeclarado', e.target.value)
                                }
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => eliminarProducto(index)}
                            className="eliminar-producto"
                        >
                            Eliminar Producto
                        </button>
                    </div>
                ))}
                
                <button
                    type="button"
                    onClick={agregarProducto}
                    className="agregar-producto"
                >
                    Añadir Producto
                </button>
            </div>
        <br/>
            <div>
                <button type="submit">Enviar</button>
            </div>            
        </form>
    );
};

export default CotizacionForm;