import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Component/Restaurant.js";
import Home from "./Home.js";
import RestaurantMenu from "./Component/RestaurantMenu.js";
import SearchFood from "./Component/SearchFood.js";
import RestHeader from "./Component/RestHeader.js";
import SecondaryHome from "./Component/Secondary.js";
import { store } from "./stored/stored.js";
import { Provider } from "react-redux";
import Checkout from "./Component/Checkout.js";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route element={<SecondaryHome></SecondaryHome>}>
            <Route
              path="/restaurant"
              element={<Restaurant></Restaurant>}
            ></Route>
            <Route
              path="/city/delhi/:id"
              element={<RestaurantMenu></RestaurantMenu>}
            ></Route>
            <Route
              path="/city/delhi/:id/search"
              element={<SearchFood></SearchFood>}
            ></Route>
          </Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
