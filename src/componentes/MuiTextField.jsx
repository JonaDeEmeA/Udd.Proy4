
import { Stack, TextField, InputAdornment  } from "@mui/material";
import { useState } from "react";


export const MuiTextField =()=>{

    const [value, setValue] = useState("");

    return(
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Nombre" variant="outlined"/>
                <TextField label="Nombre" variant="filled"/>
                <TextField label="Nombre" variant="standard"/>
                
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary"/>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField 
                label="Form input" 
                required 
                value={value} 
                onChange={(e)=> {
                    console.log(e.target.value);
                    return setValue(e.target.value)}}
                error={!value}
                helperText={!value ? "Se requiere" : "No comparta sus contraseñas"} /> 
                <TextField label="Contraseña" type="password" helperText="Use convinacion de mayusculas, numeros y simbolos"/> 
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Monto" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}/>
                <TextField label="Peso" InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>
                }}/>
                
                
            </Stack>
        </Stack>
    );
};