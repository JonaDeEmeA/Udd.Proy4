import { MuiPicker } from "../componentes/MuiPicker";
import { InputCaja } from "../componentes/InputCaja";
import { Selector } from "../componentes/Selector";
import { BtnGeneral } from "../componentes/BtnGeneral";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {  Grid, Box, Typography } from "@mui/material";




export const ReservaView = () => {

	return (

		<Grid
			
			container
			justifyContent="center"
			
			// direction="column"
			// alignItems="center"
			//style={{ backgroundColor: "red" }}
			>
			<Grid item xs={7.5} marginBottom={5} textAlign="center">
			<Typography variant="h5" color="primary" > textosss</Typography>
			</Grid>

			<Grid item xs={7.5} marginBottom={1}>
				<InputCaja id="nombre" label="Nombre" />
			</Grid >
			<Grid item xs={7.5} marginBottom={1}>
				<InputCaja id="apellido" label="Apellido" />
			</Grid >
			<Grid item xs={7.5} marginBottom={2}>
				<InputCaja id="mail" label="Email" />
			</Grid >

			
				<Selector />
			

			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Grid item xs={7.5}>
					<MuiPicker />
				</Grid>
			</LocalizationProvider>

			<Grid item xs={7} marginTop={6}>
				<BtnGeneral nombreBtn="Confirmar"/>
			</Grid>
			
		</Grid>
		

		

	);

};