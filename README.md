# Country Data API

A simple API that provides country, state, and city data. You can retrieve information about countries, their states, cities, and related details using this library.

## Features

- Get a list of all countries.
- Get country names.
- Get country details by country name.
- Get cities by state names.
- Get states by country name.

## Installation

To install the package, run the following command:

```bash
npm install country-data-api

Get All Countries
This method returns a list of all countries.


import { getAllCountries } from 'country-data-api';

const countries = getAllCountries();
console.log(countries);

=========================================================

Get All Country Names
This method returns an array of country names.

import { getAllCountryNames } from 'country-data-api';

const countryNames = getAllCountryNames();
console.log(countryNames);

=========================================================

Get Country Details by Country Name
This method returns the details of a country based on its name. If the country is found, it returns the details; otherwise, it returns undefined.

import { getCountryDetailsByName } from 'country-data-api';

const countryDetails = getCountryDetailsByName('Bangladesh');
console.log(countryDetails);

=========================================================

 Get Cities by State Names
 This method allows you to get the list of cities by state names. You can pass a single state name or an array of state names.

 import { getCitiesByStateNames } from 'country-data-api';

// Get cities by a single state name
const citiesInState = getCitiesByStateNames('Dhaka');
console.log(citiesInState);

// Get cities by an array of state names
const citiesInStates = getCitiesByStateNames(['Dhaka', 'Chittagong']);
console.log(citiesInStates);


=========================================================

Get States by Country Name

import { getStatesByCountryName } from 'country-data-api';

const statesInCountry = getStatesByCountryName('Bangladesh');
console.log(statesInCountry);


```
# redx-delivery-areas-npm
