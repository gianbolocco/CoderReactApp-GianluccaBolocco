import React from "react"
import ItemCount from "../Card/ItemCount"


// const Products = [
//     {
//         title: "Forum",
//         stock: 432,
//         price: 120,
//         brand: "adidas"
//     },
//     {
//         title: "Melo",
//         stock: 543,
//         price: 80,
//         brand: "Puma"
//     },
//     {
//         title: "AirMax",
//         stock: 903,
//         price: 150,
//         brand: "Nike"
//     },
//     {
//         title: "AirForce",
//         stock: 64,
//         price: 90,
//         brand: "Nike"
//     }
// ]




export default function Card(props){

    const {price, size, title, img, stock} = props;
    console.log("precio ", price)
    console.log("talle ", size)
    console.log("titulo ", title)
    console.log("titulo ", img)



    return(
        <div className='Card'>
            <img src={img}/>
            <h2>{title}</h2>
            <p>precio : ${price}</p>
            <p>talle : {size}</p>
            <ItemCount stock={stock} initial={1}/>

        </div>
    )
}