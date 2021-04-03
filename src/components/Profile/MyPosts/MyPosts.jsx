import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    return (
        <div className={classes.posts}>
            {postElements}
        </div>
    );
};

export default MyPosts;
