import React, {useState, useEffect} from 'react';
import Card from '../ListProducts/Card/Card'
import '../ListProducts/ListProducts.scss';



const ListProducts = () => {

    const mockProducts = [
        {
            title: "Uptempo",
            stock: 432,
            price: 120,
            brand: "Nike",
            img: "Uptempo.webp"
        },
        {
            title: "Melo",
            stock: 543,
            price: 80,
            brand: "Puma",
            img: "LaMelo.webp"
        },
        {
            title: "AirMax",
            stock: 903,
            price: 150,
            brand: "Nike",
            img: "AirMax90.webp"
        },
        {
            title: "Ozweego",
            stock: 40,
            price: 110,
            brand: "Adidas",
            img: "Ozweego.webp"
        },
        {
            title: "AirForce",
            stock: 64,
            price: 90,
            brand: "Nike",
            img: "AirForce.webp"
        }
    ]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(mockProducts)
            }, 3000) 
        })
    }

    useEffect( () => {
        getProducts().then((products) => {
            setProducts(products)
        }).finally( () => {
            console.log("termino la llamada!")
        })
    }, [])
     
    return(
        <div className='container-cards'>
        
            {products.map( (product) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            }) }

            {/* <Card title='Nike Airforce' size='9' price={120} stock={20} img={'AirForce.webp'} />
            <Card title='Nike AirMax 90' size='7.5' price={200} stock={20} img={'AirMax90.webp'} />
            <Card title='Nike Uptempo' size='10' price={140} stock={20} img={'Uptempo.webp'} />
            <Card title='Puma LaMelo' size='8.5' price={90} stock={20} img={'LaMelo.webp'} /> */}

        </div>
    )

}

export default ListProducts;