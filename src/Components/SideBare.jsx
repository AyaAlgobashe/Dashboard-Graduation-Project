import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
   const pages=[{
    name:"البائعين",

    icon:<PeopleAltIcon sx={{color:"white"}}/>,
    link:"Vendors"
   },
   {name:"المنتجات",
   icon:<InventoryIcon sx={{color:"white"}}/>,
   link:"products"
}, 
   {name:"الخدمات",
   icon:<DesignServicesIcon sx={{color:"white"}}/>,
   link:"services"
}, 
   {name:"الأماكن",
   icon:<LocationOnIcon sx={{color:"white"}}/>,
   link:"locations"
}
]
    return (
        <Box sx={{
            width: 300,
            backgroundColor: 'rgba(9, 18, 66, 1)',
            color: 'rgba(255, 255, 255, 1)',
            height: '100%',
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 1,
            direction: "rtl",
            fontFamily: "Rubik",
            position:"absolute"
        }} role="presentation" >
            <Typography sx={{ textAlign: "center", fontFamily: "Rubik" }} variant='h4' mt={3} mb={3}>Admin Panel</Typography>
            <Divider sx={{ backgroundColor: "white" }} />
            <List sx={{ marginTop: "4rem", direction: "rtl", fontSize: "2.5rem" }}>
                {pages.map((text, index) => (
                    <ListItemButton sx={{ display: 'flex', justifyContent: 'start', fontFamily: "Rubik" }}>
                        <ListItemIcon>
                            {text.icon }
                        </ListItemIcon>
                        <Link to={`/${text.link}`} style={{textDecoration:"none",color:"white"}}>
                        <Typography sx={{ textAlign: "center", fontFamily: "Rubik" }} variant='h6' mt={3} mb={3}>{text.name}</Typography>

                        </Link>
                    </ListItemButton>
                ))}
            </List>

            <Divider />

        </Box>
    );
}






// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   // Necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
// }));

// const Sidebar = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />
//         <List>
//           {['Dashboard', 'Reports', 'Settings'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default Sidebar;
