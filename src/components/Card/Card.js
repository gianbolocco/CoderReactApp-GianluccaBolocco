import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import '../Card/Card.scss'


export default function Card({data}){

    const navigate = useNavigate();
    const {price, size, title, img, brand, condition} = data;

    const changePage = () => {
        navigate(`/productos/${title}`)
    }

    return(
        <div className='Card'>
            <img src={img} alt={title} />
            <div className="divider"></div>
            <h2>{title}</h2>
            <ul>
                <li>Talle : {size}</li>
                <li>Precio : ${price}</li>
                <li>Marca : {brand}</li>
                <li>Condicion : {condition}/10</li>
            </ul>
            <Button onClick={changePage} className="moreInfo" variant="contained">See More</Button>
        </div>
    )
}