import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { time: new Date() }; // initialise the state
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

 //   componentWillUnmount() { // delete the interval just before component is removed
   //     clearInterval(this.update);
    //}

    render() {
        const { time } = this.state; // retrieve the time from state

        return (<div className="Clock">
            <h3 id="time">
                {time.toLocaleTimeString()}
            </h3>
        </div>);
    }
}


export default App;
