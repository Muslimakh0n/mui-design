// import React from 'react'
// import {Button} from "@mui/material";
// import {Settings} from "@mui/icons-material"
// const App = () => {
//   return (
//     <div>

// <Button
// startIcon={Settings}
// variant='contained'
// color='secondary'
// size='small'
// >
//   SEttings
// </Button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


const App = () => {
const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  return (
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
          </IconButton>
            <div>
              <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow:1}}>
        Sitemark
      </Typography>
            </div>
          {auth && (
            <div>
             
            </div>
          )}
        </Toolbar>
       
      </AppBar>
    </Box>

    
  );


}

export default App