import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./scss/style.scss";
import HookCounter from "./components/HookCounter";
import OptionList from "./components/OptionList";
import "bootstrap/dist/css/bootstrap.min.css";
import OptionListWithHooks from './components/OptionListWithHooks';

function App() {
  return (
    <div className="App">
      <OptionListWithHooks />
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
