import React from 'react';
import Card from '../ListProducts/Card/Card'
import '../ListProducts/ListProducts.scss';



const ListProducts = () => {
     
    return(
        <div className='container-cards'>

            <Card title='Nike Airforce' size='9' price={120} stock={20} img={'AirForce.webp'} />
            <Card title='Nike AirMax 90' size='7.5' price={200} stock={20} img={'AirMax90.webp'} />
            <Card title='Nike Uptempo' size='10' price={140} stock={20} img={'Uptempo.webp'} />
            <Card title='Puma LaMelo' size='8.5' price={90} stock={20} img={'LaMelo.webp'} />

        </div>
    )

}

export default ListProducts;