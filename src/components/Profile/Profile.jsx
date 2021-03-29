import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


const Profile = () => {
    return  <div className={classes.content}>
    <div>
    <img height="300px" src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' />
    </div>
    <MyPosts />
    </div>
}

export default Profile