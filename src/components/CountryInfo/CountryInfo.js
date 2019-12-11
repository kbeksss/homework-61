import React, {Component} from 'react';
import axios from 'axios';
import './CountryInfo.css';


class CountryInfo extends Component {
    state = {
        country: null,
    };
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.code && this.props.code !== prevProps.code){
            const response = await axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.code);
            const borders = [];
            for (const code of response.data.borders) {
                const response = await axios.get('https://restcountries.eu/rest/v2/alpha/' + code);
                borders.push(response.data.name);
            }
            const country = {...response.data, borders};
            this.setState({country});
        }
    }

    render() {
        return this.state.country ? (
            <div className='CountryInfo'>
                <div className='Top-Info'>
                    <div className="Flag"><img width='200' height='auto' src={this.state.country.flag} alt="flag"/></div>
                    <div className="General">
                        <p>Name: <b>{this.state.country.name}</b></p>
                        <p>Capital: <b>{this.state.country.capital}</b></p>
                        <p>Population: {this.state.country.population}</p>
                    </div>
                </div>
                <div className="Middle-Info">
                    <div className="Region">
                        Region:
                        <p>{this.state.country.region}</p>
                        Subregion:
                        <p>{this.state.country.subregion}</p>
                    </div>
                    <div className="Borders">
                        Bordering with:
                        <ul>
                            {this.state.country.borders.map(name => {
                                return <li key={name}> {name}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='Bottom-Info'>
                    <span>code: {this.state.country.currencies[0].code}</span>
                    <span>name: {this.state.country.currencies[0].name}</span>
                    <span>symbol: {this.state.country.currencies[0].symbol}</span>
                </div>
            </div>) : (<div className='PlaceHolder'>Выберите Страну</div>);

    }
}

export default CountryInfo;