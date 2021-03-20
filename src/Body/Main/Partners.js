import{Component} from "react";
import esewaimage from '../../assets/img/esewa.png';
import khaltiimage from '../../assets/img/khalti.png';
import prabhuimage from '../../assets/img/prabhu.png';
import imeimage from '../../assets/img/imepay.png';
import anfaimage from '../../assets/img/anfa.png';
import fifaimage from '../../assets/img/fifa.png';
import sportsimage from '../../assets/img/sports.png';
class Partners extends Component{
    
    render(){
        return(
            <section id="clients" class="clients">
                <div class="container">

                    <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                        <img src={esewaimage} class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="200">
                        <img src={khaltiimage} class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="300">
                        <img src={imeimage} class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="400">
                        <img src={prabhuimage} class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="500">
                        <img src={anfaimage} class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
                        <img src={fifaimage} class="img-fluid" alt=""/>
                    </div>

                    </div>

                </div>
            </section>
        )
    }
}
export default Partners;