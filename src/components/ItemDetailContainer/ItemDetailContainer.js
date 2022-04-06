import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import mockProducts from '../../Utils/mockProducts'

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducts)
        })
    }

    useEffect( () => {
        getProduct().then( (product) => {
            setDataProduct(product)

        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
            
            <ItemDetail data={dataProduct}/>
        </>
    )
}

export default ItemDetailContainer