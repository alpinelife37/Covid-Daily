import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import GetCountries from "../countries";

const countries = GetCountries();

//console.log(countries);

const DropdownCountrySearchSelection = () => (
    <Dropdown
    placeholder='Country'
    fluid
    search
    selection
    options={countries}
  />
)

export default DropdownCountrySearchSelection;