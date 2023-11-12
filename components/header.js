import Image from "next/future/image"
import Link from "next/link"

export default function Header() {
    return (

        <header>
            <div className="contenedor">
                <Image src="/img/logo.svg" alt="logo" width={300} height={40} />

                <nav>
                    <Link href="/">
                        Inicio
                    </Link>

                    <Link href="/nosotros">
                        Nosotros
                    </Link>
                </nav>
            </div>
        </header>

    )
}
