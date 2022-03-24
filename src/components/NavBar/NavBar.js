import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import CartIcon from '../ShoppingCart/ShoppingCart'

import '../NavBar/NavBar.css';



function NavBar(){
    return(

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar className='NavBar'>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SneakerShop
                    </Typography>
                    <CartIcon/>
                    <p>0</p>
                </Toolbar>
            </AppBar>

            {/* <ListProducts/> */}
        </Box>
        
    );
};

export default NavBar;