import { Container, Grid, TextField } from "@mui/material";



export const InputCaja = ({id, label}) => {


	return (
		<TextField
			autoFocus
			
			id={id}
			label={label}
			fullWidth
			variant="outlined"
		/>
	);
};