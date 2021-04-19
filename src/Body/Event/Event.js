import { Component, state } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Event extends Component {
    state = {
        events: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/event/fetch", this.state.config)
            .then((response) => {
                this.setState({
                    events: response.data.data.reverse()
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

                    <div class="row mb-3">
                        <div class="col-lg-9 col-sm-12">
                            <div class="section-title" data-aos="fade-left">
                                <h2>Event</h2>
                                <p>Here, you can browse through all the events that are going to take place.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <a class="get-started" href="/event-register">Register your Event</a>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            this.state.events.map((event, i) => {

                                return (
                                    <div class="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                                        <div class="portfolio-wrap">
                                            <img src={'http://localhost:8080/image/' + event.image} class="img-fluid" alt="" />
                                            <div class="portfolio-info">
                                                <h4>{event.name}</h4>
                                                <p>{event.location}</p>
                                                <div class="portfolio-links">
                                                    <Link to={'/event/fetch/' + event._id}><i class="bx bx-link"></i></Link>
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