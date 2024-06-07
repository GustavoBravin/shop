'use client'
import { useEffect, useState } from "react";
import Image from "next/image"
import styles from "./main.module.css"
export default function Main() {
    const [listaProdutos, setListaProdutos]= useState([]);
    useEffect(() => {
        const getProdutos = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setListaProdutos(data);
        }
        getProdutos();
    }, []);

    const orderAZ = () => {
        const newList = [...listaProdutos].sort((a,b)=>
            a.title.localeCompare(b.title)
        )
        setListaProdutos(newList)

    }
    const orderZA = () => {
        const newList = [...listaProdutos].sort((a,b)=>
            b.title.localeCompare(a.title)
        )
        setListaProdutos(newList)

    }
    const preco = () => {
        const newList = [...listaProdutos].sort((a,b)=>
        b.price - a.price
        )
        console.log(newList)
        setListaProdutos(newList)

    }
    const precomenor = () => {
        const newList = [...listaProdutos].sort((a,b)=>
        a.price - b.price
        )
       
        setListaProdutos(newList)

    }





    return (

        <main className={styles.main}>
             <div>
                <button onClick={orderAZ}>AZ</button>
           
                <button onClick={orderZA}>AZ</button>
            
                <button onClick={preco}>pricemaior</button>

                <button onClick={precomenor}>pricemenor</button>
           </div>
            {listaProdutos.map((prdutos) =>

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