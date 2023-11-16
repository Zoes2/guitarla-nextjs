import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout
            tittle='Carrito de Compras'
        >
            <main className='contenedor'>
                <h1 className='heading'>Carrito</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>

                        {carrito?.length === 0 ? 'Carrito Vacio' : (
                        carrito?.map(producto => (
                            <div className={styles.producto} key={producto.id}>
                                <div>
                                    <Image src={producto.imagen} width={250} height={480} alt={`Imagen del producto ${producto.nombre}`} />
                                </div>

                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <p>Cantidad:</p>

                                    <select
                                        value={producto.cantidad}
                                        onChange={e => actualizarCantidad({
                                            cantidad: parseInt(e.target.value),
                                            id: producto.id
                                        })}
                                        className={styles.select}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>


                                    <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                </div>

                                <button
                                    type='button'
                                    className={styles.btn_eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >X</button>
                            </div>
                        ))
                    )}
                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
