import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
         APP3
          </Typography>
          <Button color="inherit">
          <Link to={'/'}
          style={{textDecoration:'none',color:"white"}}>
            TABLE
            </Link>
          </Button>


          <Button color="inherit">
          <Link to={'/c'} 
          style={{textDecoration:'none',color:"white"}}>
            CARD 
            </Link>
            </Button>

            
          <Button color="inherit">
          <Link to={'/d'} 
          style={{textDecoration:'none',color:"white"}}>
            GRID
            </Link>
            </Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
