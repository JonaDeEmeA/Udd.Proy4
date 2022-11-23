import { Button, Stack, Box } from "@mui/material"





const accionBtn =()=>{
    console.log("Registro");
};
export const BtnGeneral = ({nombreBtn, accion})=>{


    return(

        <Box sx={{
            
            alignItems:"center"
        }}>
        <Stack spacing={2} sx={{ alignItems:"center", justifyContent: "space-between"}} >
                
            <Button  onClick={accion} variant="contained">{nombreBtn}</Button>
            
        </Stack>
        </Box>
    );

};