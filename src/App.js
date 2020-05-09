import React, { Component, useRef, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";

import About from "./components/About";
import Contact from "./components/Contact";


import "./App.css";
const App = () => {
  const creations = [
    {
      id: 1,
      imageLink: "http://www.eletteric.com/portfolio/envelope.jpg",
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400
    },
    {
      id: 2,
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400,
      imageLink:
        "http://www.eletteric.com/portfolio/energie-sparen-desktop.jpg",
    },

    {
      id: 3,
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400,
      imageLink:
        "http://www.eletteric.com/portfolio/bobex-newsletter-mobile.jpg",
    },

    {
      id: 4,
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400,
      imageLink:
        "http://www.eletteric.com/portfolio/GCS-businesscard-front.jpg",
    },
    {
      id: 5,
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400,
      imageLink:
        "http://www.eletteric.com/portfolio/Gondola-layout-02-small.jpg",
    },
    {
      id: 6,
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 400,
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
            path="/work"
            render={(props) => (
              <Work
                {...props}
                pageVariants={pageVariants}
                pageTransition={pageTransition}
                creations={creations}
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
