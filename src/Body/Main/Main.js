import{Component} from "react";
import About from './About';
import Partners from './Partners'; 
class Main extends Component{
    
    render(){
        return(
            <main id="main">
                <Partners></Partners>
                <About></About>
            </main>
        )
    }
}
export default Main;