import React from 'react';
import Dialogs from './Dialogs';
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onChangeNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <Dialogs updateNewMessageText={onChangeNewMessageText} addMessage={addMessage} dialogsData={state.dialogsData}
                 messagesData={state.messagesData} newMessageText={state.newMessageText}/>
    );
};

export default DialogsContainer;
