import{Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Home from "./Home";
import Register from './Register'
import Login from './Login'

class Body extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path = "/register" exact component = {Register}/>
                        <Route path = "/" exact component = {Home}/>
                        <Route path = "/login" exact component = {Login}/>
                    </Col>
                    <Col>
                        
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
export default Body;