import { Component, state } from "react";
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

                    <div class="section-title" data-aos="fade-left">
                        <h2>Futsal</h2>
                        <p>Here, you can browse through all the futsals registered in our website. And you can book the futsal of your choice</p>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            this.state.futsals.map((futsal, i) => {

                                return (
                                    <div class="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                                        <div class="portfolio-wrap">
                                            <img src={'http://localhost:8080/image/'+futsal.image} class="img-fluid" alt="" />
                                            <div class="portfolio-info">
                                                <h4>{futsal.name}</h4>
                                                <p>{futsal.address}</p>
                                                <div class="portfolio-links">
                                                    <a href={'http://localhost:8080/image/'+futsal.image} data-gall="portfolioGallery" class="venobox" title={futsal.name}><i class="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event1.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event1</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event 2</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event3.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event 3</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event4.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event 4</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event5.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event 5</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/event6.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event 6</h4>
                                    <p>Event</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/event6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     */}
                    </div>

                </div>
            </section>
        )
    }
}
export default Futsal;