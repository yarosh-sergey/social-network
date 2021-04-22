import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfileThunk, setUserProfile} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router";
import {withAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile: getProfileThunk}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)