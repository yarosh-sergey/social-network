import React from 'react';
import Dialogs from './Dialogs';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
