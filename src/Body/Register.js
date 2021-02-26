import{Component, state, loginUser} from "react";
import axios from 'axios';
 
class Register extends Component{
    state = {
        fname : "",
        lname:"",
        username : "",
        password : "",
        email : ""
    }

    loginUser = (e)=>{
        e.preventDefault();
        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        axios.post("http://localhost:8080/player/register", data)
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
                <form onSubmit={this.loginUser}>
                    <p>First Name : <input type = "text" value = {this.state.fname} 
                    onChange = {(event)=>{this.setState({fname : event.target.value})}}/></p>
                    <p>Last Name : <input type = "text" value = {this.state.lname} 
                    onChange = {(event)=>{this.setState({lname : event.target.value})}}/></p>
                    <p>Username : <input type = "text" value = {this.state.username}
                    onChange = {(event)=>{this.setState({username : event.target.value})}}/></p>
                    <p>Password : <input type = "text" value = {this.state.password}
                    onChange = {(event)=>{this.setState({password : event.target.value})}}/></p>
                    <p>Email : <input type = "email" value = {this.state.email}
                    onChange = {(event)=>{this.setState({email : event.target.value})}}/></p>
                    <p><input type="submit" value="SEND"></input></p>
                </form>
            </div>
        )
    }
}
export default Register;