import { Component, state, inputHandler, futsalUpdate } from "react";
import axios from 'axios';

class Profile extends Component {
    state = {
        fname: "",
        lname: "",
        username: "",
        address: "",
        phone: "",
        email: "",
        dob: "",
        id: this.props.match.params.id,
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/profile" , this.state.config)
          .then((response) => {
            this.setState({
              fname: response.data.data.fname,
              lname: response.data.data.lname,
              username: response.data.data.username,
              address: response.data.data.address,
              phone: response.data.data.phone,
              email: response.data.data.email,
              dob: response.data.data.dob,
              fee: response.data.data.fee
            })
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    inputHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    futsalUpdate = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:8080/futsal/update", this.state,this.state.config)
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
                        <h1>Update your Futsal</h1><br/>
                        <p>Here you can update the details of your futsal.</p>
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
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.futsalUpdate}>Update your Futsal</button>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FutsalUpdate;