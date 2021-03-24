import { Component } from "react";

class Header extends Component {
    render() {
        return (

            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container">
                    <div class="header-container d-flex align-items-center">
                        <div class="logo mr-auto">
                            <h1 class="text-light"><a href="/"><span>Futsal</span></a></h1>
                        </div>
                        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                    
                    <nav class="nav-menu d-none d-lg-block ">
                        <ul>
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="/futsals">Futsal</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/community">Community</a></li>
                            <li class="get-started"><a href="/Login">Login</a></li>
                        </ul>
                    </nav>
                </div>
              </div>
              </header>
            
        )
    }
}
export default Header;