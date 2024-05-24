import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
 <AppBar position="static"sx={{ backgroundColor: 'red' }}>
        <Toolbar>

        <Typography variant='h2'> Employee</Typography>&nbsp;&nbsp;

        <Button  style={{ color: 'white', backgroundColor: 'yellow' }} variant="contained"><Link to='/add'>add</Link></Button>&nbsp;&nbsp;
        <Button  style={{ color: 'white', backgroundColor: 'yellow' }} variant="contained"><Link to='/view'>View</Link></Button>


        
        </Toolbar>
        </AppBar>


    </div>
  )
}

export default Navbar