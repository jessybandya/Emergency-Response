import React, { useEffect, useState } from 'react'
import {Modal} from "react-bootstrap"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng, geocodeByLatLng } from 'react-google-places-autocomplete';
import { updateLatitude, updateLongitude, updateAddress } from '../../redux/dataSlice';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';
import {  toast } from 'react-toastify';
import { auth, db } from '../../firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Reviews from './Reviews';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Notifications from './Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { updateAuthId } from '../../redux/dataSlice';
import Geocode from "react-geocode";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Header() {
    const [signInsignUp, setSignInSignUp] = React.useState(false);
    const [sendData, setSendData] = React.useState(false);
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    var currentDate = new Date()
    const [reviewsModal, setReviewsModal] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const [rates, setRates] = useState([])
    let dispatch = useDispatch();
    const uid = useSelector((state) => state.authId);
    const [valueStar, setValueStar] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [fullNameBa, setFullNameBa] = useState('')
    const [phoneBa, setPhoneBa] = useState('')
    const [emailBa, setEmailBa] = useState('')
    const [selectedDateBa, setSelectedDateBa] = useState(currentDate)
    const latitude = useSelector((state) => state.latitude);
    const longitude = useSelector((state) => state.longitude);
    const [address, setAddress] = useState('')
    const [value2, setValue2] = React.useState(currentDate);
    // SignUp
    const [name, setName] = useState('')
    const [emailS, setEmailS] = useState('')
    const [passwordS, setPasswordS] = useState('')

    // signIn
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // loading
    const [loading, setLoading] = useState(false)
    const [bookAppointment, setBookAppointment] = useState(false)
    const [notifications, setNotifications] = useState(false)

const [notificationsMess, setNotificationsMess] = useState([])
const [notificationsCount, setNotificationsCount] = useState(0)
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};


const [severity, setSeverity] = React.useState('');
const [urgency, setUrgency] = React.useState('');
const [date, setDate] = React.useState('');
const [victims, setVictims] = React.useState('');


const handleChangeSeverity = (event) => {
  setSeverity(event.target.value);
};
const handleChangeUrgency = (event) => {
  setUrgency(event.target.value);
};

const [comment1, setComment1] = React.useState('');

const [lat, setLat] = useState(``)
const [long, setLong] = useState(``)


const getLocation = () =>{
  navigator.geolocation.getCurrentPosition(function(position) {

    var lat1 = position.coords.latitude
    var long1 = position.coords.longitude
    setLat(lat1)
    setLong(long1)
  });
}


Geocode.setApiKey("AIzaSyCAawMnC6vfUa40ZNFsLN-ov7Pa4DjcUrM");
Geocode.enableDebug();
Geocode.fromLatLng(lat, long).then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
    setAddress(address)
  },
  error => {
    console.error(error);
  }
);


