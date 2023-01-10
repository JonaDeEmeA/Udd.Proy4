import * as React from 'react';

import { MuiPicker } from "../componentes/MuiPicker";
import { InputCaja } from "../componentes/InputCaja";
import { MuiConfirmacion } from "../componentes/MuiConfirmacion"

import { BtnGeneral } from "../componentes/BtnGeneral";
import { MuiNavbar } from "../componentes/MuiNavbar";
import { Footer } from "../componentes/Footer"
import { db } from "../config/firebase";

import { getDocs, addDoc, collection } from "firebase/firestore"

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Grid, Box, Typography, Alert, AlertTitle, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { set } from 'date-fns';
import { display } from '@mui/system';




const saveData = async (values) => {
	try {
		await addDoc(collection(db, "Reservas"), values);
	} catch (error) {
		console.log("Error ingresasndo reserva", error);
	}
	
}


/*const getData = async ()=>{
	const data = await getDocs(collection(db, "Reservas"));
	console.log(data.docs.map(doc => doc.data()));
};*/


export const ReservaView = () => {



	//getData();

	const [isClicked, setIsClicked] = useState(false)
	
	const [reserva, setReserva] = useState({
		nombre:"",
		apellido:"",
		mail:"",
		personas:"",
		fechaReserva:""
	});
	
	




	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	
	const handleInput = (e) => {

		setReserva( {

				...reserva,
				[e.target.name]: e.target.value

		});

		/*setReserva({
				...reserva,
				[e.target.name]: e.target.value
		
		});*/
	};

	const saveReserva = () => {

		setIsClicked(true);
		setReserva({
			nombre:"",
		apellido:"",
		mail:"",
		personas:""
		})
		//navegar("/confirmacion");
		//console.log(e.target.nombre.value);
		setOpen(true);
		console.log(reserva);
		
		
		//saveData(reserva);
	};


	

	const navegar = useNavigate();
	const verReservas = () => {
		navegar("/lista-reserva");
	}


	return (


		<>
			{/* <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack> */}


			<Dialog
				open={open}
				TransitionComponent={Transition}
				// keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Let Google help apps determine location. This means sending anonymous
						location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				{/* <DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose}>Agree</Button>
				</DialogActions> */}
			</Dialog>

			<Box sx={{ height: "94vh" }}>
				<MuiNavbar />
				<Grid container justifyContent="center" component="main"	>

					
					<Box sx={{
						mt: 15, px: 2, pt: 2,
						borderRadius: "20px 20px 0 0 ",
						bgcolor: "grey.A200",
						width: { xs: "70%", sm: "45%", md: "40%", xl: "35%" }
					}}>
				
						<Grid item xs={12} marginBottom={5} textAlign="center">
							<Typography variant="h6" color="error" > Ingresa los datos de resarva</Typography>
						</Grid>

						
						<Grid item xs={12} marginBottom={1}>
							<InputCaja   value={reserva.nombre} id="nombre" name="nombre" label="Nombre" accion={handleInput} />
						</Grid >
						<Grid item xs={12} marginBottom={1}>
							<InputCaja   value={reserva.apellido} id="apellido" name="apellido" label="Apellido" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>

							<InputCaja value={reserva.mail} id="mail" name="mail" label="Email" accion={(e) => handleInput(e)} />
						</Grid >
						<Grid item xs={12} marginBottom={2}>
							<InputCaja value={reserva.personas} id="personas" name="personas" label="Cantidad personas" accion={(e) => handleInput(e)} />
						</Grid >
						
					</Box>
				</Grid>


				{/* <Selector /> */}


				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Grid item >
						<MuiPicker handledate={setReserva}   isClicked={isClicked}  />
					</Grid>
				</LocalizationProvider>

				
				
			<Grid container  justifyContent="center" >
				<Box display="flex" justifyContent="space-between" sx={{
						mt: 6,
						width: { xs: "70%", sm: "50%", md: "40%", xl: "35%" }
					}}>
					<Grid item xs={5} sm={5.5}>
					<BtnGeneral  nombreBtn="Confirmar" accion={saveReserva} />
					</Grid>
					<Grid item xs={5} sm={5.5}>
					<BtnGeneral  nombreBtn="Ver Reservas" accion={verReservas} />
					</Grid>
				
					
					</Box>
				</Grid>
				
				
			




			</Box>
			<Footer />
		</>





	);

};