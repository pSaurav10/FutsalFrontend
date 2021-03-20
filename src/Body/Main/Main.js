import{Component} from "react";
import About from './About';
import Partners from './Partners';
import Count from './Count'; 
class Main extends Component{
    
    render(){
        return(
            <main id="main">
                <Partners></Partners>
                <About></About>
                <Count></Count>
            </main>
        )
    }
}
export default Main;