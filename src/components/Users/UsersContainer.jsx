import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {
    unfollowThunk, getUsersThunk,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress, followThunk
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from '../hoc/WithAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onSetCurrentPage = (page) => this.props.getUsers(this.props.pageSize, page)


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onSetCurrentPage={this.onSetCurrentPage}
                   isFetching={this.props.isFetching}
                   followingInProgress ={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, {
        unfollow: unfollowThunk, follow: followThunk, setUsers, setCurrentPage, toggleIsFetching, toggleIsFollowingProgress, getUsers: getUsersThunk}),
    withAuthRedirect
    )(UsersContainer)



