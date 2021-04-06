import { Component, state, insertPost, postHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
    render() {
        return (

            <div class="container d-flex profilee">

                <div class="card px-4 pt-4 pb-2">
                    <div class="media p-2"> <img src="https://imgur.com/yVjnDV8.png" class="mr-1 align-self-start" />
                        <div class="media-body">
                            <div class="d-flex flex-row justify-content-between">
                                <h6 class="mt-2 mb-0">Alexander Parkinson</h6><i class="fas fa-angle-down mr-3 text-muted"></i>
                            </div>
                            <p class="text-muted">Los Angeles</p>
                        </div>
                    </div>
                    <ul class="list text-muted mt-3 pl-0">
                        <li><i class='bx bx-football mr-3 ml-2'></i>Your Futsal</li>
                        <li><i class="bx bxs-calendar-event mr-3 ml-2"></i>Your Event</li>
                        <li><i class="bx bxs-news mr-3 ml-2"></i>Your Posts</li>
                        <li><i class='bx bxs-bookmark-alt-plus mr-3 ml-2' ></i>Your Booking</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p>Here is the content</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;