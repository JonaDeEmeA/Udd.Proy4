import { Box, TextField } from "@mui/material";
import {DateRangePicker, DateRange} from "@mui/x-date-pickers-pro";
import { useState } from "react";







export const MuiDateRangePicker = ()=>{

    const [value, setValue] = useState([null, null])
    console.log(value);

    return(
        <Box>

            <DateRangePicker 
                startText="Check-in"
                endText="Check-out"
                value= {value}
                onChange = {(newValue)=>{
                    setValue(newValue)
                }}
                renderInput={(startProps, endProps)=>(
                    <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2}}>to</Box>
                        <TextField {...endProps} />
                    </>
                )}
            />
        </Box>
    )

}