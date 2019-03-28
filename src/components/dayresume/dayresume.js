import React from 'react';
import './dayresume.css';
import Badge from 'react-bootstrap/Badge';

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
					<div className="badges" >
						<Badge variant="secondary">Min {dayItem.minTemp}°</Badge>
						<Badge variant="warning">Max {dayItem.maxTemp}°</Badge>
					</div>				
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