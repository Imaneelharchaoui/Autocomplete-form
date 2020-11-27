import React from "react";
import "../assets/autocomplete.css";

class Autocomplete extends React.Component {
  renderSelector = () => {
    const { citysApi } = this.props;
    if (!citysApi) return;
    const resultMapping = citysApi.map(city => {
      if (city.fake_city === undefined) {
        return (
          <li
            key={city.city_id}
            className={
              "city-line " +
              (citysApi.length === 1
                ? "selected-alone"
                : city === citysApi[0]
                ? "selected-top"
                : city === citysApi[citysApi.length - 1]
                ? "selected-bottom"
                : "")
            }
            onClick={() => {
              this.props.setClickedInput(city.unique_name);
            }}
          >
            <div>{city.unique_name}</div>
          </li>
        );
      } else {
        return null;
      }
    });
    return resultMapping;
  };

  render = () => {
    const { renderSelected } = this.props;
    return (
      <div className="forms-right">
        <div
          style={{ top: 73 }}
          className={
            "arrow-departure " +
            (renderSelected === false ? "arrow-arrival" : "")
          }
        />
        <div className="result-bloc">
          {renderSelected === false ? (
            <h3 className="title-result">Choisir une gare d’arrivée</h3>
          ) : (
            <h3 className="title-result">Choisir une gare départ </h3>
          )}
          <ul>{this.renderSelector()}</ul>

        </div>
      </div>
    );
  };
}

export default Autocomplete;
