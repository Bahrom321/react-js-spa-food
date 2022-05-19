import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Switch } from "react-router-dom"

import { Home } from "./pajes/Home";
import { NotFound } from "./pajes/NotFound";
import {Category} from "./pajes/Category";
import { Recipe } from "./pajes/Recipe";


function App() {
  
  return (
    <div className="App">
      <Header/>
          <main className="container content">
            <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/category/:name" component={ Category } />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={ NotFound } />
            </Switch>
          </main>
      <Footer/>
    </div>
  );
}

export default App;
