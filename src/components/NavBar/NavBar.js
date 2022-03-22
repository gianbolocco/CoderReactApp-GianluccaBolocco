import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
                    <img className='logo' src="logo192.png"/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SneakerShop
                    </Typography>
                    <ShoppingCartIcon/>
                    <p>0</p>
                </Toolbar>
            </AppBar>

            {/* <ListProducts/> */}
        </Box>
        
    );
};

export default NavBar;