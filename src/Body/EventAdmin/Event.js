import { Component, state } from "react";
import { Link } from 'react-router-dom';
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
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/login'
        }
        return (
            <div>
                <section id="portfolio" class="portfolio futsals">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-lg-9 col-sm-12">
                            <div class="section-title" data-aos="fade-left">
                                <h2>Futsal</h2>
                                <p>Here, you can browse through all the futsals and update the approval in their details page.</p>
                            </div>
                        </div>
                    </div>  
                    </div>
                    </section>  
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row futsaladmin">
                    {
                        this.state.events.map((event, i) => {
                            return (
                                <div class="col-md-5">
                                    <div class="row p-2 bg-white border rounded">
                                        <div class="col-md-4 mt-1"><img class="img-fluid img-responsive rounded product-image" src={'http://localhost:8080/image/' + event.image} /></div>
                                        <div class="align-items-center align-content-center col-md-8 border-left mt-1"> 
                                        <h5>{event.name}</h5>
                                        <Link to={'/eventadmin/fetch/' + event._id}><i class="bx bx-link">Details</i></Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            </div>
        )
    }
}
export default Event;