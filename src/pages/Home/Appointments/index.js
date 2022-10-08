import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Modal} from "react-bootstrap"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { db } from "../../../firebase"
import {  toast } from 'react-toastify';


function Appoinments({ postId, date, name, timestamp, phone, email, solved, fromId }) {


    const updateSolved = (e) => {
      e.preventDefault()
      if(window.confirm(`Are you sure you want to update: ${email} - ${phone} - ${date} -> From ${name} \n\n As completed task?`)){
        db.collection("appointments").doc(postId).update({
          solved:true,
          // read:false
          }).then(function() {
            toast.success("Appointment has been updated as completed task!");
          });
      }     
     }

    const deleteEmergency = () =>{
      if(window.confirm(`Are you sure you want to delete: ${email} - ${phone} - ${date} -> From ${name}?`)){
          db.collection("appointments").doc(postId).delete().then(function() {
          }).catch(function(error) {
              toast.error("Error removing post: ", error);
          }); 
          toast.success("Appointmnent has been deleted!")   
        }
  }

  

  return (
    <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell component="th" scope="row">{name}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell style={{fontWeight:'900'}} align="right">pending...</TableCell>
      <TableCell style={{justifyContent:'space-between'}} align="right">
       <CheckCircleIcon onClick={updateSolved} style={{color:'#20c997',cursor:'pointer'}} /> 
       <DeleteForeverIcon onClick={deleteEmergency} style={{color:'#20c997',cursor:'pointer'}}/>
      </TableCell>
      <TableCell  align="right">
           
      </TableCell>
    </TableRow>

  </React.Fragment>
  )
}

export default Appoinments