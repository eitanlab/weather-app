import React from 'react';
import './dayresume.css';
import Badge from 'react-bootstrap/Badge';

const DayResume = props => {
	
	const handleDayClick = (index) => {
		props.changeDaySelected(index);
	}
	//console.log(props.daySelected);
	//console.log('props.days tiene' + props.days)
	const daysArray = props.days.map((dayItem,index) => {
   		//console.log(dayItem);

    	return (
	    		<div className={props.daySelected === index ? 'day-resume m-2 selected' : 'day-resume m-2'}  key={index} onClick={handleDayClick.bind(this, index)}>
					<p>{dayItem.date}</p>
					<img alt={dayItem.description} src={dayItem.iconId} />
					<div className="badges" >
						<Badge variant="secondary">Min {dayItem.tempMin}°</Badge>
						<Badge variant="warning">Max {dayItem.tempMax}°</Badge>
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