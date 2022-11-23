import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Stack, Button, requirePropFactory } from "@mui/material"
import { ReplayCircleFilled } from "@mui/icons-material";

import { BtnGeneral } from "./BtnGeneral";

const styleModal ={
	modal:{
		position: "absolute",
		width: "400px",
        backgroundColor: "white",
        border: " 2px solid black",
        boxShadow: "10px 5px 5px black",
        padding: "16px 32px 24px",
        top: "50%",
        left: "50%",
        transform: "traslate(-50%, -50%"
        
	}

};



export  const ModalContacto=() =>{
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        
      <BtnGeneral nombreBtn="Contacto" accion={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Registrate y accede a descuentos y promociones
          </DialogContentText>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="apellido"
            label="Apellido"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="mail"
            label="Email "
            type="email"
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Contraseña"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Registrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


