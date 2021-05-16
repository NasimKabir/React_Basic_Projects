import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
