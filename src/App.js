// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
    
} from "react-router-dom";





// let name = "Abhi";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [text, setText] = useState('Enable');
  const [alert, setAlert]  = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setText('Disable');
      document.body.style.backgroundColor = '#130a29';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // document.body.style.color = 'white';
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 3500);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500)
    }
    else {
      setMode('light');
      setText('Enable');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // document.body.style.color = 'black';
    }
  }
  return (
    <>
   {/* <Navbar /> */}
   <Router>

   <Navbar title= "TextUtils" text = {text} toggleMode = {toggleMode} aboutText = "About-us" mode = {mode} />
   <Alert alert = {alert} />
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About mode = {mode} />} />
            
        
          <Route exact path="/" element={  <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode={mode} /> } />
              {/* <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode={mode} /> */}
          
  </Routes>
  </div>
  </Router>
</>
   

  );
}

export default App;
