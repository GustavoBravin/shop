'use client'
import { useEffect, useState } from "react";
import Image from "next/image"
import styles from "./main.module.css"
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";
export default function Main() {
    const [listaProdutos, setListaProdutos]= useState([]);
    const [listaComplete, setListaCompleta]= useState([]);
    const [search,setSearch] = useState("");
    const [errorfetch,setErrorFetch] = useState(false)
    useEffect(() => {
        const getProdutos = async () => {
            try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setListaCompleta(data);
            setListaProdutos(data);
            }catch{
                setErrorFetch(true);
            };
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
    const searchText = (text) =>{
        setSearch(text);

            if (text.trim() == "") {
                setListaProdutos(listaComplete)
                return
            }

       
        const newList = listaProdutos.filter((produtos) =>
         produtos.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
         setListaProdutos(newList);
         console.log(newList)
    }
    if(errorfetch == true){
        return <ErrorGetData/>
    }
    if(listaProdutos[0] == null){
        return <center></center>
    }

    const Ver = (id) => {
    

    }



    return (

        <main className={styles.main}>
             <div>
                <input type="text" value={search} placeholder="Pesquisar Produto" onChange={(event) => searchText(event.target.value)}/>

                <button onClick={orderAZ}>AZ</button>
           
                <button onClick={orderZA}>AZ</button>
            
                <button onClick={preco}>pricemaior</button>

                <button onClick={precomenor}>pricemenor</button>

               
           </div>
            {listaProdutos.map((produtos) =>

                <div className={styles.card} key={produtos.id}>
                    <center><h3>{produtos.title}</h3></center>
                    <p>R$:{produtos.price}</p>
                    <center><p>Descrição: {produtos.description}</p></center>
                    <center><p>Categoria: {produtos.category}</p></center>
                    <p>Armazenamento: {produtos.rating.count}</p>
                    <Image
                        width={100}
                        height={100}
                        src={produtos.image} />
                        <Link href={`/produto/${produtos.id}`}><p>Ver</p></Link>

                </div>

            )}
        </main>
    );
}