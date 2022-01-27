import React from 'react';
import { Link, Outlet } from "react-router-dom";
import CountryDetails from "./CountryDetails"



const CountriesList = ({countries}) => {
  return (
    <div>
        <div class='maincontainer'>
        <ul class='mainlist'>
            {countries.map((country) => {
            return (
            <div>
            <div class="list-group">
                    <li className='list-group-item list-group-item-action' key={country.alpha3Code}>
                        <Link to={country.alpha3Code}>{country.name.common}
                        <img className='lilimg' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='{country.name.common}'></img></Link>
                    </li>
            </div>
            </div>
                )
            })}
        </ul>

        <div class='onecountry'>
        <Outlet />
        </div>


        </div>
    </div>
    )
};

export default CountriesList;
