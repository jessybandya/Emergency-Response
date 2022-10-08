import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip, Button, Form, Input, List  } from 'antd';
import React, { createElement, useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

import './styles.css'
import { db } from '../../../firebase';

function Reviews({ postId, comment, fromId, rating, ratingTime }) {
    const [post, setPost] = useState('')
    useEffect(() => {
        db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
          setPost(doc.data());
        });
    }, []) 
  return (
    <div>
    <Comment
    author={<a>{post?.name}</a>}
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={`${post?.name}`} />}
    content={
      <p>
        {comment}
      </p>
    }
    datetime={
      <Tooltip>
        <span style={{display:'flex',alignItems:'center',marginTop:-2}}>{rating} <StarIcon style={{color:"#FDCC0D"}}/></span>
      </Tooltip>
    }
  />
    </div>
  )
}

export default Reviews
