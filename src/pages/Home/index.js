import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { auth, db } from '../../firebase'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Emergency from './Emergency'
import EmergencyDone from './Emergency-done'
import Appointments from './Appointments'
import AppointmentsDone from './Appointments-done'



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

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'severity', label: 'Severity', minWidth: 100 },
  {
    id: 'urgency',
    label: 'Urgency',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'victims',
    label: 'Victims',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];


function Home() {
  const {id} = useParams()
  const [postsFalse, setPostsFalse] = useState([])
  const [postsTrue, setPostsTrue] = useState([])
  const [appointFalse, setAppointFalse] = useState([])
  const [appointTrue, setAppointTrue] = useState([])
  const [unDone, setUnDone] = useState(0)
  const [done, setDone] = useState(0)
  const [unDoneAp, setUnDoneAp] = useState(0)
  const [doneAp, setDoneAp] = useState(0)

  useEffect(() => {
    db.collection('appointments').where("solved","==", false).onSnapshot(snapshot => {
      setAppointFalse(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
        })));
    })
}, []);

useEffect(() => {
  db.collection('appointments').where("solved","==", true).onSnapshot(snapshot => {
    setAppointTrue(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
      })));
  })
}, []);

useEffect(() => {
  db.collection('emergency-response').where("solved","==", false).onSnapshot(snapshot => {
    setPostsFalse(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
      })));
  })
}, []);

useEffect(() => {
  db.collection('appointments').where("solved","==", true)
 .onSnapshot(snapshot => (
  setDoneAp(snapshot.docs.length)
 ))
}, [doneAp]);
useEffect(() => {
  db.collection('appointments').where("solved","==", false)
 .onSnapshot(snapshot => (
  setUnDoneAp(snapshot.docs.length)
 ))
}, [unDoneAp]);

useEffect(() => {
  db.collection('emergency-response').where("solved","==", true)
 .onSnapshot(snapshot => (
  setDone(snapshot.docs.length)
 ))
}, [done]);

useEffect(() => {
  db.collection('emergency-response').where("solved","==", false)
 .onSnapshot(snapshot => (
  setUnDone(snapshot.docs.length)
 ))
}, [unDone]);


