import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <DialogItem name='Sergey' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Katya' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi' />
                <Message message='How is your' />
                <Message message='Yo' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>
        </div>
    )
}


export default Dialogs