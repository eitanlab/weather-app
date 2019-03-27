import React from 'react';
import './dayresume.css';

const DayResume = props => {
	
	const handleDayClick = (index) => {
		props.changeDaySelected(index);
	}
	console.log(props.daySelected);
	const daysArray = props.days.map((dayItem,index) => {
    	return (
	    		<div className={props.daySelected === index ? 'day-resume m-2 selected' : 'day-resume m-2'}  key={index} onClick={handleDayClick.bind(this, index)}>
					<p>{dayItem.name}</p>
					<img src={dayItem.imgSrc} />
					<p>{dayItem.minTemp} - {dayItem.maxTemp}</p>				
				</div>
		);
    });

    return (
        <div className='col-md-12'>
			{daysArray}
		</div>
	);		
}

export default DayResume;