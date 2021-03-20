import { Component,state } from "react";
import Hero from './Hero';
import Main from './Main/Main';
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
                    <Hero></Hero>
                    <Main></Main>
                </div>
        )
    }
}
export default Body;