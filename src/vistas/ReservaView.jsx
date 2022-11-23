import { MuiPicker } from "../componentes/MuiPicker";
import { InputCaja } from "../componentes/InputCaja";
import { Selector } from "../componentes/Selector";
import { BtnGeneral } from "../componentes/BtnGeneral";
import { MuiNavbar } from "../componentes/MuiNavbar";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {  Grid, Box, Typography,IconButton } from "@mui/material";






export const ReservaView = () => {

	return (

		
		<>
		<MuiNavbar />
		<Grid  container justifyContent="center" component="main"	>
			
			<Box  sx={{
			mt:20, px:2, pt:2, 
			borderRadius: "20px 20px 0 0 ",
			bgcolor: "error.light",
			width:{xs:"70%",sm:"45%", md:"40%", xl:"35%" }  }}>
			<Grid item xs={12} marginBottom={5} textAlign="center">
			<Typography variant="h5" color="primary" > textosss</Typography>
			</Grid>

			<Grid item xs={12}  marginBottom={1}>
				<InputCaja  id="nombre" label="Nombre" />
			</Grid >
			<Grid item xs={12}  marginBottom={1}>
				<InputCaja id="apellido" label="Apellido" />
			</Grid >
			<Grid item xs={12} marginBottom={2}>
				<InputCaja id="mail" label="Email" />
			</Grid >
		
			</Box>
			</Grid>
			
			
				<Selector />
				

			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Grid item xs={5}>
					<MuiPicker />
				</Grid>
			</LocalizationProvider>

			<Grid item xs={7} marginTop={6}>
				<BtnGeneral nombreBtn="Confirmar"/>
			</Grid>

		
            
			
			
			</>
		
		

		

	);

};