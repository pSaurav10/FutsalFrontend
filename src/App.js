import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import BacktoTop from './BacktoTop/BacktoTop';
import Header1 from './Header/Header1';
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
