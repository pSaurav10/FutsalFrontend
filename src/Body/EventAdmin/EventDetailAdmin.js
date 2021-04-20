import { Component, state, eventUpdate } from "react";
import axios from 'axios';

class EventDetailAdmin extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    date: "",
    fee: "",
    phone: "",
    location: "",
    id: this.props.match.params.id,
    approve: true,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
  }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/event/fetch/" + this.state.id, this.state.config)
      .then((response) => {
        this.setState({
            name: response.data.data.name,
            location: response.data.data.location,
            phone: response.data.data.phone,
            description: response.data.data.description,
            image: response.data.data.image,
            date: response.data.data.date,
            fee: response.data.data.fee,
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  eventUpdate = (e) =>{
    e.preventDefault();

    axios.put("http://localhost:8080/eventadmin/update", this.state,this.state.config)
    .then((response)=>{
        this.setState({ 
            checkRegister: true
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
  render() {
    return (
        <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row futsaladmindetail">
                        <div class="col-md-12">
                            <div class="row p-2 bg-white border rounded">
                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={'http://localhost:8080/image/' + this.state.image} /></div>
                                <div class="col-md-6 mt-1">
                                    <h5>{this.state.name}</h5>
                                    <div class="d-flex flex-row">
                                        <span>Address: {this.state.address}</span>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <span>Phone Number: {this.state.phoneNumber}</span>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <span>Grounds: {this.state.grounds}</span>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <span>Fee: {this.state.fee}</span>
                                    </div>

                                    <p class="text-justify text-truncate para mb-0">{this.state.description}</p>
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="submit" onClick={this.eventUpdate}>Approve Event</button></div>
                                </div>
                            </div>
                        </div>
        </div>
    </div>
    )
  }
}
export default EventDetailAdmin;