import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import {Card,styled,CardContent,Rating, IconButton} from '@mui/material';

import { Stack } from '@mui/system';
import { Delete, Edit } from '@mui/icons-material';



const Home=({student})=>{    
return (
    // <Card raised={true} elevation={5} sx={{ minWidth:150,
    //     background:"#d2d2d",
    //     borderRadius:5,
    //     "&:hover":{
    //         boxShadow:'0px 1px 5px 0px #6dcc93',
    //         elevation:20
    //     }}}>
    //   <CardContent> 
    //     <Stack spacing={1}>      
    //     <Typography variant="h5" component="div" sx={{color:'#3cb371'}}>
    //      {student.name}
    //     </Typography>      
    //     <Typography variant="body2">
    //       {student.comments}
    //     </Typography>
    //     <Stack  direction="row" justifyContent='space-between' alignItems='center'>
    //     <Rating name="read-only" value={student.cgpa.toString()} readOnly sx={{color:'#3cb371'}}/>
    //     <Stack spacing={1} direction="row">
    //     <IconButton aria-label="edit" color="secondary">
    //        <Edit/>
    //     </IconButton>
    //     <IconButton aria-label="delete" color="secondary">
    //        <Delete/>
    //     </IconButton>
    //     </Stack>
    //     </Stack>
    //     </Stack>
    //   </CardContent>
    // </Card>
    <Typography sx={{margin:'300px'}} variant='h6'>Welcome Home</Typography>
)










}
export default Home;