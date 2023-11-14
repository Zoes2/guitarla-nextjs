import Image from "next/future/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            tittle={"Nosotros"}
            description={"Sobre nosotros, guitarLA, tienda de música"}
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        sagittis sodales rhoncus. Integer posuere porta placerat. Duis a
                        sollicitudin tortor. Sed efficitur varius lacus, in lacinia justo
                        semper eget. Duis aliquet porttitor lorem vel auctor. Donec nulla
                        arcu, eleifend vel arcu nec, interdum posuere eros. Pellentesque
                        consectetur aliquam viverra. Quisque suscipit dui justo, in lacinia
                        leo interdum nec. Morbi ut sodales urna, in sodales nisl. Nullam id
                        sollicitudin nunc, id vulputate quam. Curabitur venenatis ac metus
                        vel consequat. Integer sit amet dui ligula. Integer scelerisque
                        felis quis volutpat aliquam. Pellentesque eleifend metus sem, ut
                        vestibulum orci rutrum id. Sed pellentesque, metus vitae tristique
                        ornare, nulla nulla condimentum arcu, vitae dictum dui lorem quis
                        tortor.
                    </p>
                </div>
            </main>
        </Layout>
    );
}
