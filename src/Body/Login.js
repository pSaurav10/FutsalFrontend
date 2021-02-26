import {Component, state, sendUserData} from "react";
import axios from 'axios';
class Login extends Component {
    state = {
        username : "",
        password : ""
    }
    sendUserData = (e)=>{
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:8080/player/login", data)
        .then(response=>{
            console.log(response)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.sendUserData}>
                <p>Username : <input type = "text" value = {this.state.username}
                onChange = {(event)=>{this.setState({username : event.target.value})}}/></p>
                <p>Password : <input type = "text" value = {this.state.password}
                onChange = {(event)=>{this.setState({password : event.target.value})}}/></p>
                <p><input type="submit" value="SEND" onClick={this.sendUserData}></input></p>
            </form>
        </div>
        )
    }
}

export default Login