const handleChangeComment = (event) => {
  setComment1(event.target.value);
};


    useEffect(() => {
      db.collection('reviews').onSnapshot(snapshot => {
        setRates(snapshot.docs.map(doc => ({
              id: doc.id,
              post: doc.data(),
          })));
      })
  }, []);

 const totalRatings = (rates?.reduce((a,v) =>  a = a + v?.post?.rating , 0 ))
 const numberOfRatings = rates?.length
 const rating = totalRatings / numberOfRatings
 var a = Math?.round(rating * 10) / 10


 const [countReviews, setCountReviews] = useState(0)

 useEffect(() => {
     db.collection('reviews')
    .onSnapshot(snapshot => (
     setCountReviews(snapshot.docs.length)
    ))
 }, []);

 function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "K", "M", "B", "T" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}



    useEffect(() => {
      db.collection('users').doc(`${auth?.currentUser?.uid}`).onSnapshot((doc) => {
        setCurrentUser(doc.data());
      });
  }, []) 



    const register = (event) => {
        event.preventDefault();

        setLoading(true)
        let errors = {};
    
    
            if (!name.trim()) {
                setLoading(false)
                errors.name = toast.error('Name is required');
              } else if (!/^[A-Za-z]+/.test(name.trim())) {
                setLoading(false)
                  errors.name = toast.error('Enter a valid name');
              }else if(!emailS.trim()){
                setLoading(false)
                errors.emailS = toast.error('Email is required');
            } else if (!/^[A-Za-z]+/.test(emailS.trim())) {
                setLoading(false)
                errors.emailS = toast.error('Enter a valid email');
            }else if(!passwordS.trim()){
                setLoading(false)
                errors.passwordS = toast.error('Password is required');
            }else{
    
                db.collection('users').where("email", "==", email).get().then(
                    snap => {
                        if(snap.docs.length > 0){
                            toast.error("The email you entered is taken!")
                            setLoading(false)
                        }else{
    
                            db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {
            
                                // resultSnapShot is an array of docs where "email" === "user_mail"
                        
                                if (resultSnapShot.size == 0) {
                                    //Proceed
                        
                                    auth
                                    .createUserWithEmailAndPassword(emailS, passwordS)
                                    .then((auth) => {
                                        if (auth.user) {
                                            auth.user.updateProfile({
                                                photoURL: "https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png"
                                            }).then((s) => {
                                                db.collection('users').doc(auth.user.uid).set({
                                                    uid: auth.user.uid,
                                                    name,
                                                    email:emailS,
                                                    timestamp: Date.now()
                                                })
                                                    .then(data => {
                                                        setLoading(false)
                                                        toast.success("Succesfully created an account.")
                                                        setSignInSignUp(false)
                                                        dispatch(updateAuthId(data.user.uid))
                                                    })
                                            })
                                        }
                                    })
                                    .catch((e) => {
                                            toast.error(e.message)
                                            setLoading(false)
                                    });
                        
                                } else {
                                    //Already registered
                                    setLoading(false)
                                    toast.error("The email you enterd already in use")
                                }
                        
                            })
                        }
                    }
                )
                
    
                
                
              }
    
    
        
    };



    const sendEmergency = (event) => {
      getLocation()

        event.preventDefault();
        // if (birthday[2] >= 2010) {
        //     return alert("You are not eligible to register to Facebook!")
        // }
        setLoading(true)
        let errors = {};
    
    
            if (!severity.trim()) {
                setLoading(false)
                errors.severity = toast.error('severity is required');
              } else if (!/^[A-Za-z]+/.test(severity.trim())) {
                setLoading(false)
                  errors.severity = toast.error('Enter a valid severity');
              }else if(!urgency.trim()){
                setLoading(false)
                errors.urgency = toast.error('Urgency is required');
            } else if (!/^[A-Za-z]+/.test(urgency.trim())) {
                setLoading(false)
                errors.urgency = toast.error('Enter a valid urgency');
            }else if(!victims.trim()){
                setLoading(false)
                errors.victims = toast.error('No. of Victims is required');
            }else if(address === ''){
              toast.warn("Confirm by clicking the send button\nThen allow again.")
            }else{
    
    
                           db.collection("emergency-response").add({
                            severity,
                            urgency,
                            date2:value2.toString(),
                            victims,
                            fromId:auth?.currentUser?.uid,
                            solved:false,
                            read:true,
                            location:address,
                            timestamp:Date.now()
                           })
                           .then((r) => {
                            setLoading(false)
                            toast.success("Your info has been sent to the admin!")
                            setSendData(false)
                            setLat('')
                            setLong('')
                        })                
                
              }   
    
        
    };


    const login = (e)=> {
        e.preventDefault();
       setLoading(true)
        auth.signInWithEmailAndPassword(email,password)
        .then(data =>{
          setLoading(false)
          setSignInSignUp(false)
          dispatch(updateAuthId(data.user.uid))
        })
        .catch((e) =>{
                toast.error(e.message)      
              setLoading(false)     
        })
    }


    const adminLogin = (e)=> {
        e.preventDefault();
       setLoading(true)
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
          setLoading(false)
          setSignInSignUp(false)
          if(email == "admin.emergency@system.com" && password === "12345678"){
            history.push(`/admin/rP36HJBI2jOW4TjBHJLsBM7Uu272`)
          }else{
            alert('You are not the admin!')
            logout()
          }
        })
        .catch((e) =>{
                toast.error(e.message)      
              setLoading(false)     
        })
    }


    const logout = () => {
        auth.signOut();
        history.push('/')
        dispatch(updateAuthId(''))
        window.location.reload();
    }


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  
    const handleChangeIndex = (index) => {
      setValue(index);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

      const handlefullNameBa = (event) => {
        setFullNameBa(event.target.value);
      };
      const handlephoneBa = (event) => {
        setPhoneBa(event.target.value);
      };
      const handleemailBa = (event) => {
        setEmailBa(event.target.value);
      };
      const bookAppointment1 = () => {
        if(selectedDateBa <= Date.now()){
           toast.error("Select date and time ahead!")
        }else if(!fullNameBa){
          toast.error("Full Name required!")
        }else if(!phoneBa){
          toast.error("Phone number required!")
        }else if(!emailBa){
          toast.error("Email required!")
        }else{
          db.collection("appointments").add({
            name:fullNameBa,
            phone:phoneBa,
            date:selectedDateBa.toString(),
            email:emailBa,
            fromId:auth?.currentUser?.uid,
            solved:false,
            timestamp:Date.now()
           })
           .then((r) => {
            toast.success("Your appointment has been sent successfully!")
            setBookAppointment(false)
            setFullNameBa("")
            setPhoneBa("")
            setEmailBa("")
            setSelectedDateBa(Date.now())
        }) 
        }
        

      }




      const addReview = () => {
            if(valueStar === 0){
              toast.error("Kindly rate us with stars")
            }else if(!comment1){
              toast.error("Comment is required!")
            }else{
              db.collection("reviews").add({
                fromId:auth?.currentUser?.uid,
                comment:comment1,
                rating:valueStar,
                ratingTime: Date.now(),
            }).
            then((e)=> 
            setReviewsModal(false),
            setValueStar(0),
            setComment1(""),
            toast.success("Thanks for your feedback ✔️!")
            )
            }
      }


useEffect(() => {
  db.collection('emergency-response').orderBy("timestamp","desc").onSnapshot(snapshot => {
    setNotificationsMess(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
      })));
  })
}, []);

