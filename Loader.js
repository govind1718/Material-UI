import { CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';




const Loader =()=>{
    return(
        <Stack spacing={2}>
           
           <CircularProgress color="success" />
            <Typography variant='h6'>loading.......</Typography>

        </Stack>
    )
}
export default Loader;