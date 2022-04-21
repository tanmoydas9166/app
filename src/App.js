import './App.css';
import { AppBar, CssBaseline, Breadcrumbs, Link, InputBase, ListItemButton, ListItemText, ListItemIcon, List, Box, Grid, Button, Container, IconButton, Drawer, Avatar, Stack, Typography, Divider, Toolbar } from '@mui/material';
import { Menu, CircleNotificationsRounded, AddCircle, Search, MenuOpen, HelpOutline, EventNote, PersonOutline, Comment, CurrencyExchange, Settings, ArrowDropDown, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import tooth from './images/tooth.png';
import { styled, alpha } from '@mui/material/styles';

function App() {
  const [open, setDrawerOpen] = useState(false);
  const [patient, setPatient] = useState({"name":"Diane Cooper","e-email":"xyz","Past":15,"Upcoming":2,"Gender":"Female","Birthday":"Feb 24th, 1997","Phone Number":111111,"Street Address":"JI. Diponegoro No. 21","ZIP Code":655849,"Member Status":"Active Member","Register Date":"Feb 24th, 1997"});
  const [appointments, setAppointments] = useState({"Time":"09.00-10.00","Date":"26 Nov'19","Treatment":"Open Access","Dentist":"Drg. Adam H.","Nurse":"Jessicamila","Doc":"url"});
  const [doctor, setDoctor] = useState({"name":"Drg. Adam H.","specification":"Dentist"});

  const drawerWidth = 240;
  const appbarHeight = 64;
  // useEffect(() => {
  //   fetch(
  //     "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
  //   )
  //     .then(response => response.json())
  //     .then(response => setPatient(response[0]));
  //     fetch(
  //       "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
  //     )
  //       .then(response => response.json())
  //       .then(response => setAppointments(response["Upcoming Appointments"]));
  //       fetch(
  //         "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
  //       )
  //         .then(response => response.json())
  //         .then(response => setDoctor(response[0]));
  // }, [])

  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


  return (
    <Box component="div" 
    id='top'
    className='topBox'><CssBaseline />
       <AppBar color='transparent'
       elevation='0'
       style={{
         borderTopLeftRadius:'0.5rem',
         borderTopRightRadius:'0.5rem',
         borderBottom:'1px solid grey'
       }}>
       <Toolbar style={{
         ...(open && {marginLeft:drawerWidth})}}>
       {!open && <IconButton onClick={()=>setDrawerOpen(true)}><Menu/></IconButton>}
       <PersonOutline />
       <Typography style={{marginRight:'auto'}}>{patient.name}</Typography>
       <Search>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <AddCircle/>
          <CircleNotificationsRounded/>
       </Toolbar>
       </AppBar>
       <Drawer 
       sx={{
         backgroundColor:'#fafbfd',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      // elevation='1'
      hideBackdrop
       className='drawer'
       variant={open?'permanent': 'persistent'}
       ModalProps={{
          container: document.getElementById("top"),
          style: { position: "absolute" }
        }}
       open={open}>
       <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
        <Avatar sx={{ width: 40, height: 40 }} src={tooth}/>
        <Stack spacing={-1} >
          <Typography align='left' variant='h6'>Zendenta</Typography>
          <Typography style={{fontSize:10}} align='left' variant='caption'>Cabut gigi tanpa sakit</Typography>
        </Stack>
        <IconButton onClick={()=>setDrawerOpen(false)} size='large' style={{margin:'0'}}><MenuOpen/></IconButton>
        </Grid>
        <Container style={{height:'100%',width:'100%',padding:'0'}}>
        <List style={{margin:0}}>
            <ListItemButton alignItems='flex-start' key='overview'>
              <ListItemIcon>
              <HelpOutline />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton alignItems='flex-start' key='Calendar'>
              <ListItemIcon>
              <EventNote />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
            <ListItemButton alignItems='flex-start' key='PatientList'>
              <ListItemIcon>
              <PersonOutline />
              </ListItemIcon>
              <ListItemText primary="Patient List" />
            </ListItemButton>
            <ListItemButton alignItems='flex-start' key='Messages'>
              <ListItemIcon>
              <Comment />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
            <ListItemButton alignItems='flex-start' key='PaymentInformation'>
              <ListItemIcon>
              <CurrencyExchange />
              </ListItemIcon>
              <ListItemText primary="Payment Information" />
            </ListItemButton>
            <ListItemButton alignItems='flex-start' key='Settings'>
              <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
        </List>
        </Container>
        <div className='drawerFooter'>
          <Typography style={{display:'flex'}}><HelpOutline/> <span style={{marginLeft:'1rem'}}>Help ?</span></Typography>
          <Divider style={{margin:'1rem 0'}}/>
          <Grid container spacing={2} style={{marginBottom:'1rem', borderBottomLeftRadius:'1rem'}}>
            <Grid item xs={3}>
              <Avatar src={'https://randomuser.me/api/portraits/thumb/men/75.jpg'}></Avatar>
            </Grid>
            <Grid item xs={6}>
              <Stack style={{marginTop:'0.7rem'}}>
                <Typography style={{fontSize:10}}>{doctor.name}</Typography>
                <Typography style={{fontSize:10}}>{doctor.specification}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <IconButton><KeyboardArrowDown/></IconButton>
            </Grid>
          </Grid>
        </div>
       </Drawer>
       <Container style={{marginTop:appbarHeight, marginLeft:open?drawerWidth:'0'}}>
         
        <Breadcrumbs style={{margin:'5rem 0 0 0.5rem'}} separator="›" aria-label="breadcrumb" className='breadcrumb'>
          {[
            <Link underline="hover" key="1" color="inherit" href="/" onClick={()=>{}}>
              Patient List
            </Link>,<Typography key="2" color="inherit">
              {patient.name}
            </Typography>,
          ]}
      </Breadcrumbs>
      <Divider />
      <Grid container style={{marginTop:'1rem'}}>
      <Grid container item xs={8} direction='column'>
        <Grid item container xs={6}>
        <Grid item xs={3}>
        <Box
        style={{width:'100%', backgroundColor:'#fefdfc',paddingTop:'3rem'}}
        >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Avatar src={'https://randomuser.me/api/portraits/thumb/men/75.jpg'} sx={{ height:70, width:70}}></Avatar>
          <Typography style={{margin:'0.3rem 0'}}>{patient.name}</Typography>
          <Typography>{patient['e-email']}</Typography>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'1rem'}}>
            <span>
            <div style={{textAlign:'center'}}>{patient.Past}</div>
            <div>Past</div>
            </span>
            <hr style={{height:'2.5rem', margin:'0 1rem',backgroundColor:'black'}}/>
            <span>
            <div style={{textAlign:'center'}}>{patient.Upcoming}</div>
            <div>Upcoming</div>
            </span>
          </div>
          <Button color='inherit' variant="outlined">Send Message</Button>
          </Grid>
        </Box>
        </Grid>
        <Grid
        style={{ backgroundColor:'#fafbfd',marginLeft:'0.5rem'}}
         item container xs={8}>
          <Grid item xs={4}>
          <Stack>
          <Typography>Gender</Typography><Typography>{patient.Gender}</Typography>
          </Stack>
          </Grid>
          <Grid item xs={4}>
          <Typography>Birthday</Typography><Typography>{patient.Birthday}</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Phone Number</Typography><Typography>{patient['Phone Number']}</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Street Address</Typography><Typography>{patient['Street Address']}</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>City</Typography><Typography>Cilacap</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Zip Code</Typography><Typography>{patient['ZIP Code']}</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Member Status</Typography><Typography>{patient['Member Status']}</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Register Date</Typography><Typography>{patient['Register Date']}</Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item>c</Grid>
        </Grid>
        <Grid container xs={3} direction='column'>
          <Grid item container xs={5} direction='column' style={{backgroundColor:'#fafbfd'}}>
            <Grid item>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:2}}><Typography>Notes</Typography><Button variant='text'><Typography>See all</Typography></Button></div>
              </Grid>
              <Grid item>
              <Box
              style={{width:'90%', backgroundColor:'#eff1f7', margin:'0 auto'}}
              >
                <Stack>
                  <Typography style={{fontSize:10}}>-this patient is lorem ipsumasdasscd</Typography>
                  <Typography style={{fontSize:10}}>-this patient is lorem ipsumasdasscd</Typography>
                  <Typography style={{fontSize:10}}>-this patient is lorem ipsumasdasscd</Typography>
                  <Button style={{width:'10%', marginLeft:"auto",padding:2,marginTop:"1rem",marginBottom:'1rem'}} size="small" variant='contained'><Typography style={{fontSize:8}}>save note</Typography></Button>
                </Stack>
              </Box>
              <Typography>Lorem ipsumhjv mjh ,bkjn</Typography>
                  <div><Typography>Drg. Mega Nanade</Typography><Typography style={{marginLeft:"auto"}}>20 Nov '19</Typography></div>
              </Grid>
          </Grid>
          <Grid item xs={5} >y</Grid>
        </Grid>
        </Grid>
       </Container>
    </Box>
  );
}
// style={{textAlign:'center',marginTop:'-1rem'}}

export default App;