useEffect(() => {
  db.collection('emergency-response').where("fromId","==", uid).where("read", "==", false)
 .onSnapshot(snapshot => (
  setNotificationsCount(snapshot.docs.length)
 ))
}, []);


  return (
    <div>
    <AppBar style={{backgroundColor: '#fff'}} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon style={{color:'#20c997'}} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
        <a href='/about-us'>
        <MenuItem>
        <Typography textAlign="center">
         About Us
        </Typography>
      </MenuItem>
        </a>

        <a href='/contact-us'>
        <MenuItem>
        <Typography textAlign="center">
         Contact Us
        </Typography>
      </MenuItem>
        </a>
        <a style={{color:'#20c997'}} onClick={() => setReviewsModal(true)}>
        <MenuItem>
        <Typography textAlign="center">
         Reviews
        </Typography>
      </MenuItem>
        </a>
             
        {auth?.currentUser ?(
            <>
            <a  onClick={logout}>
            <MenuItem>
            <Typography textAlign="center">
             Logout
            </Typography>
          </MenuItem>
            </a>
            {auth?.currentUser?.uid === "rP36HJBI2jOW4TjBHJLsBM7Uu272" &&(
                <a href="/admin/rP36HJBI2jOW4TjBHJLsBM7Uu272">
                <MenuItem>
                <Typography textAlign="center">
                 Admin Panel
                </Typography>
              </MenuItem>
                </a>  
            )}
            </>
        ):(
            <a href='#' onClick={() => setSignInSignUp(true)}>
            <MenuItem>
            <Typography textAlign="center">
             SignIn/SignUp
            </Typography>
          </MenuItem>
            </a>
        )}

        </Menu>
        </Box>
        <a href='/'>
        <img src="/images/logo.png" alt="image" />
        </a>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <a href="/about-us">
          <Button
          sx={{ my: 2, color: '#20c997', display: 'block' }}
         
        >
        About Us
        </Button>
          </a>
          
          <a href="/contact-us">
          <Button
          sx={{ my: 2, color: '#20c997', display: 'block' }}
         
        >
        Contact Us
        </Button>
          </a>
          <a onClick={() => setReviewsModal(true)}>
          <Button
          sx={{ my: 2, color: '#20c997', display: 'block' }}
         
        >
        Reviews
        </Button>
          </a>
          
          {auth?.currentUser?.uid ?(
            <>
            <a>
            <Button
            sx={{ my: 2, color: '#20c997', display: 'block' }}
            onClick={logout}
          >
          Logout
          </Button>
            </a>
            {auth?.currentUser?.uid === "rP36HJBI2jOW4TjBHJLsBM7Uu272" &&(
                <a href="/admin/rP36HJBI2jOW4TjBHJLsBM7Uu272">
                <Button
                sx={{ my: 2, color: '#20c997', display: 'block' }}
              >
              Admin Panel
              </Button>
                </a>  
            )}
            </>
          ):(
            <a>
            <Button
            sx={{ my: 2, color: '#20c997', display: 'block' }}
            onClick={() => setSignInSignUp(true)}
          >
          SignIn/SignUp
          </Button>
            </a>
          )}


          </Box>


          {auth?.currentUser?.uid !== "rP36HJBI2jOW4TjBHJLsBM7Uu272" &&(
            <Box sx={{ flexGrow: 0, display:'flex', alignItems: 'center', cursor:'pointer' }}>
            {uid &&(
              <Badge badgeContent={notificationsCount} color="error">
              <NotificationsIcon onClick={() => setNotifications(true)} style={{color: '#20c997'}}/>
              </Badge>
            )}
            <div className="">
            {auth?.currentUser?.uid ?(
              <a onClick={() => setBookAppointment(true)} style={{padding:8,margin:5}} className="btn">B.A </a>
            ):(
              <a onClick={() => setSignInSignUp(true)} style={{padding:8,margin:5}} className="btn">B.A</a>
            )}
          </div>
            <div className="">
            {auth?.currentUser?.uid ?(
              <a onClick={() => setSendData(true)} style={{padding:8,margin:5}} className="btn">Notify </a>
            ):(
              <a onClick={() => setSignInSignUp(true)} style={{padding:8,margin:5}} className="btn">Notify</a>
            )}
          </div>
            </Box>
          )}

        </Toolbar>
      </Container>
    </AppBar> 


  <Modal
  show={signInsignUp}
  onHide={() => setSignInSignUp(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  style={{zIndex:1500}}
>
  <Modal.Header closeButton>
      <center><img src="/images/logo.png" alt="image" /></center>
  </Modal.Header>
  <Modal.Body>
  <AppBar position="static">
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="secondary"
    textColor="inherit"
    variant="fullWidth"
    aria-label="full width tabs example"
    style={{backgroundColor:'#20c997'}}
  >
    <Tab label="Sign In" {...a11yProps(0)} />
    <Tab label="Sign Up" {...a11yProps(1)} />
    <Tab label="Sign In As Admin" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  <TabPanel value={value} index={0} dir={theme.direction}>

  <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: '#20c997' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
        }}
          autoComplete="email"
          inputProps={{
              style: {
                height: "30px",
              },
            }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
        }}
          autoComplete="current-password"
          inputProps={{
              style: {
                height: "30px",
              },
            }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{backgroundColor:'#20c997'}}
          sx={{ mt: 3, mb: 2 }}
          onClick={login}
        >
        {loading === true ?(<><CircularProgress style={{color:'#fff'}}/></>):(<>Sign In</>)}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link style={{color:'#20c997'}} href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link style={{color:'#20c997'}} href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
