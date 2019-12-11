import React from 'react';
import './CountriesList.css';

import Country from "./Country/Country";

const CountriesList = (props) => {
    return (
        <div className='CountriesList'>
            <ul>
                {props.countries.map(country => (
                    <Country
                        key={country.alpha3Code}
                        name={country.name}
                        click={() => props.onClick(country.alpha3Code)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;