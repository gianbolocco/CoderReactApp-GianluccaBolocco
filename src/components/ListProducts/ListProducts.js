import React, {useState, useEffect} from 'react';
import Card from '../Card/Card'
import '../ListProducts/ListProducts.scss';
import mockProducts from '../../Utils/mockProducts'




const ListProducts = () => {



    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducts)
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
        <>
        {products.map( (product) => {
                const {title} = product

                return(
                    <div className='containerCards'>
                        <Card data={product} key={title}/>
                    </div>)
            }) }
        </>
        
            

    )

}

export default ListProducts;