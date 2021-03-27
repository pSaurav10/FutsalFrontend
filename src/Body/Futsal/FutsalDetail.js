import { Component, state } from "react";
import axios from 'axios';

class FutsalDetail extends Component {
  state = {
    futsals: [],
    id: this.props.match.params.id

  }
  componentDidMount() {
    axios.get("http://localhost:8080/futsal/fetch/" + this.state.id)
      .then((response) => {
        this.setState({
          futsals: [response.data.data]
        })
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  render() {
    return (
      <section id="portfolio-details" class="portfolio-details single-detail">
        {
          this.state.futsals.map((futsal) => {
            return (
              <div class="container">

                <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">

                  <div class="owl-carousel portfolio-details-carousel">
                    <img src={'http://localhost:8080/image/' + futsal.image} class="img-fluid" alt="" />
                  </div>

                  <div class="portfolio-info">
                    <h3>Futsal information</h3>
                    <ul>
                      <li><strong>Name</strong>: {futsal.name}</li>
                      <li><strong>Address</strong>: {futsal.address}</li>
                      <li><strong>Phone</strong>:+977 {futsal.phoneNumber}</li>
                      <li><strong>Grounds</strong>: {futsal.grounds}</li>
                      <li><strong>Fee</strong>: {futsal.fee}</li>
                    </ul>
                  </div>

                </div>

                <div class="portfolio-description">
                  <h2>Description of {futsal.name}</h2>
                  <p>
                    {futsal.description}
                  </p>
                </div>
              </div>
            )
          })
        }
      </section>
    )
  }
}
export default FutsalDetail;