import Image from "next/future/image"
import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'

export default function Producto({ guitarra }) {

    console.log(guitarra[0]?.attributes)

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