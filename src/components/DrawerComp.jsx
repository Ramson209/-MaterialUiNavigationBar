import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({links}) => {
     const [open, setOpen] = useState();
  return (
    <>
      <Drawer open={open } onClose={() => setOpen(false)} PaperProps={{
        sx:{
            backgroundColor:"rgba(49,49,116,1)"
        }
      }} >
        <List>
            {links.map((link, index) => (
                <ListItemButton key={index} divider onClick={() => setOpen(false)}>
                <ListItemIcon>
                    <ListItemText sx={{color:"white"}}>
                        {link}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))}
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:"auto ", color:"white"}} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp
