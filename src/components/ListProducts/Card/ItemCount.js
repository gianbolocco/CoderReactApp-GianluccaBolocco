import React,{useState} from "react";
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);
    const countPlus = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    const countMinus = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
    const onAdd = () => {
        console.log(`Agregaste ${(count)} productos al carrito.`) 
    }

    return(
        <div className="ItemCount">
            <div>
            <Button variant="outlined" onClick={countMinus} >-</Button>
            <p>{count}</p>
            <Button variant="outlined" onClick={countPlus} >+</Button>
            </div>
            <Button variant="contained" onClick={onAdd}>Agregar</Button>
        </div>
        
    )

}

export default ItemCount;