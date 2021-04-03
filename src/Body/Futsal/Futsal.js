import { Component, state } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Futsal extends Component {
    state = {
        futsals: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsal/fetch")
            .then((response) => {
                this.setState({
                    futsals: response.data.data
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
                                <h2>Futsal</h2>
                                <p>Here, you can browse through all the futsals registered in our website. And you can book the futsal of your choice</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <a class="get-started" href="/futsal-register">Register your Futsal</a>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            this.state.futsals.map((futsal, i) => {

                                return (
                                    <div class="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                                        <div class="portfolio-wrap">
                                            <img src={'http://localhost:8080/image/' + futsal.image} class="img-fluid" alt="" />
                                            <div class="portfolio-info">
                                                <h4>{futsal.name}</h4>
                                                <p>{futsal.address}</p>
                                                <div class="portfolio-links">
                                                    <a href={'http://localhost:8080/image/' + futsal.image} data-gall="portfolioGallery" class="venobox" title={futsal.name}><i class="bx bx-plus"></i></a>

                                                    <Link to={'/futsal/fetch/' + futsal._id}><i class="bx bx-link"></i></Link>
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
export default Futsal;