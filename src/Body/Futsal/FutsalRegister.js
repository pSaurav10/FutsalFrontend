import { Component, state, inputHandler, fileHandler, futsalAdd } from "react";
import axios from 'axios';

class FutsalRegister extends Component {
    state = {
        name: "",
        address: "",
        phoneNumber: "",
        description: "",
        image: "",
        grounds: "",
        fee: "",
        userid: localStorage.getItem('userid'),
        approve: false,
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    inputHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) =>{
        this.setState({
            image: e.target.files[0]
        })
    }
    futsalAdd = (e) =>{
        e.preventDefault();
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('address', this.state.address)
        data.append('phoneNumber', this.state.phoneNumber)
        data.append('description', this.state.description)
        data.append('image', this.state.image)
        data.append('grounds', this.state.grounds)
        data.append('fee', this.state.fee)
        data.append('userid', this.state.userid)
        data.append('approve', this.state.approve)

        axios.post("http://localhost:8080/futsal/register", data,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div class="container register">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <h1>Register your Futsal</h1><br/>
                        <p>Remember that your futsal needs to be approved by our <strong>ADMIN TEAM</strong> before it is shown in the list of Registered Futsals.</p>
                    </div>
                    <div class="col-md-7 col-lg-6 ml-auto">
                        
                            <div class="row">

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="name" type="text" name="name" 
                                    value={this.state.name} onChange={this.inputHandler} required
                                    placeholder="Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bx-current-location text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="address" type="text" name="address" 
                                    value={this.state.address} onChange={this.inputHandler} required
                                    placeholder="Address" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-phone text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="phoneNumber" type="number" name="phoneNumber" min="0" 
                                    value={this.state.phoneNumber} onChange={this.inputHandler} required
                                    placeholder="Phone Number" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-envelope text-muted'></i>Image
                                        </span>
                                    </div>
                                    <input id="image" type="file" name="image" 
                                    onChange={this.fileHandler} required
                                    placeholder="Image" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bx-play text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="grounds" type="number" name="grounds" min="0"
                                    value={this.state.grounds} onChange={this.inputHandler} required
                                    placeholder="Grounds" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-badge-dollar text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="fee" type="text" name="fee"
                                    value={this.state.fee} onChange={this.inputHandler} required
                                    placeholder="Fee" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-message-rounded-detail text-muted'></i>
                                        </span>
                                    </div>
                                    <textarea id="description" type="description" name="description" 
                                    value={this.state.description} onChange={this.inputHandler} required
                                    placeholder="Description" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.futsalAdd}>Register your Futsal</button>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FutsalRegister;