import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
    let dialogElements = props.messagesPageData.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageElements = props.messagesPageData.messagesData.map(item => <Message message={item.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}


export default Dialogs