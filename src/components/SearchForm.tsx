import React, { useState } from "react";
import "./SearchForm.css";
import IconSearch from "../assets/icon_search.svg";
import IconCalendar from "../assets/icon_calender.svg";
import "bootstrap/dist/css/bootstrap.css";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const SearchForm = () => {
  const regex = RegExp(/^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/);

  const [input, setInput] = useState("2020/1/1 - 2020/1/1");

  const onFormSubmit = () => {};

  const [hasError, setHasError] = useState(false) ;

  const onInputChanged = (event: any) => {
    const dates = event.target.value.split(" - ");
    if (!regex.test(dates[0]) || !regex.test(dates[1])) {
      setHasError(true);
      console.log('error')
    }else {
      setHasError(false);
    }
    setInput(event.target.value)
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <div className="input-group inputGroup">
          <img className="iconInside" src={IconCalendar} alt="calendar" />
          <input
            id="dateInput"
            type="daterange"
            value={input}
            className="form-control rounded-right"
            required
            onChange={onInputChanged}
          />
          <button className="btn btn-light" type="submit">
            {/* <input id="mySubmit" type="submit" value="     " className="hidden" /> */}
            <img className="icon" src={IconSearch} alt="search" />
            {/* <i className="icon-user icon-white"></i> */}
          </button>
        </div>
      </div>
      {hasError && (
                    <div className="alert alert-danger formError">
                    Please enter in proper format yyyy/mm/dd - yyyy/mm/dd
                  </div>
      
          )}
    </form>
  );
};

export default SearchForm;
