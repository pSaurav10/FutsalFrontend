import { Component } from "react";
class Count extends Component {

    render() {
        return (
            <section id="counts" class="counts">
                <div class="container">

                    <div class="row counters">

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">50 +</span>
                            <p>Futsals</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">20 +</span>
                            <p>Events</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1,463 +</span>
                            <p>Users</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">4</span>
                            <p>Payment Partners</p>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
export default Count;