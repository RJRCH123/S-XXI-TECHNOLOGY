import "./_App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  ProductDetail,
  Cart,
  Checkout,
  OrderCompleted,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="d-flex flex-row mt-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/products">
                <ProductDetail />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/ordercompleted">
                <OrderCompleted />
              </Route>
              <Route path="*">
                <div className="text-center container">
                  <h1>Página no encontrada. Error 404</h1>
                  <p>
                    Regresar a <Link to="/">Inicio</Link>
                  </p>
                </div>
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
