import { Component,state } from "react";
import {Route} from 'react-router-dom';
import Register from './Register'
import Main from './Main/Main';
import Login from './Login';
import axios from 'axios';

class Body extends Component {
    state = {
        futsals : []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsal/fetch")
            .then((response) => {
                console.log(response)
                this.setState({
                    futsals: [response.data]
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            
                <div>
                    <Route path="/" exact component={Main}></Route>
                    <Route path='/register' exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                </div>
        )
    }
}
export default Body;