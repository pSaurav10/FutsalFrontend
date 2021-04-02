import { Component, state, state2, inputHandler, futsalBook } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class FutsalDetail extends Component {
  state = {
    name: "",
    address: "",
    phoneNumber: "",
    description: "",
    image: "",
    grounds: "",
    fee: "",
    userid: "",
    approve: false,
    futid: this.props.match.params.id,
    futsalname: "",
    futsalid: "",
    date: "",
    time: "",
    username: "",
    userid: localStorage.getItem('userid')
    
  }
  componentDidMount() {
    console.log(this.state.futid)
    axios.get("http://localhost:8080/futsal/fetch/" + this.state.futid)
      .then((response) => {
        this.setState({
          name: response.data.data.name,
          address: response.data.data.address,
          phoneNumber: response.data.data.phoneNumber,
          description: response.data.data.description,
          image: response.data.data.image,
          grounds: response.data.data.grounds,
          fee: response.data.data.fee,
          userid: response.data.data.userid,
          approve: response.data.data.approve,
          futsalname: response.data.data.name,
          futsalid: response.data.data.id
        })
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  futsalBook = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/futsalbook", this.state)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
 

  render() {
    const options = [
      '06 am', '07 am', '08 am', '09 am', '10 am'
    ]
       
    return (
      <div>
        <section id="portfolio-details" class="portfolio-details single-detail">

          <div class="container">

            <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">

              <div class="owl-carousel portfolio-details-carousel">
                <img src={'http://localhost:8080/image/' + this.state.image} class="img-fluid" alt="" />
              </div>

              <div class="portfolio-info">
                <h3>Futsal information</h3>
                <ul>
                  <li><strong>Name</strong>: {this.state.name}</li>
                  <li><strong>Address</strong>: {this.state.address}</li>
                  <li><strong>Phone</strong>:+977 {this.state.phoneNumber}</li>
                  <li><strong>Grounds</strong>: {this.state.grounds}</li>
                  <li><strong>Fee</strong>: {this.state.fee}</li>
                </ul>
              </div>

            </div>

            <div class="portfolio-description">
              <h2>Description of {this.state.name}</h2>
              <p>
                {this.state.description}
              </p>
            </div>
          </div>
              

        </section>

        <div class="container">
          <div class="row py-5 mt-4 align-items-center">
            <div class="col-md-12 pr-lg-5 mb-5 mb-md-0">
              <h1>Book {this.state.name}</h1><br />

            </div>
            <div class="col-md-12 col-lg-12 ml-auto">

              <div class="row">

                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class='bx bx-current-location text-muted'></i>
                    </span>
                  </div>
                  <input id="username" type="text" name="username"
                    value={this.state.username} onChange={this.inputHandler} required
                    placeholder="Username" class="form-control bg-white border-left-0 border-md" style={{ height: "100%" }} />
                </div>

                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class='bx bx-current-location text-muted'></i>
                    </span>
                  </div>
                  <input id="date" type="date" name="date"
                    onChange={this.inputHandler} value={this.state.date} required
                    placeholder="Date" class="form-control bg-white border-left-0 border-md" style={{ height: "100%" }} />
                </div>

                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class='bx bxs-phone text-muted'></i>
                    </span>
                  </div>
                  <select id="time" name="time" onChange={this.inputHandler} value={this.state.time} class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                    <option>Please select a time</option>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                    <option value={options[2]}>{options[3]}</option>
                    <option value={options[2]}>{options[4]}</option>
                  </select>
                  {/* <Dropdown options={options} name="time" onChange={this._onSelect} value={this.state.time} placeholder="Select a time" /> */}
                </div>

                <div class="form-group col-lg-4 mx-auto mb-0">
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.futsalBook}>Book Futsal</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>

      </div>
    )
  }
}
export default FutsalDetail;