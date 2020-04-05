import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import GetCountries from "../countries";

const countries = GetCountries();

//console.log(countries);

const DropdownCountrySearchSelection = (props) => (

  <Dropdown
    onChange={props.selectHandler}
    placeholder='Country'
    style={{ maxWidth: 200 }}
    fluid
    search
    selection
    options={countries}
  />
)

export default DropdownCountrySearchSelection;