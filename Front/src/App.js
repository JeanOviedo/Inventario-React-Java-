
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from "./Componentes/Navbar";
import Products  from "./Componentes/Products";
import Contacto from "./Componentes/Contacto";



function App() {
 
  return (
   
    <div className="App">
      <Navbar></Navbar>
     
      <header className="App-header">
   
         
      <Route exact path="/">
      <Products></Products>
        </Route>
      
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        
      </header>
    </div>
  );
}

export default App;
