import { Component,state } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Register from './Register';
import Login from './Login';
import Hero from './Hero';
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
            <Hero></Hero>
                
                
            
        )
    }
}
export default Body;