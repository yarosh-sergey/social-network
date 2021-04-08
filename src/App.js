import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
    const dialogsComponent = () => <Dialogs messagesPageData={props.state.dialogsPage} dispatch={props.dispatch}/>
    const profileComponent = () => <Profile profilePageData={props.state.profilePage} dispatch={props.dispatch}/>
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={dialogsComponent}/>
                    <Route path='/profile' render={profileComponent}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
