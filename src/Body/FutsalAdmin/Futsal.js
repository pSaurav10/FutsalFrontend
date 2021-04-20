import { Component, state, futsalUpdate, inputHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Futsal extends Component {
    state = {
        futsals: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsal/fetch")
            .then((response) => {
                this.setState({
                    futsals: response.data.data.reverse()
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    render() {
        const token = localStorage.getItem('token')
        if (!token) {
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
                        this.state.futsals.map((futsal, i) => {
                            return (
                                <div class="col-md-5">
                                    <div class="row p-2 bg-white border rounded">
                                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={'http://localhost:8080/image/' + futsal.image} /></div>
                                        <div class="align-items-center align-content-center col-md-3 border-left mt-1"> 
                                        <h5>{futsal.name}</h5>
                                        <Link to={'/futsaladmin/fetch/' + futsal._id}><i class="bx bx-link">Details</i></Link>
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
export default Futsal;