import{Component} from "react";
import About from './About';
import Partners from './Partners';
import Count from './Count';
import Whyus from './Whyus';
import Futsal from './Futsal';
import Event from './Event';
import Contact from './Contact';
class Main extends Component{
    
    render(){
        return(
            <main id="main">
                <Partners></Partners>
                <About></About>
                <Count></Count>
                <Whyus></Whyus>
                <Futsal></Futsal>
                <Event></Event>
                <Contact></Contact>
            </main>
        )
    }
}
export default Main;