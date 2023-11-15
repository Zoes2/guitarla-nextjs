import { useState } from "react"
import Image from "next/future/image"
import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'

export default function Producto({ guitarra, agregarCarrito }) {


    const [ cantidad, setCantidad ] = useState(0)
    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            alert('Debes seleccionar una cantidad! ')
            return
        }
        //Objeto de guitarra
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        //Pasando Información
        agregarCarrito(guitarraSeleccionada)
    }

    const { nombre, descripcion, imagen, precio } = guitarra[0]?.attributes
    return (
        <Layout
            tittle={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                    <label htmlFor="cantidad">Cantidad</label>

                    <select 
                        onChange={e => setCantidad(parseInt(e.target.value))}
                        id="cantidad"
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input 
                        type="submit" 
                        value="Agregar al carrito"
                    />
                </form>
                </div>
            </div>
        </Layout>
    )
}
//En cambio con esta función optimizamos de mejor manera el codigo y las llamadas 

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(
        `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    );
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra,
        },
    };
}
//La gran desventaja de esta función es que cada vez
//que visites el sitio estará consultando la API y la base de datos

/*export async function getServerSideProps({query: { url }}) {
    const respuesta = await fetch(
        `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    );
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra,
        },
    };
}*/