useEffect(() => {
  db.collection('emergency-response').where("solved","==", true).onSnapshot(snapshot => {
    setPostsTrue(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
      })));
  })
}, []);


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  

  return (
    <div>

     {id === "rP36HJBI2jOW4TjBHJLsBM7Uu272" && auth?.currentUser?.uid === "rP36HJBI2jOW4TjBHJLsBM7Uu272" ?(
      <div className="aboutus">
      <Paper sx={{ width: '100%', overflow: 'hidden', mt:9, p:1 }}>

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
        <Tab label={`EMERGENCY (${unDone})`} {...a11yProps(0)} />
        <Tab label={`EMERGENCY Completed (${done})`} {...a11yProps(1)} />
        <Tab label={`APOINTMENT (${unDoneAp})`} {...a11yProps(2)} />
        <Tab label={`APOINTMENT Completed (${doneAp})`} {...a11yProps(3)} />
      </Tabs>
    </AppBar>
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={value}
      onChangeIndex={handleChangeIndex}
    >
      <TabPanel value={value} index={0} dir={theme.direction}>
      <TableContainer sx={{ height: 400,maxHeight: 400}}>
      <Table stickyHeader aria-label="sticky table">
      <TableHead       
      >
      <TableRow >
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}}>DATE</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">SEVERITY</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">URGENCY</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">VICTIM(S)</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">STATUS</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">SENDER INFOs</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">ACTION</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",borderBottom: `2px solid #fff`}}/>
      </TableRow>
      </TableHead>
      <TableBody>
      
      {
        postsFalse.map(({ id, post }) => (
          <Emergency 
          key={id} 
          postId={id}
          date={post?.date2}
          severity={post?.severity} 
          timestamp={post?.timestamp} 
          urgency={post?.urgency} 
          victims={post?.victims} 
          solved={post?.solved} 
          fromId={post?.fromId}   
          />
          )
        )
      }
      
      
      </TableBody>
      </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      <TableContainer sx={{ height: 400,maxHeight: 400}}>
      <Table stickyHeader aria-label="sticky table">
      <TableHead       
      >
      <TableRow >
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}}>DATE</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">SEVERITY</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">URGENCY</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">VICTIM(S)</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">STATUS</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">SENDER INFOs</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">ACTION</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",borderBottom: `2px solid #fff`}}/>
      </TableRow>
      </TableHead>
      <TableBody>
       
      {
        postsTrue?.length === 0 ?(
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell style={{fontWeight:'900'}}  align="right">No task been completed!</TableCell>
          <TableCell style={{fontWeight:'900'}} align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell  align="right">           
          </TableCell>
          <TableCell  align="right">
           
          </TableCell>
        </TableRow>
        ):(
                  postsTrue.map(({ id, post }) => (
          <EmergencyDone 
          key={id} 
          postId={id}
          date={post?.date2}
          severity={post?.severity} 
          timestamp={post?.timestamp} 
          urgency={post?.urgency} 
          victims={post?.victims} 
          solved={post?.solved} 
          fromId={post?.fromId}   
          />
          )
        )
        )
      }
      
      
      </TableBody>
      </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <TableContainer sx={{ height: 400,maxHeight: 400}}>
      <Table stickyHeader aria-label="sticky table">
      <TableHead       
      >
      <TableRow >
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}}>NAME</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">EMAIL</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">PHONE</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">DATE OF REQUEST</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">STATUS</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">ACTION</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",borderBottom: `2px solid #fff`}}/>
      </TableRow>
      </TableHead>
      <TableBody>
       
      {
        appointFalse?.length === 0 ?(
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell style={{fontWeight:'900'}}  align="right">No Appoinment!</TableCell>
          <TableCell style={{fontWeight:'900'}} align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell  align="right">           
          </TableCell>
        </TableRow>
        ):(
          appointFalse.map(({ id, post }) => (
          <Appointments 
          key={id} 
          postId={id}
          date={post?.date}
          email={post?.email} 
          timestamp={post?.timestamp} 
          name={post?.name} 
          phone={post?.phone} 
          solved={post?.solved} 
          fromId={post?.fromId}   
          />
          )
        )
        )
      }
      
      
      </TableBody>
      </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
      <TableContainer sx={{ height: 400,maxHeight: 400}}>
      <Table stickyHeader aria-label="sticky table">
      <TableHead       
      >
      <TableRow >
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}}>NAME</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">EMAIL</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">PHONE</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">DATE OF REQUEST</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">STATUS</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",fontWeight:"900",borderBottom: "2px solid #fff",color:`#fff`}} align="right">ACTION</TableCell>
        <TableCell sx={{backgroundColor: "#20c997",borderBottom: `2px solid #fff`}}/>
      </TableRow>
      </TableHead>
      <TableBody>
       
      {
        appointTrue?.length === 0 ?(
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell style={{fontWeight:'900'}}  align="right">No Appoinment!</TableCell>
          <TableCell style={{fontWeight:'900'}} align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell  align="right">           
          </TableCell>

          
        </TableRow>
        ):(
          appointTrue.map(({ id, post }) => (
          <AppointmentsDone 
          key={id} 
          postId={id}
          date={post?.date}
          email={post?.email} 
          timestamp={post?.timestamp} 
          name={post?.name} 
          phone={post?.phone} 
          solved={post?.solved} 
          fromId={post?.fromId}   
          />
          )
        )
        )
      }
      
      
      </TableBody>
      </Table>
      </TableContainer>
    </TabPanel>
    </SwipeableViews>
