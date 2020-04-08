import React from "react";
import { Dropdown } from "semantic-ui-react";
import GetCountries from "../countries";

const countries = GetCountries();

//console.log(countries);

const DropdownCountrySearchSelection = (props) => (
  <Dropdown
    placeholder={props.value}
    value={props.value}
    onChange={props.selectHandler}
    style={{ maxWidth: 200, minWidth: 200}}
    fluid
    search
    text={props.value}
    selection
    options={countries}
  />
);

export default DropdownCountrySearchSelection;
