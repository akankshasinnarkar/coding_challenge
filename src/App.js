import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Trades from './components/Trades';
import Securities from './components/Securities';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  return (
    <>
    <>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert} />
        
        <div className="container my-5">
          <Routes>
            <Route  path="/" element={<Home showAlert={showAlert}/>}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/dashboard" element={<Securities showAlert={showAlert}/>}></Route>
            <Route exact path="/trades" element={<Trades showAlert={showAlert}/>}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
    </>
  );
}

export default App;