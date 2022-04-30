import React from "react";

class Form extends React.Component {
    render () {
        return (
            <form className="form" onSubmit={this.props.weatherMethod}>
                <input className="input" type="text" name="city" placeholder="Your city" />
                <button className="button">Check the weather</button>
            </form>
        );
    }
};

export default Form;