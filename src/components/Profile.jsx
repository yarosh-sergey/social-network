import React from 'react'
import classes from './Profile.module.css'


const Profile = () => {
    return  <div className={classes.content}>
    <div>
    <img height="300px" src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' />
    </div>
    <div className={classes.posts}>
      my posts
      <div className={classes.item}>
        New post
      </div>
      <div className={classes.item}>
        post1
      </div>
      <div className={classes.item}>
        post2
      </div>
    </div>
  </div>
}

export default Profile