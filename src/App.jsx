import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MainHeader from "./components/mainHeader/MainHeader";
import React, { useState, createContext, useContext } from "react";

// Create the OnlineContext context
const OnlineContext = createContext();

// Create the OpenContext context
const OpenContext = createContext();

function App() {
  // Define your state and methods here
  const [online, setOnline] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <OnlineContext.Provider value={{ online, setOnline }}>
      <OpenContext.Provider value={{ open, setOpen }}>
        <>
          <MainHeader />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </>
      </OpenContext.Provider>
    </OnlineContext.Provider>
  );
}

// Custom hook to access the OnlineContext context
function useOnline() {
  return useContext(OnlineContext);
}

// Custom hook to access the OpenContext context
function useOpen() {
  return useContext(OpenContext);
}

export { useOnline, useOpen, OnlineContext, OpenContext }; // Export the context and hook

export default App;
