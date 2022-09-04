import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/nav/Navbar/Navbar";
import Banner from "./Components/banner/Banner";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Navbar />
              <div>
                  <Routes>
                      <Route path='/blog' element={<Banner />}/>
                      <Route path='/vk' element={<Banner />}/>
                      <Route path='/' element={<Banner />}/>
                      <Route path='/youtube' element={<Banner />}/>
                      <Route path='/facebook' element={<Banner />}/>
                  </Routes>

              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;
