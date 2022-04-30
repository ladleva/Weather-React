import React from "react";

class Weather extends React.Component {
    render () {
        return (
            <div>
                { this.props.city &&
                <div>
                  <p>Your location: {this.props.city}, {this.props.country}</p>
                  <p>Temperature: {this.props.temp}</p>
                  <p>The maximum temperature: {this.props.temp_max}</p>
                  <p>The minimum temperature: {this.props.temp_min}</p>
                </div>
                }
            </div>
        );
    }
};

export default Weather;