</ThemeProvider>

  </TabPanel>
  <TabPanel value={value} index={1} dir={theme.direction}>





       <ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
sx={{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
}}
>
<Avatar sx={{ m: 1, bgcolor: '#20c997' }}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Sign up
</Typography>
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
<Grid container spacing={2}>
<Grid item xs={12}>
<TextField
autoComplete="given-name"
name="firstName"
required
fullWidth
id="firstName"
label="First Name"
onChange={(e) => {
    setName(e.target.value);
}}
inputProps={{
  style: {
    height: "30px",
  },
}}
/>
</Grid>

<Grid item xs={12}>
<TextField
required
fullWidth
id="email"
label="Email Address"
name="email"
autoComplete="email"
onChange={(e) => {
    setEmailS(e.target.value);
}}
inputProps={{
  style: {
    height: "30px",
  },
}}
/>
</Grid>
<Grid item xs={12}>
<TextField
required
fullWidth
name="password"
label="Password"
type="password"
id="password"
onChange={(e) => {
    setPasswordS(e.target.value);
}}
autoComplete="new-password"
inputProps={{
  style: {
    height: "30px",
  },
}}
/>
</Grid>
</Grid>
<Button
style={{backgroundColor:'#20c997'}}
type="submit"
fullWidth
variant="contained"
sx={{ mt: 1, mb: 2 }}
onClick={register}
>
{loading === true ?(<><CircularProgress style={{color:'#fff'}}/></>):(<>Sign Up</>)}
</Button>
<Grid container justifyContent="flex-end">
<Grid item>
<Link style={{color:'#20c997'}} href="#" variant="body2">
Already have an account? Sign in
</Link>
</Grid>
</Grid>
</Box>
</Box>
</Container>
</ThemeProvider>

  </TabPanel>
  <TabPanel value={value} index={2} dir={theme.direction}>


    <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: '#20c997' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in as Admin
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
        }}
          autoComplete="email"
          inputProps={{
              style: {
                height: "30px",
              },
            }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
        }}
          autoComplete="current-password"
          inputProps={{
              style: {
                height: "30px",
              },
            }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{backgroundColor:'#20c997'}}
          sx={{ mt: 3, mb: 2 }}
          onClick={adminLogin}
        >
        {loading === true ?(<><CircularProgress style={{color:'#fff'}}/></>):(<>Sign In</>)}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link style={{color:'#20c997'}} href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link style={{color:'#20c997'}} href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
