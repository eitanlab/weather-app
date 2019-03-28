import React from 'react';
import './daydetail.css';
import ListGroup from 'react-bootstrap/ListGroup';

const DayDetail = props => {
	return (
		<div className='day-detail col-md-12 mt-5'>
			<ListGroup>
				<ListGroup.Item variant="primary"><p className="h4">{props.daySelected.name}</p></ListGroup.Item>
				<ListGroup.Item>Viento: {props.daySelected.viento}</ListGroup.Item>
				<ListGroup.Item>Nubosidad: {props.daySelected.nubosidad}</ListGroup.Item>
				<ListGroup.Item>Presión: {props.daySelected.presion}</ListGroup.Item>
				<ListGroup.Item>Humedad: {props.daySelected.humedad}</ListGroup.Item>
				<ListGroup.Item>Temperatura min: {props.daySelected.minTemp}</ListGroup.Item>
				<ListGroup.Item>Temperatura max: {props.daySelected.maxTemp}</ListGroup.Item>
			</ListGroup>
		</div>
	);
}

export default DayDetail;