"use client";

import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { Toaster } from "./components/ui/toaster";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Portfolio />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