</ThemeProvider>

  </TabPanel>
</SwipeableViews>
  </Modal.Body>
</Modal>



<Modal
show={sendData}
onHide={() => setSendData(false)}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
style={{zIndex:1200}}
>
<Modal.Header closeButton>
    <center><img src="/images/logo.png" alt="image" /></center>
</Modal.Header>
<Modal.Body>
<ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
sx={{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
}}
>
<Typography component="h1" variant="h5">
  EMERGENCY RESPONSE FORM
</Typography>
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
<Grid container spacing={2}>

<Grid item xs={12} sm={12}>

<LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack >

<DateTimePicker
ampm={true}
renderInput={(params) => <TextField {...params} 

/>}
value={value2}
onChange={(newValue) => {
  setValue2(newValue);
}}
/>

</Stack>
</LocalizationProvider>

</Grid>

<Grid item xs={12} sm={6}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Severity</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={severity}
  label="Severity"
  onChange={handleChangeSeverity}
  MenuProps={{
    style: {zIndex: 1501}
}}
>
  <MenuItem value="low">low</MenuItem>
  <MenuItem value="medium">medium</MenuItem>
  <MenuItem value="high">high</MenuItem>
  <MenuItem value="severe">severe</MenuItem>
</Select>
</FormControl>
</Grid>
<Grid item xs={12} sm={6}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Urgency</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={urgency}
  label="Urgency"
  onChange={handleChangeUrgency}
  MenuProps={{
    style: {zIndex: 1501}
}}
>
  <MenuItem value="Stay on alert">Stay on alert</MenuItem>
  <MenuItem value="Take action immediately">Take action immediately</MenuItem>
</Select>
</FormControl>
</Grid>

<Grid item xs={12} sm={6}>
<TextField
required
fullWidth
name="password"
label="No. of casuals"
type="number"
onChange={(e) => {
    setVictims(e.target.value);
}}
inputProps={{
  style: {
    height: "30px",
  },
}}
/>


</Grid>
</Grid>
<Button
style={{backgroundColor:'#20c997'}}
type="submit"
fullWidth
variant="contained"
sx={{ mt: 5, mb: 2 }}
onClick={sendEmergency}
>
{loading === true ?(<><CircularProgress style={{color:'#fff'}}/></>):(<>Notify</>)}
</Button>
</Box>
</Box>
</Container>
</ThemeProvider>
</Modal.Body>
</Modal>



<Modal
show={reviewsModal}
onHide={() => setReviewsModal(false)}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
style={{zIndex:1500,height:'100%'}}
>
<Modal.Header style={{backgroundColor:'#20c997'}} closeButton>
    <center style={{display:'flex', alignItems:'center',fontWeight:'bold',color:'#fff'}}>Reviews({abbrNum(countReviews,1)}) || {a}/5 <StarIcon style={{color:'#FDCC0D'}}/></center>
</Modal.Header>
<Modal.Body style={{
  height: 'calc(90vh - 210px)',
  overflowY: 'auto'
 }}>

 {
  rates.map(({id, post}) => (
    <Reviews 
    key={id} 
    postId={id}
    comment={post?.comment}
    fromId={post?.fromId}
    rating={post?.rating}
    ratingTime={post?.ratingTime}
    />
  ) )
}


