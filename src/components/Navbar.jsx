import React, { useState } from 'react'
import {AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography,useTheme, useMediaQuery} from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';

const Navbar = ({links}) => {
      const theme = useTheme()
      const isMatch = useMediaQuery(theme.breakpoints.down('md'))
      console.log(isMatch, "is");
    const [value, setValue] = useState();
  return (
   <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166, 69,252,1)100%)"}}>
    <Toolbar>
      {isMatch ?( <>
        <Typography>
            <ShoppingCartCheckoutIcon/>
         </Typography>
        <DrawerComp links={links}/>
      </> 
      ): (  <Grid sx={{placeItems:"center"}} container>
          <Grid item xs={2} >
         <Typography>
            <ShoppingCartCheckoutIcon/>
         </Typography>
          </Grid>
          <Grid item xs={6} >
           <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)} scrollButtons="auto">
               {links.map((link, index)=>
               (
                <Tab key={index} label={link} />
               )
               )}
           </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid xs= {3}>
            <Box display="flex">
              <Button sx={{marginLeft:"auto", background:"rgba(180,58,58,1)"}} variant='contained' >Login</Button>
              <Button  sx={{marginLeft:1, background:"rgba(180,58,58,1)" }} variant='contained'>Signup</Button>
            </Box>
          </Grid>
        </Grid>)}
       
    </Toolbar>
   </AppBar>
  )
}

export default Navbar
