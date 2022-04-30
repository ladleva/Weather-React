import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_KEY = 'a0c16d1cacac8ef1d94187764eb7ee27';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        temp_max: undefined,
        temp_min: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            error: undefined
        });
    }

    render () {
        return (
            <div className="body">
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather {...this.state} />
            </div>
        );
    }
}

export default App;