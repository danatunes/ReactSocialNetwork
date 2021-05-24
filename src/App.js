import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom';
import Musics from "./components/Music/Musics";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/music'} component={Musics}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/> */}

                    <Route path={'/dialogs'}  
                    render={ () => <Dialogs  state = {props.state.messagesPage} />}/>
                    <Route path={'/profile'} 
                    render={() => <Profile state = {props.state.profilePage}/>}/>
                    <Route path={'/music'} render={() => <Musics/>}/>
                    <Route path={'/news'} component={() => <News/>}/>
                    <Route path={'/settings'} component={() => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
