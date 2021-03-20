import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import BacktoTop from './BacktoTop/BacktoTop'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <BacktoTop></BacktoTop>
    </div>
    </BrowserRouter>
  );
}

export default App;
