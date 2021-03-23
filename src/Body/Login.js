import { Component, state, loginUser, loginhandler } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        username: "",
        password: "",
        checklogin: false
    }

    loginUser = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginhandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/player/login", this.state)
        .then((response) => {
            console.log(response)
            this.setState({
                checklogin: true
            })
            localStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        if (this.state.checklogin === true){
            return<Redirect to='/'/>
        }
        return (
            <div class="container register">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block" />
                        <h1>Login to your Account</h1>
                        <p class="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
                        <p class="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
                            <u>Bootstrapious</u></a>
                        </p>
                    </div>

                    <div class="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div class="row">

                               

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="username" type="text" name="username" placeholder="User Name"
                                    value={this.state.username} onChange={this.loginUser} required
                                    class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-lock text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Password" 
                                    value={this.state.password} onChange={this.loginUser} required
                                    class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.loginhandler}>Login</button>
                                </div>

                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Not Registered? <a href="/register" class="text-primary ml-2">Register</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;