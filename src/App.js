import React from 'react';
import './App.css';
import DayResume from './components/dayresume/dayresume';
import DayDetail from './components/daydetail/daydetail';
import { days } from './dias.json';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days,
            daySelected: 0
        }

        this.changeDaySelected = this.changeDaySelected.bind(this);
    }
    
    changeDaySelected(index) {
        console.log(index);
        this.setState({ daySelected: index })
    }

    render() {
        return (
            <div className="App container p-3 m-3">
                <div className='row'>
                    <DayResume days={this.state.days} daySelected={this.state.daySelected} changeDaySelected={this.changeDaySelected} />
                </div>
                <div className='row'>
                    <DayDetail viento={this.state.days[this.state.daySelected].viento} nubosidad={this.state.days[this.state.daySelected].nubosidad} presion={this.state.days[this.state.daySelected].presion} humedad={this.state.days[this.state.daySelected].humedad} minTemp={this.state.days[this.state.daySelected].minTemp} maxTemp={this.state.days[this.state.daySelected].maxTemp} />
                </div>
            </div>
        );
    }
}

export default App;
