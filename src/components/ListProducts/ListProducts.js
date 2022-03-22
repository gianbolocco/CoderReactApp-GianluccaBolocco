import Card from '../ListProducts/Card/Card'
import '../ListProducts/ListProducts.scss';

const ListProducts = () => {
     
    return(
        <div className='container-cards'>

            <Card title='Nike Airforce' size='9' price={120} />
            <Card title='Nike AirMax 90' size='7.5' price={200} />
            <Card title='Jordan 35' size='10' price={140} />
            <Card title='Puma Melo' size='8.5' price={90} />

        </div>
    )

}

export default ListProducts;