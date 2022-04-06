import '../ItemDetail/ItemDetail.scss'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProducts from '../../Utils/mockProducts'

const ItemDetail = () => {
    
    const { title } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProducts, title)
    }, [title])

    const filterProductById = (array , title) => {
        return array.map( (product) => {
            if(product.title === title) {
                return setProduct(product)
            }
        })
    }

    
    return(
            <div className='container-general'> 
                <div className='container-detail'>
                    <div className='ItemDetailImg'>
                        <img src={`../${product.img}`} alt={product.title}></img>
                    </div>
                    
                    <div className='ItemDetailInfo'>
                        <h3>{product.title}</h3>
                        <ul>
                            <li>Brand: {product.brand}</li>
                            <li>Prize: ${product.price}</li>
                            <li>size: {product.size}</li>
                            <li>Condition: {product.condition}/10</li>
                        </ul>
                        <Button className='addToCartBtn' variant="contained">ADD TO CART</Button>
                    </div>
                </div>
            </div>

    )
}

export default ItemDetail