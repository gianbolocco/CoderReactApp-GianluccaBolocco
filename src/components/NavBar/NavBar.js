import CartIcon from '../ShoppingCart/ShoppingCart'

import '../NavBar/NavBar.css';



function NavBar(){
    return(


        <div className='nav'>
            <img src='sneakerlogo.svg'/>
            <ul>
                <li>HOME</li>
                <li>PRODUCTOS</li>
                <li>NOSOTROS</li>
                <li>CONTACTO</li>
            </ul>
            <div className='cartContainer'>
                <CartIcon/>
                <p>0</p>
            </div>

        </div>
    );
};

export default NavBar;