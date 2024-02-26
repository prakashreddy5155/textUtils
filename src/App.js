
import React,{useState} from 'react';
import PropPropTypes from './components/PropPropTypes';
import About from './components/About';
import TextUtils from './components/TextUtils';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const about = "Developers did a very great job in creating the game, They had worked day and night for this game and this game is made by a single person named Prakash";


  const [mode,setMode]  = useState(false); // at start the dark mode is turned off

    const[lightState,darkState] = useState({
      backgroundColor:"white",
      color:"black"
    });

  const[oldTextState,newTextState] = useState("Enable Dark Mode")

  const modeToggler = () =>
  {

    if(mode === false)
    {

      darkState({
        backgroundColor:"black",
        color:"white"
      });
      newTextState("Enable Light Mode");
      setMode(true);
    }
    else 
    {
      darkState({
        backgroundColor:"white",
        color:"black"
      });
      newTextState("Enable Dark Mode");
      
      setMode(false);

    }

  }

  return (


    <>

    <Router>

    <Navbar/>
    <div className="appContainer">

    <Routes>
      <Route  exact path = "/" element={<TextUtils title = "TextUtils" mode = {mode} modeToggler = {modeToggler} lightState  = {lightState}   oldTextState = {oldTextState}/>}>

      

      </Route>


      <Route exact path = "/about" element = { <About mode= {mode} modeToggler = {modeToggler} lightState = {lightState} oldTextState = {oldTextState}/>  }>

     

      </Route>

      <Route exact path = "/PropPropTypes" element = {<PropPropTypes title="Subway Runner" about = {about}/>}> 
         
      </Route>
      </Routes>

   </div>
   </Router>
                  </>

     
  );
}

export default App;



