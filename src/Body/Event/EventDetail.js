import { Component, state } from "react";
import axios from 'axios';

class EventDetail extends Component {
  state = {
    events: [],
    id: this.props.match.params.id
  }
  componentDidMount() {
    axios.get("http://localhost:8080/event/fetch/" + this.state.id)
      .then((response) => {
        this.setState({
          events: [response.data.data]
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
                    <img src={'http://localhost:8080/image/' + event.image} class="img-fluid" alt="" />
                  </div>

                  <div class="portfolio-info">
                    <h3>Futsal information</h3>
                    <ul>
                      <li><strong>Name</strong>: {event.name}</li>
                      <li><strong>Address</strong>: {futsal.address}</li>
                      <li><strong>Phone</strong>: {futsal.phoneNumber}</li>
                      <li><strong>Grounds</strong>: {futsal.grounds}</li>
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
export default EventDetail;