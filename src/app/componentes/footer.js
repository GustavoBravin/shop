import styles from "./footer.module.css";
import Image from "next/image"
import Logo from "./logo.png"
export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <h1></h1>
            <ul>
                <h2>redes sociais:</h2>
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="http://pluspng.com/img-png/instagram-icon-png-instagram-icon-1600.png" />
                </li>
                <li ><Image
                    width={30}
                    height={30}
                    src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente.png?fit=1600%2C1600&ssl=1" />
                </li>
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="https://www.iconninja.com/files/424/88/63/facebook-black-icon.png" />
                </li>
                <li className={styles.lista}>
                    <img
                        width={30}
                        height={30}
                        src="https://i.pinimg.com/736x/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.jpg" alt="minha logo" />
                </li>
            </ul>
            <p>Data de criação: 24/06/2007</p>
            <Image
                className={styles.logo}
                width={100}
                height={100}
                src={Logo} />
        </footer>
    );
};