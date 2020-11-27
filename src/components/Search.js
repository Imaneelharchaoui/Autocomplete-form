import React from "react";
import "../assets/search.css";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Calender from "./Calender";

class Search extends React.Component {
  render = () => {
    const {
      renderSelected,
      inputDeparture,
      autoCompleteApiUrl,
      inputArrival
    } = this.props;

    return (
      <div className="form-left">
        <form autoComplete="on">
          <h2>Quel est votre trajet ?</h2>
          <div className="real-input">
              <input
                   type="text"
    autoComplete="off"
    spellCheck="false"
    placeholder="Saisir la  gare de départ"
    required
    className={
      "input-style input-style-top " +
      (renderSelected === true ? "input-select" : "")
    }
    name="inputDeparture"
    value={inputDeparture}
    onChange={async e => {
      this.props.handleInputChange(e);
      const response = await this.props.getApi(
          autoCompleteApiUrl,
          e.target.value
      );
      this.props.handleApi(response);
    }}
    onClick={() => {
      this.props.selectedDeparture();
    }}
    />

    <input
    type="text"
    autoComplete="off"
    spellCheck="false"
    placeholder="Saisir votre gare d'arrivée..."
    required
    className={
        "input-style input-style-bottom arrival-logo " +
        (renderSelected === false ? "input-select" : "")
    }
    name="inputArrival"
    value={inputArrival}
    onChange={async e => {
        this.props.handleInputChange(e);
        const response = await this.props.getApi(
            autoCompleteApiUrl,
            e.target.value
        );
        this.props.handleApi(response);
    }}
    onClick={() => {
        this.props.selectedArrival();
    }}
    />
          </div>
          <div className="divided"></div>

            <Calender/><span> <Calender/></span>


          <div className="divided"></div>



          <div className="divided"></div>
          <div className="bottom-form-left" style={{ background: "#11134a" }}>
              <button className="button-bottom-form">rechercher</button>
          </div>
        </form>
      </div>
    );
  };
}

export default Search;
