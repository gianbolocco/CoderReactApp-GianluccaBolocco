import '../Card/Card.scss'

export default function Card(props){
    console.log("precio ", props.price)
    console.log("talle ", props.size)
    console.log("titulo ", props.title)

    return(
        <div className='Card'>

            <h2>{props.title}</h2>
            <p>precio : ${props.price}</p>
            <p>talle : {props.size}</p>
            <button>Comprar</button>

        </div>
    )
}