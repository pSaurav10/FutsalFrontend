import { Component } from "react";

class Footerlinks extends Component {
    render() {
        return (
            <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="">Terms of service</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="">Privacy policy</a></li>
            </ul>
        </div>
        )
    }
}
export default Footerlinks;