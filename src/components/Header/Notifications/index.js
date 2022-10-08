import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { db } from '../../../firebase';


function Notifications({ date,severity, urgency, victims, postId, solved, read, uid, fromId  }) {

  const unread = () => {
      db.collection("emergency-response").doc(postId).update({
        read:true
        })
  }
  return (
    <div>
    {fromId === uid &&(
      <>
      {read === false && solved === true ?(
        <ListItem
        onClick={unread}
        style={{backgroundColor:'#D3D3D3',borderBottom:'1px solid #fff'}}
        disableGutters
        secondaryAction={
          <IconButton aria-label="comment">
          {solved === true ?(
             <CheckCircleOutlineIcon style={{color:'#20c997'}} />
          ):(
            <>
            <HourglassTopIcon style={{color:'#20c997'}}/>
            </>
          )}
          </IconButton>
        }
      >
        <ListItemText primary={`${date} - ${severity} - ${urgency}- Victim(s) ${victims}`} />
      </ListItem>
      ):(
        <ListItem
        onClick={unread}
        style={{backgroundColor:'#fff',borderBottom:'1px solid #D3D3D3'}}
        disableGutters
        secondaryAction={
          <IconButton aria-label="comment">
          {solved === true ?(
             <CheckCircleOutlineIcon style={{color:'#20c997'}} />
          ):(
            <>
            <HourglassTopIcon style={{color:'#20c997'}}/>
            </>
          )}
          </IconButton>
        }
      >
        <ListItemText primary={`${date} - ${severity} - ${urgency}- Victim(s) ${victims}`} />
      </ListItem>
      )}
      </>
    )}


    </div>
  )
}

export default Notifications