import React, { useState } from "react";
import "./App.css";
import AppLogo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import SearchForm from './components/SearchForm'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid App">
      <SearchForm />

      <h4 className="resultText">Results: {count} mail(s)</h4>
      <hr/>
      <div className="resultArea">
        <img src={AppLogo} alt="logo" />
      </div>
    </div>
  );
};

export default App;
