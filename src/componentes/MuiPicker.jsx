import { Grid, Box,  Stack, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";



export const MuiPicker = () => {

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	// console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString(),});

	return (

		<Grid container justifyContent="center"   >
			<Box sx={{
				px:2, pb:2,
				borderRadius: "0 0 20px 20px" ,
				bgcolor: "grey.A200",
				width:{xs:"70%",sm:"45%", md:"40%", xl:"35%" }}}>
			<Grid container justifyContent= 'space-between'>
		  <Grid item xs={5.5} >
			<DatePicker
				sx={{ width:"100%"}}
				label="Fecha "
				renderInput={(params) => <TextField {...params}  />}
				value={selectedDate}
				onChange={(newValue) => {
					setSelectedDate(newValue)
				}}
			/>
			</Grid>	
			

			<Grid item xs={5.5}>
			<TimePicker
				sx={{ width:"100%"}} 
				label="Hora"
				renderInput={(params) => <TextField {...params} />}
				value={selectedTime}
				onChange={(newValue) => {
					setSelectedTime(newValue)
				}}
			/>
			</Grid>
			</Grid>	
			</Box>
		</Grid>

	);
};

