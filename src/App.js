import React, { Component, useRef, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

import About from "./components/About";
import Contact from "./components/Contact";
import Canvas from "./components/Canvas";


import "./App.css";
const App = () => {
  const productList = [
    {
      id: 1,
      cols: 2,
      title: "Twee vuile slipjes",
      description: "This is an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink: "http://www.eletteric.com/portfolio/envelope.jpg",
    },
    {
      id: 2,
      cols: 2,
      title: "Cock au vin",
      description: "This is also an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink:
        "http://www.eletteric.com/portfolio/energie-sparen-desktop.jpg",
    },

    {
      id: 3,
      cols: 1,
      title: "Meisje met verf",
      description: "This is also an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink:
        "http://www.eletteric.com/portfolio/bobex-newsletter-mobile.jpg",
    },

    {
      id: 4,
      cols: 1,
      title: "Meisje met verf",
      description: "This is also an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink:
        "http://www.eletteric.com/portfolio/GCS-businesscard-front.jpg",
    },
    {
      id: 5,
      cols: 1,
      title: "Meisje met verf",
      description: "This is also an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink:
        "http://www.eletteric.com/portfolio/Gondola-layout-02-small.jpg",
    },
    {
      id: 6,
      cols: 2,
      title: "Meisje met verf",
      description: "This is also an artwork",
      date: "01-03-2020",
      price: 200,
      imageLink:
        "http://www.eletteric.com/portfolio/ADDMOBILE_01_2014-prospect-02.jpg",
    },
  ];

  const pageStyle = {
    position: "absolute",
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.2,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 0.2,
    },
  };

  const pageTransition = {
    duration: 0.5,
  };
  const location = useLocation();



  return (
    <div className="App" style={{ position: "relative" }}>
      <Canvas/>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                pageVariants={pageVariants}
                pageTransition={pageTransition}
              />
            )}
          />
          <Route
            path="/products"
            render={(props) => (
              <Products
                {...props}
                pageVariants={pageVariants}
                pageTransition={pageTransition}
                productList={productList}
              />
            )}
          />

          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                pageVariants={pageVariants}
                pageTransition={pageTransition}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                pageVariants={pageVariants}
                pageTransition={pageTransition}
              />
            )}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
