import React from 'react'  
import Navbar from './Navbar' 
import Home from './pages/Home'
import Kaffee from './pages/Kaffee'  
import Cart from './pages/Cart' 
import Bestellung from './pages/Bestellung'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import KaffeeContext from './components/context/KaffeContext'

function App() { 
    return (      
        <KaffeeContext>
        <Router>
            <div>
                <Navbar /> 
                <Switch>  
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/kaffee" component={Kaffee} />  
                    <Route exact path="/cart" component={Cart} /> 
                    <Route exact path="/bestellung" component={Bestellung} />
                </Switch> 
            </div> 
        </Router> 
        </KaffeeContext>
    )
} 

export default App