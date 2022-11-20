import { Grid, Box,  Stack, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";



export const MuiPicker = () => {

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	// console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString(),});

	return (

		<Grid container justifyContent="center" spacing={2} marginTop={1} >

		  <Grid item>
			<DatePicker
				
				label="Fecha "
				renderInput={(params) => <TextField {...params} />}
				value={selectedDate}
				onChange={(newValue) => {
					setSelectedDate(newValue)
				}}
			/>
			</Grid>	
			

			<Grid item>
			<TimePicker
				label="Hora"
				renderInput={(params) => <TextField {...params} />}
				value={selectedTime}
				onChange={(newValue) => {
					setSelectedTime(newValue)
				}}
			/>
			</Grid>
		</Grid>

	);
};

