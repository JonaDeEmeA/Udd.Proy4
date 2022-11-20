import { MenuItem,InputLabel, FormHelperText, FormControl, Select, Grid } from "@mui/material";
import { useState } from "react";
import { InputCaja } from "./InputCaja";



export const Selector=()=> {
    const [age, setAge] = useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Grid container justifyContent="center" >
          <Grid item xs={5} >
        <FormControl  sx={{  minWidth: 150 }}>
          <InputLabel id="select-label">Mesa</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
            
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Mesa 1">Mesa 1</MenuItem>
            <MenuItem value="Mesa 2">Mesa 2</MenuItem>
            <MenuItem value="Mesa 3">Mesa 3</MenuItem>
            
          </Select>
          
        </FormControl>
        </Grid>
        <Grid item xs={2.5}>
        <InputCaja />
        <FormHelperText>Cantidad de Personas</FormHelperText>
        </Grid>
      </Grid>
    );
  }