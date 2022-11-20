
import { BtnGeneral } from "../componentes/BtnGeneral";
import { ModalReg } from "../componentes/ModalReg";
import { ModalIngreso } from "../componentes/ModalIngreso";
import { MuiNavbar } from "../componentes/MuiNavbar";

import { Stack, Box, Container,Typography } from "@mui/material";



const style ={
	imgCarta:{
		width: "300px",
		borderRadius: "10px"
	},

};


export const HomeView = () => {

	const imprimirReserva = ()=>{
		console.log("testReserva");
	}

	return (
		<main>
			
			{/* <MuiNavbar /> */}

				<Container maxWidth="sm" align="center" sx={{
					paddingTop: 10,
					marginBottom: 12,

				}}>
					<Typography variant="h5" align="center" color="textPrimary" gutterBottom >
						Restaurant 777
					</Typography>
					
					<img src="https://www.astarteinformatica.com/blog/wp-content/uploads/2018/09/como-elaborar-una-carta-restaurante.jpg" alt="cartamenu" style={style.imgCarta} />
					<Typography variant="overline" align="center" color="textSecondary" paragraph >
						Ya provaste nuestra nueva carta con las especialidades de coleccion!? No te la pierdas!!
					</Typography>
					<BtnGeneral nombreBtn="Reserva" accion={imprimirReserva} />
				</Container>
			

			<Stack spacing={2} component="section"  >

				<ModalReg />
				<ModalIngreso />
			</Stack>


		</main>






	);
};