</Modal.Body>
 {auth?.currentUser?.uid && auth?.currentUser?.uid !== "rP36HJBI2jOW4TjBHJLsBM7Uu272" &&(
  <div style={{border:'2px solid #20c997', margin:5, borderRadius:5}}>
  <center style={{display: 'flex',alignItems:'center',padding:5}}>
  <Rating
  name="hover-feedback"
  value={valueStar}
  precision={0.5}
  size="large"
  getLabelText={getLabelText}
  onChange={(event, newValue) => {
    setValueStar(newValue);
  }}
  onChangeActive={(event, newHover) => {
    setHover(newHover);
  }}
  icon = {<StarIcon style={{width:"32px",height:"32px", color:'#FDCC0D'}} fontSize="inherit"/>}
  emptyIcon={<StarIcon style={{ opacity: 0.55, width:"32px",height:"32px" }} fontSize="inherit" />}
  />
  
  {valueStar !== null && (
    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueStar]}</Box>
  )}
  </center>
  
  <Modal.Footer
  style={{
    justifyContent: 'space-between',
    display: 'flex',
    alignItems:'center',
    alignContent: 'center',
    flex: 1
   }}
  >
    <div style={{width:'100%',flex:0.9}}>
    <TextField
    id="full-width-text-field"
    label="leave a comment here..."
    placeholder={`${currentUser?.name}, ready for your comment.😊`}
    value={comment1}
    onChange={handleChangeComment}
    multiline
    maxRows={2}
    fullWidth     
  />
    </div>
  <div style={{flex:0.1}}>
  {!comment1 || valueStar === 0 ?(
  <>
  <img
  alt="Jessy Bandya"
  src="http://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg"
  style={{ width: 35, height: 35, borderRadius: 35/2, objectFit:'cover' }}
  />
  </>
  ):(
  <>
  <SendIcon onClick={addReview} fontSize="large" style={{color:'#20c997', cursor:'pointer'}}/>
  </>
  )}
  </div>
  </Modal.Footer>
  </div>
 )}

</Modal>

<Modal
show={bookAppointment}
onHide={() => setBookAppointment(false)}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
style={{zIndex:1200}}
>
<Modal.Header  closeButton>
    <center style={{display:'flex', alignItems:'center'}}><h2 style={{color: "#20c997"}}>Get Appointment</h2></center>
</Modal.Header>
<Modal.Body>

<div className="row g-3">
<div className="col-md-12">
<LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack >

<DateTimePicker
ampm={true}
renderInput={(params) => <TextField {...params} 

/>}
value={selectedDateBa}
onChange={(newValue) => {
  setSelectedDateBa(newValue);
}}
/>

</Stack>
</LocalizationProvider>
</div>
  <div className="col-md-6">
    <input type="text" className="form-control"
    value={fullNameBa}
    onChange={handlefullNameBa}
    placeholder="Full name" aria-label="Full name" />
  </div>
  <div className="col-md-6">
    <input type="text"
    value={phoneBa}
    onChange={handlephoneBa}
    className="form-control" placeholder="Phone Number" aria-label="Phone Number" />
  </div>
  <div className="col-12">
    <input type="text" 
    value={emailBa}
    onChange={handleemailBa}
    className="form-control" placeholder="Email Address" aria-label="Email Address" />
  </div>

  <div className="col-12 text-center">
    <button onClick={bookAppointment1}  className="btn btn-primary">Book Appointment</button>
  </div>
</div>
</Modal.Body>
</Modal>



<Modal
show={notifications}
onHide={() => setNotifications(false)}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
style={{zIndex:1200}}
>
<Modal.Header closeButton>
    <center><img src="/images/logo.png" alt="image" /></center>
</Modal.Header>
<Modal.Body style={{
  height: 'calc(110vh - 210px)',
  overflowY: 'auto'
 }}>

 {
  notificationsMess.length === 0 && auth?.currentUser?.uid === uid ?(
    <>
    <center>No Notification!</center>
    </>
  ):(
    notificationsMess.map(({ id, post }) => (
      <Notifications 
      key={id} 
      postId={id}
      date={post?.date2}
      severity={post?.severity} 
      timestamp={post?.timestamp} 
      urgency={post?.urgency} 
      victims={post?.victims} 
      solved={post?.solved} 
      fromId={post?.fromId}  
      read={post?.read} 
      uid={uid}
      />
      )
    ) 
  )

}
</Modal.Body>
</Modal>


    </div>
  )
}

export default Header