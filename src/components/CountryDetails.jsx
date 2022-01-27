import React from 'react';
import { useParams, Link } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const params = useParams();
    const oneCountry = countries.find(
        (country) => country.alpha3Code === params.id
    )

  return (
<div>
        <div class='onecountry'>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common}></img>
        <h1>{oneCountry.name.common}</h1>
        <h2>Capital: {oneCountry.capital[0]}</h2>
        <h2>Area: {oneCountry.area}km²</h2>
        </div>
</div>
  ) ;
};

export default CountryDetails;
