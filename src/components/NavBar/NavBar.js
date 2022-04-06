import CartIcon from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css';



function NavBar(props){

    const pages = [
        {
            title:'Home',
            url: '/'
        },
        {
            title:'AboutUs',
            url: '/AboutUs'
        }, 
        {
            title: 'Productos',
            url: '/productos'
        },
        {
            title: 'FAQ',
            url: '/FAQ'
        }]

    return(

        <div className='nav'>
            <img src='sneakerlogo.svg' alt='sneaker'/>
            <ul>
            {pages.map((page) => {
                    return(
                        <li>
                            <Link className='NavBtn' to={page.url}>{page.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className='cartContainer'>
                <CartIcon/>
                <p>0</p>
            </div>

        </div>
    );
};

export default NavBar;