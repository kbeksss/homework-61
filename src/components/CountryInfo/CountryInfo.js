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
            console.log(response.data);
            this.setState({country: response.data});
        }
    }

    render() {
        return this.state.country ? (
            <div className='CountryInfo'>
                <div className='Top-Info'>
                    <div className="Flag"><img width='200' height='auto' src={this.state.country.flag} alt="flag"/></div>
                    <div className="General">
                        <p>Name: {this.state.country.name}</p>
                        <p>Capital: {this.state.country.capital}</p>
                        <p>Population: {this.state.country.population}</p>
                    </div>
                </div>
                <div className="Middle-Info">
                    <div className="Region">
                        Region: {this.state.country.region}
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

                </div>
            </div>) : (<div className='PlaceHolder'>Выберите Страну</div>);

    }
}

export default CountryInfo;