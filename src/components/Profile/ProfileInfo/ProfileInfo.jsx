import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    height="300px"
                    src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
                />
            </div>
            <div className={classes.decriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+descriprion
            </div>
        </div>
    );
};

export default ProfileInfo;
