import React from 'react'
import {connect} from 'react-redux';
import Header from './Header';
import {authThunk} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.auth()
    }

    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{auth: authThunk})(HeaderContainer)