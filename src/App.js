import { Link, Route, Router, Routes, Switch } from "react-router-dom";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import React, { useEffect } from "react";
import NotFound from "./components/NotFound";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";
import Header from "./components/Header";
import ProductFeature from "./features/products";
function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header />
      <p>
        {" "}
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        {" "}
        <Link to="/albums">Albums</Link>
      </p>
      <Switch>
        <Route exact path="/" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route exact path="/albums" component={AlbumFeature} />
        <Route path={"/products"} component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
