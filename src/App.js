import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./scss/style.scss";
import HookCounter from "./components/HookCounter";
import OptionList from "./components/OptionList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <OptionList />
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
