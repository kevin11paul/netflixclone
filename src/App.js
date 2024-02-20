 import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import  './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals,action, comedy } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/> {/*rowpost is used two times with props. ie reusing */}
       <RowPost url={action} title='Action' isSmall/>
       <RowPost url={comedy} title='Comdey' isSmall/> 
    </div>
  );
}

export default App;
 