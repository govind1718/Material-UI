import Typography from '@mui/material/Typography';
import React,{forwardRef, useEffect, useState} from 'react';
import  Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert,
   Avatar, AvatarGroup, createMuiTheme, Drawer as MUIDrawer, FormControl, FormControlLabel, 
   ListItemAvatar, Radio, RadioGroup, Rating, Snackbar, Table} from '@mui/material';
// import {makeStyles } from '@material-ui/core/styles';
import {Route,useNavigate,BrowserRouter as Router, Routes, BrowserRouter, Navigate} from'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
 import SendIcon from '@mui/icons-material/Send';
 import AccessAlarm from '@mui/icons-material/AccessAlarm';
 import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/lab';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import OutboxIcon from '@mui/icons-material/Outbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
import './App.css';
import { Container } from '@mui/system';
import { ExitToAppOutlined, ExpandMoreOutlined, Favorite,
   Padding, Send, TroubleshootTwoTone } from '@mui/icons-material';
import Home from './Home'
import { AppBar,AlertProps, Box, Dialog, DialogActions, DialogContent, DialogContentText, 
  DialogTitle, InputAdornment, Menu, MenuItem, Modal, Select, Stack, Switch, Tab,
   Tabs, TextField, Toolbar,Link, CircularProgress, Paper, Drawer,
   IconButton, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
 import Loader from './Loader';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import Podcast from './Podcast';
import Blog from './Blog';
import About from './About';
import Contact from './Contact'
import RandomText from './RandomText';
import { cyan, teal } from '@mui/material/colors';




function App(props) {
  const[anchorElm,setAnchorElm]=useState(null)
  const[open,setOpen]=useState(false)
  const[modalOpen,modalSetOpen]=useState(false)
  const[value,setValue]=useState()
  const[date,setDate]=useState()
  const[field,setField]=useState()
  const[level,setLevel]=useState(0)
  const[drawer,setDrawer]=useState(false)
  const[checked,setChecked]=useState(true)
  const[radio,setRadio]=useState('')
  const[rating,setRating]=useState()
  const[toaster,setToaster]=useState(false)
  const[accordion,setAccordion]=useState(-1)
  const[select,setSelect]=useState([])
      // console.log({select})
  // const[isFetching,setIsFetching]=useState(false)
  const routes =["/Home","/About"];
  const updateSelectVal=(e)=>{
    // console.log(e.target.value)
    setSelect(e.target.value)
  }
  const handleClick = (e)=>{
    setAnchorElm(e.currentTarget);
    setOpen(true);
  }
  const handleClose=()=>{
    setAnchorElm(null);
    setOpen(false);
  }
  const oneCheckBox=()=>{
    setChecked(!checked)
  }
  const oneRadio=(e)=>{
    console.log(e.target.value)
    setRadio(e.target.value)
  }
  const oneRating=(e)=>{
    console.log(e.target.value)
    setRating(e.target.value)
  }
  const oneAccordion =(panel)=>(e,newValue)=>{
    setAccordion(newValue ? panel:-1)
  }
  const toastarClose =()=>{
    setToaster(false)
  }

        // 25.Styles component or override default colors.....
  const StyledButton = styled(Button) ({
          backgroundColor:'gray',
          color:'yellowgreen',
          "&:hover":{
          backgroundColor:'yellowgreen',
          color:'gray'
}
})

        //26.Themes............
  const themes =createTheme  ({
        palette:{
           primary:{
              main:"#F4005E",
              contrastText:"#212121"
            },         
           secondary:{
             main:'#FFA500'
           },       
        }
   })     

  
          //...................
  const[students,setStudents]=useState([
    {
      id:1,
      name:'govind',
      comments:'brillient student',
      cgpa:3
    },
    {
      id:2,
      name:'virat',
      comments:'excellent student',
      cgpa:4
    },
    {
      id:3,
      name:'arul',
      comments:'moderate student',
      cgpa:2
    },
    {
      id:4,
      name:'yuva',
      comments:'average student',
      cgpa:1
    }
])
         //.............
const Styledtoolbar = styled(Toolbar) ({
  display:'flex',
  justifyContent:'space-between',
  maxWidth:1200,
  margin:'auto',
  width:'100%',
})
        //..............
const StyledMenuItem = styled(MenuItem)(
  ` 
    &:hover {
      background-color: #212121
    }`
  );
 
useEffect(()=>{
    const timer = setInterval(()=>{
      setLevel((newLevel)=>newLevel >= 100 ? 0 : newLevel + 10);
    },500)
},[]);

     //17.2nd This is Drawer ............
//    const list = () =>(
// <Box p={2} width='250px' onClick={()=>setDrawer(false)} >
// <List>
//   {['Home','Inbox','Outbox','Send Mail','Draft','Trash'].map((label,index)=>(
//     <ListItem button key={index}>
//         <ListItemIcon >
//            <HomeIcon/>
//            {/* <InboxIcon/>
//            <OutboxIcon/>
//            <SendIcon/>
//            <DraftsIcon/>
//            <RestoreFromTrashIcon/> */}
//         </ListItemIcon>  
//       <ListItemText primary={label}/>
//     </ListItem>
//   ))}
//   <Divider/>
//   {['Home','Inbox','Outbox','Send Mail','Draft','Trash'].map((label,index)=>(
//     <ListItem button key={index}>
//         <ListItemIcon >
//            <HomeIcon/>
//         </ListItemIcon>  
//       <ListItemText primary={label}/>
//     </ListItem>
//   ))}
// </List>
// </Box>
//       )


// 17.3rd another method This is Drawer with Routes............
//    const{history}=props;
//    const itemList =[
//     {
//       text:"Home",
//       icon:<InboxIcon/>,
//       onClick:()=>history.push('/Home')
//     },
//     {
//       text:"About",
//       icon:<OutboxIcon/>,
//       onClick:()=>history.push('/About')
//     },
//     {
//       text:"Contact",
//       icon:<SendIcon/>,
//       onClick:()=>history.push('/Contact')
//     },
//    ]

  return (

    <Container >
          
{/*  
       stack............
  <Stack direction='row' sx={{display:'flex',justifyContent:'space-between'}} >
     <Stack>
     <Typography >LOGO</Typography>
   </Stack>
     <Stack direction='row' spacing={5} >
     <Typography>GOVIND</Typography>
    <Typography >VIRAT</Typography>
      </Stack>
  </Stack> */}
  

    {/* 1.Typography................... 
    <Typography variant='h5' component="p" align='center' noWrap={true} 
    sx={{backgroundColor:'red',color:'green'}}>
     lorem200 dfghjkl;khfvgbnm,./ ahsjkdl;f;dlkjhgbhnm,  ghjkl;kjhgfghjkl; 
     sdfghjkjhgfdsasfgh sdfghjkjhgfdasdfghjkjhgfdsasdfghjjhgfasdfghjklkjhgfdfgh
   </Typography>
   <Typography variant='h1'>hello</Typography>
   <Typography variant='h2'>hello</Typography>
   <Typography variant='h3'>hello</Typography>
   <Typography variant='h4'>hello</Typography>
   <Typography variant='h5'>hello</Typography>
   <Typography variant='h6'>hello</Typography>
   <Typography variant='subtitle1'>hello</Typography> 
   <Typography variant='subtitle2'>hello</Typography> */}
                  {/* 2.Button.............<br></br>
   <Button variant='text'>govind</Button>
   <Button variant='contained'>govind</Button>
   <Button variant='outlined'>govind</Button>
   <Button variant='contained' disabled>govind</Button>
   <Button variant='contained' disableElevation size='small'>govind</Button><br></br>
<Button variant='contained' 
sx={{backgroundColor:'gray',color:'yellowgreen',"&:hover":{backgroundColor:'yellowgreen',color:'gray'}}}>
my button</Button> */}
               {/* 3.Icons.....................<br></br>
                <SendIcon color="primary"/><br></br>
                <SendIcon sx={{color:'#FC0'}}/><br></br> 
                <SendIcon style={{ color:'green'}}/><br></br>
                <SendIcon htmlColor="red"/><br></br>             
               <Button variant='contained' startIcon={<Send/>} >govind</Button><br></br>
               <Button variant='contained' endIcon={<Send/>} >govind</Button> */}

                 {/* 4.cards...Home page.........<br></br> 
               <Grid container spacing={2}>
        {
            students&&students.map((student)=>{
               return <Grid item lg={4} sl={4} key={student.id}>
                     <Home student={student}/>
                 </Grid>
            })
        }
                   </Grid>  */}
               
             {/* 5.Box....................
        <Box sx={{
          backgroundColor:'#F9B304',
          color:'#7BF80D',
          height:'300px',
          width:'300px',
          paddingTop:'120px',
          '&:hover':{
            backgroundColor:'#F210CC',
          }
        }}>
             Hello govind
          </Box>      */}

         {/* 6.Dialog...........
      <Button onClick={()=>setOpen(true)}>Open Dialog</Button> 
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
      >       
        <DialogTitle>Crud operation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you diii viikkk sttebene  else noyt br alonbe able to after submit edit out their come
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>  <br></br> */}

          {/* 7.Modal........
          <Button onClick={()=>modalSetOpen(true)}>Open Modal</Button> 
      <Modal
        open={modalOpen}
        onClose={()=>modalSetOpen(false)}
        hideBackdrop
      >       
        <Box position="absolute" top="50%" left="50%">
           <Typography>
            It is a modal
            </Typography>
          <Button variant="contained" onClick={()=>modalSetOpen(false)}>ClickMe</Button>
          </Box>
      </Modal>  <br></br> */}

               {/* 8.navebar................
            <AppBar sx={{backgroundColor:'#212121'}}>
            <Styledtoolbar>
             <Stack direction="row" spacing={2} >
            <Typography>Logo</Typography>
            <Typography>govind</Typography>
           </Stack>
            <Stack direction="row" spacing={5}  >     
            <Button variant="contained"  color="warning">Home</Button>
            <Button variant="contained" color="success">About</Button>
            </Stack>
            </Styledtoolbar>
            </AppBar>           */}
                           {/* Or navebar.......................
            <AppBar >      
             <Toolbar>
            <Typography sx={{flexGrow:1}}>Logo</Typography>
             <Stack direction="row" spacing={2}  >     
            <Button variant="inherit"  color="warning">Home</Button>
            <Button variant="inherit" color="success">About</Button>
            <Button variant="inherit" color="success">Contact</Button>
            <Button variant="inherit" color="success">Details</Button>
            </Stack> 
            </Toolbar>
            </AppBar>     */}
                            
                          {/* 9.Menu bar&Routes.........
       <Router>        
             <AppBar >      
             <Toolbar>
            <Typography sx={{flexGrow:1}}>Logo</Typography>
             <Stack direction="row" spacing={2}  >     
            <Button variant="inherit"  color="warning"><Link to="/Home" 
            style={{textDecoration: 'none',color:'white'}}>Home</Link></Button>
            <Button variant="inherit" color="success" ><Link to="/About" 
             style={{textDecoration: 'none',color:'white'}}>About</Link></Button>
            <Button variant="inherit" color="success" onClick={handleClick} 
            endIcon={<KeyboardArrowDownIcon/>}>Contact</Button>  
            <Button variant="inherit" color="success">Details</Button>
            </Stack> 
            </Toolbar>
            </AppBar>                  
            <Menu anchorEl={anchorElm}  open={open}  onClose={handleClose}>
              <StyledMenuItem  onClick={handleClose}><Link  to="/Blog" 
              style={{textDecoration: 'none',color:'#FA0ACE'}}>Blog</Link></StyledMenuItem>
              <StyledMenuItem onClick={handleClose}><Link to="/Podcast" 
              style={{textDecoration: 'none',color:'#FA0ACE'}}>Podcast</Link></StyledMenuItem>
              <StyledMenuItem onClick={handleClose} style={{color:'#FA0ACE'}} >LiveConcept</StyledMenuItem>
            </Menu> 
            <Routes>
            <Route  path="/Home" element={<Home/>}/> 
            <Route  path="/About" element={<About/>}/> 
             <Route  path="/Blog" element={<Blog/>}/> 
            <Route  path="/Podcast" element={<Podcast/>}/>
            </Routes>
      </Router>  */}  
                         {/* 10.Tabs&Routes................
         <Router> 
         <AppBar >
          <Toolbar>
      <Tabs variant='scrollable' indicatorColor='secondary' textColor='inherit' 
       value={value} onChange={(e,val)=>setValue(val)}>
        <Tab icon={<HomeIcon/>} />
        <Tab label="Home" style={{textDecoration: 'none',color:'white'}} component={Link} to="/Home"/>
        <Tab label="About" style={{textDecoration: 'none',color:'white'}} component={Link} to="/About"/>
        <Tab label="banglore"/>
        <Tab label="fourth"/>
        <Tab label="virat"/>
        <Tab label="kohli"/>
        <Tab label="hello"/>
        <Tab label="jocker"/>
        <Tab label="Msd"/>
        <Tab label="klvirat"/>
        <Tab label="rahul"/>
        <Tab label="anushka"/>
        <Tab label="jaanu"/>
        <Tab label="manasa"/>
      </Tabs>  
          </Toolbar>
          </AppBar>
           <Routes>
            <Route  path="/Home" element={<Home/>}/> 
            <Route  path="/About" element={<About/>}/> 
            </Routes>
        </Router> */}
                            {/* 10.Tabs&Routes................
         <BrowserRouter>         
         <AppBar >
          <Toolbar>
      <Tabs variant='scrollable' indicatorColor='secondary' textColor='inherit' 
       value={value} onChange={(e,val)=>setValue(val)}>
        <Tab icon={<HomeIcon/>} />
        <Tab label="Home" style={{textDecoration: 'none',color:'white'}} value={routes[0]} 
        component={Link} to={routes[0]} />
        <Tab label="About" style={{textDecoration: 'none',color:'white'}} value={routes[1]} 
         component={Link} to={routes[1]}/>
        <Tab label="banglore"/>
        <Tab label="fourth"/>
        <Tab label="virat"/>
        <Tab label="kohli"/>
        <Tab label="hello"/>
        <Tab label="jocker"/>
        <Tab label="Msd"/>
        <Tab label="klvirat"/>
        <Tab label="rahul"/>
        <Tab label="anushka"/>
        <Tab label="jaanu"/>
        <Tab label="manasa"/>
      </Tabs>  
          </Toolbar>
          </AppBar>        
          <Routes>
            <Route  path="/Home" Component={Home}/> 
            <Route  path="/About" Component={About}/> 
            </Routes>     
            </BrowserRouter>
  */}
                {/* 11.select ............<br></br>       
    <Select value={select}
    displayEmpty
    onChange={updateSelectVal}
    sx={{width:'250px'}}
    >
      <MenuItem value="" disabled>Select Course</MenuItem>
      <MenuItem value="1">React js</MenuItem>
      <MenuItem value="2">Angular js</MenuItem>
      <MenuItem value="3">Node js</MenuItem>
      <MenuItem value="4">vue js</MenuItem>
      </Select>   */}
           {/* 11.select using textfields ............<br></br>       
    <TextField 
    value={select}
    select
    label='Select Course'
    displayEmpty
    color='secondary'
    onChange={updateSelectVal}
    sx={{width:'250px'}}
    SelectProps={{multiple:true}}
    size='small'
    helperText='please select your country'
    >
      <MenuItem value="IN">React js</MenuItem>
      <MenuItem value="US">Angular js</MenuItem>
      <MenuItem value="YA">Node js</MenuItem>
      <MenuItem value="JK">vue js</MenuItem>
      </TextField >   */}
           {/* 12.Date Picker........ 
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
     label='Date Picker'
     renderInput={(params)=><TextField {...params}/>}
     value={date}
     onChange={(newValue)=>{
      setDate(newValue)
     }}
     /> 
    </LocalizationProvider> */}
            {/* 13.TextField.........<br></br>
    <Stack spacing={4}>       
       <Stack direction='row' spacing={2}>
       <TextField label='name' variant='outlined'/>
       <TextField label='name' variant='filled'/>
       <TextField label='Number' variant='filled' type='number'/>
       <TextField label='password' type='password'/>
       </Stack>
       <Stack direction='row' spacing={2}>
       <TextField label='search' variant='filled' type='search'/>
       <TextField label='Multiline' variant='outlined' 
       multiline
       rowMax={5}
       />
       </Stack>
       <Stack direction='row' spacing={2}>
       <TextField label='small secondary'color='secondary' size='small'/>
       <TextField label='form-Input' required /> 
       <TextField label='name' variant='standard'
        value={field}
        onChange={(e)=>setField(e.target.value)}
        required
        error={!field}
        helperText={!field ?'required':'please enter valid password'}
       />    
       </Stack>
       <Stack direction='row' spacing={2}>
       <TextField label='Amount'
        InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}
        />
         <TextField label='Weight'
        InputProps={{
          endAdornment: <InputAdornment position='end'>kg</InputAdornment>
        }}
        />
         <TextField label='Alaram Icon'
        InputProps={{
          endAdornment: <InputAdornment position='end'>
                           <AccessAlarm/>
                       </InputAdornment>
        }}
        />         
       </Stack>
       </Stack>  */}
                {/* 14.links..........<br></br>
       <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Home</Link>
        <Typography variant='h6'>
        <Link href='#' color='secondary' underline='none'>About</Link>
        </Typography>    
        </Stack>          */}
               {/* 15.Progress bar.....<br></br>
       <CircularProgress color='secondary'/><br></br> 
       <CircularProgress color='primary' variant='determinate' value={level}/>         */}
                   {/* 16.Paper.....<br></br>
       
        <Paper component='h1'
            elevation={10}
            // variant='outlined' 
            style={{height:300,width:300,display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
          Hello World
          </Paper> */}
               {/* 17.Drawer or sidenavbar........<br></br>
    <IconButton 
     size='large'
     color='primary'
     edge='start'
     onClick={()=>setDrawer(true)} 
     >
      <MenuIcon/>
    </IconButton>
      <Drawer
      anchor='left'
      open={drawer}
      onClose={()=>setDrawer(false)}
      >
        <Box p={2} width='250px' textAlign='center' >
        <Typography variant='h6' component='div'>Home</Typography>
        </Box>
        </Drawer>   */}
             {/* 17. drawer  <br></br>
<Box>
  <Button onClick={()=>setDrawer(true)}>Drawer Open</Button>
  <Drawer
  open={drawer}
   anchor='left'
   onClose={()=>setDrawer(false)}
  >
   {list()}
</Drawer>
      </Box> */}
                   {/* 17.Drawer with Routing using MUIDrawer...... */}
   
{/* <MUIDrawer open variant='permanent' style={{width:'400px'}}>
     <List>
      {itemList.map((item,index)=>{
        const {text,icon,onClick}=item;
           return (
           <ListItem  onClick={onClick} key={text}>
              {icon&&<ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text}/>
           </ListItem>
      )})
      }      
      </List>      
</MUIDrawer> 
<Router>  
    <Routes>       
            <Route exact path="/Home" element={<Home/>}/> 
            <Route  path="/About" element={<About/>}/> 
            <Route  path="/Contact" element={<Contact/>}/>
            </Routes>
        </Router>  */}
           {/* 18.checkBox.....<br></br>
   <Checkbox checked={checked} onChange={oneCheckBox} color='primary'  size='medium'/>
   <Checkbox indeterminate color='primary' size='small'/>     
  <Checkbox defaultChecked color='secondary' size='large'/> */}
            {/* 19.Radio........<br></br>
   <Radio style={{color:'#212121'}} size='small' checked={radio =='One'} onChange={oneRadio} value='One'/>
   <Radio checked={radio =='Two'} onChange={oneRadio} value='Two'/>
   <Radio checked={radio =='Three'} onChange={oneRadio} value='Three'/> */}
            {/* 19.Radio&Formgroup,radiogroup......<br></br>
      <FormControl>
        <RadioGroup row value={radio} onChange={oneRadio}>
          <FormControlLabel labelPlacement='bottom' value='first' control={<Radio/>} label='first'/>
          <FormControlLabel labelPlacement='start' value='second' control={<Radio/>} label='secondselection'/>
          <FormControlLabel value='third' control={<Radio/>} label='third selection'/>
        </RadioGroup>
        </FormControl>       */}
               {/* 20.Rating..........
     <Stack  spacing={2}>
      <Rating value={rating} onChange={oneRating}/>
      <Rating value={rating} onChange={oneRating} precision={0.5} size='large'/>
      <Rating value={rating} onChange={oneRating} precision={0.5} size='large'
      icon={<FavoriteIcon fontSize='inherit' color='error'/>}
      emptyIcon={<FavoriteBorderIcon/>} 
      />
      </Stack>           */}
                  {/* 21.Accordion......
<Accordion expanded={accordion === 0} onChange={oneAccordion(0)}>
  <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
     <Typography>This is first summary</Typography>
  </AccordionSummary>
      <AccordionDetails>
      it is already loaded. Running multiple instances may cause problems.
       This can happen if multiple versions are used, or if multiple builds 
       of the same version are used.hgfdfghjjhgfdd sdfghcxzxcvb dfghhbvcxcvb
       dfghjhvcxzxcvb asdfghjbv sdfghjhgfdssdf  wertgfdsaasdfgnbvcx
       sdfghhvcs ertytr nbvcxvb wertyui zxcvbnm, wertyuj asxcvbnm
      </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </AccordionActions>
 </Accordion> 
 <Accordion expanded={accordion === 1} onChange={oneAccordion(1)} >
  <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
     <Typography>This is second summary</Typography>
  </AccordionSummary>
      <AccordionDetails>
        <RandomText/>
      </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </AccordionActions>
 </Accordion> 
 <Accordion  expanded={accordion === 2} onChange={oneAccordion(2)} >
  <AccordionSummary expandIcon={<ExitToAppOutlined/>}>
     <Typography>This is Third summary</Typography>
  </AccordionSummary>
      <AccordionDetails>
         <RandomText/>
      </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </AccordionActions>
 </Accordion>            */}
             {/* 22.Divider..........
     <div style={{width:'300px',backgroundColor:'cyan'}}>       
 <List>
   <ListItem>
     <ListItemAvatar>
       <Avatar/>
     </ListItemAvatar>
        <ListItemText primary='One' secondary='Secondary Text for 1'/>
   </ListItem>
        <Divider variant='middle'/>
   <ListItem>
     <ListItemAvatar>
       <Avatar/>
     </ListItemAvatar>
        <ListItemText primary='Two' secondary='Secondary Text for 2'/>
   </ListItem>
          <Divider light variant='inset'/>
   <ListItem>
     <ListItemAvatar>
       <Avatar/>
     </ListItemAvatar>
        <ListItemText primary='Three' secondary='Secondary Text for 3'/>
   </ListItem>
  </List>            
     </div>          */}
           {/* 22.another divider.....
    <div style={{width:300}}> 
      <Divider orientation='vertical' right style={{height:200}} />
    </div>   */}
           {/* 23.Avatar.....
      <Stack direction='row' spacing={1}>     
    <Avatar sx={{backgroundColor:'primary.light'}}>BMW</Avatar> 
    <Avatar sx={{backgroundColor:'success.light'}}>AU</Avatar>     
    </Stack>
      <Stack direction='row' spacing={1}>
         <AvatarGroup>    
    <Avatar sx={{backgroundColor:'primary.light'}}>BMW</Avatar> 
    <Avatar sx={{backgroundColor:'success.light'}}>AU</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'/> 
       </AvatarGroup>       
    </Stack>
         <Stack direction='row' spacing={1}>     
    <Avatar variant='square' sx={{backgroundColor:'primary.light',height:48,width:48}}>BMW</Avatar> 
    <Avatar variant='rounded' sx={{backgroundColor:'success.light',height:48,width:48}}>AU</Avatar>
    <Avatar  sx={{backgroundColor:'success.light',height:70,width:70}}>Mu</Avatar> 
    </Stack> */}
            {/* 24. toster messge or snackbar <br></br>
        <Button onClick={()=>setToaster(true)}>Submit</Button> 
           <Snackbar
           open={toaster}
           onClose={toastarClose}
            message='Form submitted successfully!'
            autoHideDuration={4000} 
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
            }}
            /> */}
           {/* 25.Styles component or override default colors..... <br></br>
   <StyledButton variant='contained'>my button </StyledButton>   */}
                {/* 26.Themes.....<br></br>

                <ThemeProvider theme={themes}>
            <Typography color='primary'>HELLO GOVIND</Typography>    
            <Button variant="contained"  >Home</Button>
            <Button variant="contained" color='secondary'>About</Button>
            <Button variant="contained"  >Contact</Button>
            <Button variant="contained" >Details</Button>                
                 </ThemeProvider> */}
{/* 
                   26.Themes.....<br></br>
                <ThemeProvider theme={themes}>
            <Typography color='primary'>HELLO GOVIND</Typography>    
            <Button variant="contained">Home</Button>
            <Button variant="contained" color='secondary'>About</Button>
            <Button variant="contained"  >Contact</Button>
            <Button variant="contained" >Details</Button>                
                 </ThemeProvider> */}
                  27.Tables......... 
   
       


  </Container>      
  );
}

export default App;
