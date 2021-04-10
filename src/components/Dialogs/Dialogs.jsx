import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageCreator, updateNewMessageText} from '../../redux/dialogs-reducer';



const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messageElements = props.messagesData.map(item => <Message message={item.message}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let onChangeTextNewMessage = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea onChange={onChangeTextNewMessage} value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}


export default Dialogs