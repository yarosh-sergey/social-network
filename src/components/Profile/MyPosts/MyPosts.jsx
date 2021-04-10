import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    let addPost = () => {
        props.addPost()
    }

    let onChangeNewPostText = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPostText} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
