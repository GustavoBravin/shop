import Image from "next/image";
import style from "./page.module.css"


export default async function Home() {

    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();

  return (
    <main className={style.main}>
      {data.map((products) =>
      <div className={style.card} key={products.id}>
        <p>{products.title}</p>
        <Image 
        width={100}
        height={100} 
        src={products.image} 
        />
      </div>
      
      )}
    </main>
  );
}
