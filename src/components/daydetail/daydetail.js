import React from 'react';
import './daydetail.css';
import ListGroup from 'react-bootstrap/ListGroup';

const DayDetail = props => {
	return (
		<div className='day-detail col-md-12 mt-5'>
			<ListGroup>
				<ListGroup.Item>Viento: {props.viento}</ListGroup.Item>
				<ListGroup.Item>Nubosidad: {props.nubosidad}</ListGroup.Item>
				<ListGroup.Item>Presión: {props.presion}</ListGroup.Item>
				<ListGroup.Item>Humedad: {props.humedad}</ListGroup.Item>
				<ListGroup.Item>Temperatura min: {props.minTemp}</ListGroup.Item>
				<ListGroup.Item>Temperatura max: {props.maxTemp}</ListGroup.Item>
			</ListGroup>
		</div>
	);
}

export default DayDetail;