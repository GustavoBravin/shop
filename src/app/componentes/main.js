import Image from "next/image"
import styles from "./main.module.css"
export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return (
        <main className={styles.main}>
            {data.map((prdutos) =>

                <div className={styles.card} key={prdutos.id}>
                    <center><h3>{prdutos.title}</h3></center>
                    <p>R$:{prdutos.price}</p>
                    <center><p>Descrição: {prdutos.description}</p></center>
                    <center><p>Categoria: {prdutos.category}</p></center>
                    <p>Armazenamento: {prdutos.rating.count}</p>
                    <Image
                        width={100}
                        height={100}
                        src={prdutos.image} />

                </div>

            )}
        </main>
    );
}