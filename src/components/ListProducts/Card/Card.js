import React,{useState, useEffect} from "react"
import ItemCount from "../Card/ItemCount"


export default function Card({data}){

    const {price, size, title, img, stock, brand} = data;
    console.log("precio ", price)
    console.log("talle ", size)
    console.log("titulo ", title)
    console.log("titulo ", img)



    return(
        <div className='Card'>
            <img src={img}/>
            <h2>{title}</h2>
            <ul>
                <li>talle : {size}</li>
                <li>precio : ${price}</li>
                <li>marca : {brand}</li>
                <li>stock  : {stock}</li>
            </ul>
            <ItemCount stock={stock} initial={1}/>

        </div>
    )
}