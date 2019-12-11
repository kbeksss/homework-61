import React, {Component} from 'react';
import axios from 'axios';
import './CountriesInfo.css';
import CountriesList from "../../components/CountriesList/CountriesList";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
class CountriesInfo extends Component {
    state = {
        countries: [],
        countryCode: null,
    };
    async componentDidMount() {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
        this.setState({countries: response.data});
    }
    countryCodeHandler = code => {
        this.setState({countryCode: code});
    };
    render() {
        return (
            <div className='CountriesInfo'>
                <CountriesList
                    countries={this.state.countries}
                    onClick={this.countryCodeHandler}
                />
                <CountryInfo code={this.state.countryCode}/>
            </div>
        );
    }
}

export default CountriesInfo;