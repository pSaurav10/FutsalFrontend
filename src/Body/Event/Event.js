import { Component, state } from "react";
import axios from 'axios';

class Event extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/event/fetch")
            .then((response) => {
                this.setState({
                    events: response.data.data
                })
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <section id="portfolio" class="portfolio futsals">
                <div class="container">

                    <div class="section-title" data-aos="fade-left">
                        <h2>Event</h2>
                        <p>Here, you can browse through all the events that are going to take place.</p>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            this.state.events.map((event, i) => {

                                return (
                                    <div class="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                                        <div class="portfolio-wrap">
                                            <img src={'http://localhost:8080/image/'+event.image} class="img-fluid" alt="" />
                                            <div class="portfolio-info">
                                                <h4>{event.name}</h4>
                                                <p>{event.location}</p>
                                                <div class="portfolio-links">
                                                    <a href={'http://localhost:8080/image/'+event.image} data-gall="portfolioGallery" class="venobox" title={event.name}><i class="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        )
    }
}
export default Event;