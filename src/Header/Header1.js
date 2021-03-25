import { Component } from "react";

class Header extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-trans fixed-top">

                <a class="navbar-brand" href="/index">
                <div class="logo mr-auto">
                            <h1 class="text-light"><a href="/"><span>Futsal</span></a></h1>
                        </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="/index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/patient">Patient</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/doctor">Doctor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/staff">Staff</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav leftout">
                        <li class="nav-item get-started">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Header;