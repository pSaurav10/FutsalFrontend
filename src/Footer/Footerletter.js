import { Component } from "react";

class Footerletter extends Component {
    render() {
        return (
            <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                    <input type="email" name="email"><input type="submit" value="Subscribe"/>
                    </input>
                </form>
            </div>
          
        )
    }
}
export default Footerletter;