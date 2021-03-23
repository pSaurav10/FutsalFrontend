import { Component, state, loginUser } from "react";
import axios from 'axios';

class Register extends Component {
    state = {
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: ""
    }

    loginUser = (e) => {
        e.preventDefault();
        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        axios.post("http://localhost:8080/player/register", data)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            // <div>
            //     <form onSubmit={this.loginUser}>
            //         <p>First Name : <input type = "text" value = {this.state.fname} 
            //         onChange = {(event)=>{this.setState({fname : event.target.value})}}/></p>
            //         <p>Last Name : <input type = "text" value = {this.state.lname} 
            //         onChange = {(event)=>{this.setState({lname : event.target.value})}}/></p>
            //         <p>Username : <input type = "text" value = {this.state.username}
            //         onChange = {(event)=>{this.setState({username : event.target.value})}}/></p>
            //         <p>Password : <input type = "text" value = {this.state.password}
            //         onChange = {(event)=>{this.setState({password : event.target.value})}}/></p>
            //         <p>Email : <input type = "email" value = {this.state.email}
            //         onChange = {(event)=>{this.setState({email : event.target.value})}}/></p>
            //         <p><input type="submit" value="SEND"></input></p>
            //     </form>
            // </div>
            <div class="container register">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block" />
                        <h1>Create an Account</h1>
                        <p class="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
                        <p class="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
                            <u>Bootstrapious</u></a>
                        </p>
                    </div>

                    <div class="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div class="row">

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="username" type="text" name="username" placeholder="User Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-lock text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-envelope text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="bx bxs-phone text-muted"></i>
                                        </span>
                                    </div>
                                    <select id="countryCode" name="countryCode" style={{'max-width': 80}} class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                        <option value="">+977</option>
                                    </select>
                                    <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3" />
                                </div>

                                

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                    <a href="#" class="btn btn-primary btn-block py-2">
                                        <span class="font-weight-bold">Create your account</span>
                                    </a>
                                </div>

                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Already Registered?<a href="/login" class="text-primary ml-2">Login</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;