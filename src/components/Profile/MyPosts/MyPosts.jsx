import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It`s my first post!', likesCount: 3}
    ]

    let postElements = postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    return (
        <div className={classes.posts}>
            {postElements}
        </div>
    );
};

export default MyPosts;
