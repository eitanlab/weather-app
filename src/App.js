import React from 'react';
import './App.css';
import DayResume from './components/dayresume/dayresume';
import DayDetail from './components/daydetail/daydetail';
import OpenWeatherMap from './util/openweathermap';
//import { days } from './dias.json';

//const cityId = '3435910';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: [
                {
                    date: '',
                   iconId: '',
                   windSpeed: '',
                   description: '',
                   clouds: '',
                   pressure: '',
                   humidity: '',
                   tempMin: '',
                   tempMax: ''
                }
            ],
            daySelected: 0
        }

        this.changeDaySelected = this.changeDaySelected.bind(this);
    }
    
    changeDaySelected(index) {
        console.log(index);
        this.setState({ daySelected: index })
    }

    componentWillMount() {
        OpenWeatherMap.FetchByCityId('3435910').then( dayList => {
            //console.log('A: ' + dayList[0].date);
            this.setState({days: dayList});

            //console.log('B: ' + this.state.days[this.state.daySelected]);
            //console.log('C: ' + dayList[this.state.daySelected]);
        });
        
    }

    render() {
        return (
            <div className="App container p-3">
                <div className='row'>
                    <DayResume days={this.state.days} daySelected={this.state.daySelected} changeDaySelected={this.changeDaySelected} />
                </div>
                <div className='row'>
                    <DayDetail daySelected={this.state.days[this.state.daySelected]} />
                </div>
            </div>
        );
    }
}

export default App;
