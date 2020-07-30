import React from "react";
import './Painting-extra-details.scss';

class PaintingExtraDetails extends React.Component {

    render() {
        return (this.Paint());
    }

    Paint() {
        return (
			<div className="paint">
				<img className="img" src={this.props.data.img} alt=""/>

				<div className="middle-card">
					<h2>{this.props.data.title}</h2>
					<h5>Artist:</h5>
					<p>{this.props.data.artist}</p>
					<h5>Description:</h5>
					<p>{this.props.data.description}</p>
					<br/>
					<button className="btn btn-info">Buy Now</button>
				</div>
			</div>
        )
    }
}

export default PaintingExtraDetails
