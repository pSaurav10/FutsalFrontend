import { Component} from "react";
import {Route} from 'react-router-dom';
import Register from './Register'
import Main from './Main/Main';
import Login from './Login';
import FutsalPage from './Futsal/Futsal';
import FutsalDetail from './Futsal/FutsalDetail';
import EventPage from './Event/Event';

class Body extends Component {
    render() {
        return (
            
                <div>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/Futsal" exact component={FutsalPage}></Route>
                    <Route path="/Event" exact component={EventPage}></Route>
                    <Route path='/register' exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/futsal/fetch/:id" exact component={FutsalDetail}></Route>
                </div>
        )
    }
}
export default Body;