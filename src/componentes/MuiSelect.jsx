import { TextField, Box, MenuItem } from "@mui/material";
import { useState } from "react";


export const MuiSelect = ()=>{

    const [servicio, setServicio] = useState("");

    const handleOnChange = (e)=>{
        console.log(servicio);
        setServicio(e.target.value)
    };

    return (
        <Box width="250px">
            <TextField 
            label="Seleccione servicio"
            select
            value={servicio}
            onChange={handleOnChange}
            fullWidth
            >
                <MenuItem value="TN">Tens</MenuItem>
                <MenuItem value="CD">Cuidador</MenuItem>
                <MenuItem value="TR">Terapia</MenuItem>
            </TextField>
        </Box>
    );
};