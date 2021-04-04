import { Component} from "react";
import {Route} from 'react-router-dom';
import Register from './Register'
import Main from './Main/Main';
import Login from './Login';
import FutsalPage from './Futsal/Futsal';
import FutsalDetail from './Futsal/FutsalDetail';
import FutsalRegister from './Futsal/FutsalRegister';
import EventPage from './Event/Event';
import EventDetail from './Event/EventDetail';
import EventRegister from './Event/EventRegister';
import Community from './Community/Community';
import SinglePost from './Community/SinglePost';

class Body extends Component {
    render() {
        return (
            
                <div>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/Futsal" exact component={FutsalPage}></Route>
                    <Route path="/Event" exact component={EventPage}></Route>
                    <Route path="/Community" exact component={Community}></Route>
                    <Route path='/register' exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/futsal/fetch/:id" exact component={FutsalDetail}></Route>
                    <Route path="/futsal-register" exact component={FutsalRegister}></Route>
                    <Route path="/event/fetch/:id" exact component={EventDetail}></Route>
                    <Route path="/event-register" exact component={EventRegister}></Route>
                    <Route path="/post/fetch/:id" exact component={SinglePost}></Route>
                    
                </div>
        )
    }
}
export default Body;