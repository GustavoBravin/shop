import styles from "./header.module.css"
import Image from "next/image";
import Logo from "./logo.png"

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_div}>
                <Image width={150}
                    height={100}
                    src={Logo} alt="minha logo"/>
                <p>Shop Main</p>
                <p></p>
            </div>
            <div className={styles.navbar_menu}>
                <Image
                    className={styles.navbar_item}
                    width={40}
                    height={40}
                    src="https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8="
                />
                <button type="button" className={styles.button}>Novo Produto</button>
            </div>
        </nav>
    );
};