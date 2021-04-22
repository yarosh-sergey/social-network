import React from "react";
import classes from "./Header.module.css";
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://img1.freepng.ru/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg" />
        <div className={classes.loginBlock}>
            {
                props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
  );
};

export default Header;