</Paper> 
    </div>
     ):(
    <>
    <section style={{marginTop:-30}} className="aboutus">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6 pe-lg-5">
          <div className="about-img-2">
            <img src="/images/home/medical-team-workers-examining-a-medical-report-KQ5AY7L.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="sc-title-one mb-3">
            <h4 className="cl-green">Welcome To Best Medical &amp; Health</h4>
            <h2 className="mb-3">We’re lanced most powerful treatment system.</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
          </div>
          <div className="about-detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <ul className="d-flex flex-wrap">
              <li className="w-50"><i className="fas fa-angle-double-right cl-green" /> Professional Doctors</li>
              <li className="w-50"><i className="fas fa-angle-double-right cl-green" />24/7 Online Support</li>
              <li className="w-50"><i className="fas fa-angle-double-right cl-green" />Digital Laboratory</li>
              <li className="w-50"><i className="fas fa-angle-double-right cl-green" />High Packages</li>
              <li className="w-50 border-lg-0"><i className="fas fa-angle-double-right cl-green" />Online Schedule</li>
              <li className="w-50 border-lg-0"><i className="fas fa-angle-double-right cl-green" />And More...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="case-table p-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 pr-lg-0">
          <div className="case-t-wrap bg-dblue">
            <i className="fas fa-phone-alt fs-1 cl-white" />
            <h3 className="cl-white mt-2">Emergency Cases</h3>
            <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
            <a href="contact.html" className="btn btn-white btn-na case-c1"><i className="fas fa-phone-alt" /> 334 652 7885423</a>
          </div>
        </div>
        <div className="col-lg-4 p-lg-0">
          <div className="case-t-wrap bg-ftblue0">
            <i className="far fa-calendar-alt fs-1 cl-white" />
            <h3 className="cl-white mt-2">Doctor Timetable</h3>
            <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
            <a href="appointment.html" className="btn btn-white btn-na case-c2"><i className="fas fa-phone-alt" /> Discover Table</a>
          </div>
        </div>
        <div className="col-lg-4 pl-lg-0">
          <div className="case-t-wrap bg-lblue1">
            <i className="far fa-file-alt fs-1 cl-white" />
            <h3 className="cl-white mt-2">Request Appoinment</h3>
            <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
            <a href="contact.html" className="btn btn-white-lb btn-na case-c3"><i className="fas fa-phone-alt" /> Make Appointment</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service">
    <div className="container">
      <div className="sc-title-two text-center">
        <h4 className="cl-green">Best Practice Care!</h4>
        <h2>We Offer Different Services To Improve Your Health</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow mb-3">
              <div className="sv-icon mb-3">
                <i className="fas fa-syringe" />
              </div>
              <div className="sv-title">
                <h3>Dental Surgery</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow">
              <div className="sv-icon mb-3">
                <i className="fas fa-brain" />
              </div>
              <div className="sv-title">
                <h3>Neurology</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow mb-3">
              <div className="sv-icon mb-3">
                <i className="fas fa-heartbeat" />
              </div>
              <div className="sv-title">
                <h3>Cardiology</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow">
              <div className="sv-icon mb-3">
                <i className="fas fa-star-of-life" />
              </div>
              <div className="sv-title">
                <h3>General Surgery</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-12">
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow mb-3">
              <div className="sv-icon mb-3">
                <i className="fas fa-pills" />
              </div>
              <div className="sv-title">
                <h3>Dermatology</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
          <a href="services-detail.html">
            <div className="service-list bg-white bx-shadow mb-0">
              <div className="sv-icon mb-3">
                <i className="fas fa-vial" />
              </div>
              <div className="sv-title">
                <h3>Labrotory Test</h3>
              </div>
              <p className="cl-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="short-info cl-blue pt-1 mt-3 text-center">
        <p className="cl-grey">Join Our conference &amp; events know more us also be careful myself <a href="#">Join us here</a></p>
      </div>
    </div>
  </section>
  <section className="w-process bg-map bgc-dblue">
    <div className="container">
      <div className="sc-title-two sc-title-two-white text-center">
        <h4 className="cl-white">Why Choose Us</h4>
        <h2 className="cl-white">Complete Health Care Solutions For All</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="far fa-file-alt" />
              <h4>Experience Doctors</h4>
              <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="fas fa-laptop-medical" />
              <h4>+45 Yrs Experience</h4>
              <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="fas fa-star-of-life" />
              <h4>Standards Treatments</h4>
              <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white mb-0">
              <i className="fas fa-user-md" />
              <h4>Best Departments</h4>
              <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>


  <section className="call-to p-5 bg-green">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="call-contact d-flex align-items-center">
            <i className="fas fa-phone-alt display-6 cl-white" />
            <div className="pl-3">
              <h4 className="cl-white">Looking For Consultation?</h4>
              <p className="m-0 cl-white">(+6) 23 555 0892</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <p className="call-to-mid cl-white">Contact us for all questions and thinks those. We will proud to you</p>
        </div>
        <div className="col-lg-4 col-md-12 text-center">
          <a href="contact.html" className="btn btn-white">Get Consultation</a>
        </div>
      </div>
    </div>
  </section>
    </>
     )}
    <Footer />
    </div>
  )
}

export default Home