import { Component } from "react";
import Footercontact from './Footercontact';
import Footerlinks from './Footerlinks';
import Footerservices from './Footerservices';
import Footerletter from './Footerletter';
import Footercopyright from './Footercopyright';
import Footersocial from './Footersocial';

class Footer extends Component {

    render() {
        return (
            <footer id="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <Footercontact></Footercontact>


                            <Footerlinks></Footerlinks>

                            <Footerservices></Footerservices>

                            <Footerletter></Footerletter>

                        </div>
                    </div>
                </div>
                <div class="container d-md-flex py-4">

                    <Footercopyright></Footercopyright>
                    <Footersocial></Footersocial>
                </div>
            </footer>
        )
    }
}
export default Footer;