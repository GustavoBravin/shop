import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link";

export default async function Produto ({params}){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id)
    const data = await response.json();
    return(
        <div className={styles.div}>
        <div className={styles.card} key={data.id}>
        <center><h3>{data.title}</h3></center>
        <p>R$:{data.price}</p>
        <center><p>Descrição: {data.description}</p></center>
        <center><p>Categoria: {data.category}</p></center>
        <p>Armazenamento: {data.rating.count}</p>
        <Image
            width={100}
            height={100}
            src={data.image} />
            <Link href={"/"}><p>Voltar</p></Link>

    </div>
    </div>
    )
}