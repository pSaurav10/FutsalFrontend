import { Component } from "react";

class Header extends Component {
    render() {
        return (

            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container">
                    <div class="header-container d-flex align-items-center">
                        <div class="logo mr-auto">
                            <h1 class="text-light"><a href="index.html"><span>Futsal</span></a></h1>
                        </div>
                        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                    
                    <nav class="nav-menu d-none d-lg-block ">
                        <ul>
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="">Futsals</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Community</a></li>
                            <li class="get-started"><a href="">Login</a></li>
                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
                {/* <!-- End Header Container --> */}
              </div>
              </header>
            // <!-- End Header -->
            // <Container>
            //     <Row>
            //         <Col><a href= "/">Home</a>
            //         <a href= "/register">Register</a>
            //         <a href= "/login">Login</a></Col>
            //     </Row>
            // </Container>
        )
    }
}
export default Header;