import React from 'react';
import './daydetail.css';
import ListGroup from 'react-bootstrap/ListGroup';

const DayDetail = props => {
	return (
		<div className='day-detail col-md-12 mt-5'>
			<ListGroup>
				<ListGroup.Item variant="primary"><p className="h4">{props.daySelected.date}</p></ListGroup.Item>
				<ListGroup.Item>Viento: {props.daySelected.windSpeed}</ListGroup.Item>
				<ListGroup.Item>Humedad: {props.daySelected.humidity}</ListGroup.Item>
				<ListGroup.Item>Temperatura min: {props.daySelected.tempMin}</ListGroup.Item>
				<ListGroup.Item>Temperatura max: {props.daySelected.tempMax}</ListGroup.Item>
			</ListGroup>
		</div>
	);
}

export default DayDetail;