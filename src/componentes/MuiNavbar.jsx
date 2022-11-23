import DiningIcon from "@mui/icons-material/Dining";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"

import {MuiMenu } from "./MuiMenu"


export const MuiNavbar = () => {

    return (
        <AppBar position="static" color="secondary" >
            
            <Toolbar >
                <MuiMenu />
                <IconButton size="large" color="inherit" aria-label="logo" >
                    <DiningIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NOMBRE PROY
                </Typography>
                {/* <Stack direction="row" spacing={2} >
                    <Button color="inherit" >Btn 1</Button>
                    <Button color="inherit" >Btn 2</Button>
                    <Button color="inherit" >Btn 3</Button>
                    <Button color="inherit" >Btn 4</Button>
                </Stack>  */}
            </Toolbar>
        </AppBar>
    );
};