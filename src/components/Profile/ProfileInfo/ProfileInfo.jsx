import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    height="300px"
                    src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
                />
            </div>
            <div className={classes.decriptionBlock}>
                ava+descriprion
            </div>
        </div>
    );
};

export default ProfileInfo;
