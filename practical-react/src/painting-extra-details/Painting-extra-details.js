import React from "react";
import './Painting-extra-details.scss';

class PaintingExtraDetails extends React.Component {

    render() {
        return (this.Paint());
    }

    Paint() {
        return (
            <div style={{display: "inline-block"}}>
                <div className="paint">
                    <div>
                        <img className="img" src={this.props.data.img} alt=""/>
                    </div>

                    <div className="middle-card">
                        <h4>  <p className="text-color"><b>Name Of The Painting:</b></p></h4>
                        <h5>  <p className="text-color"> {this.props.data.title}</p></h5>
                        <h4> <p className="text-color"><b>Artist:</b></p></h4>
                        <h5> <p className="text-color">{this.props.data.artist}</p></h5>
                        <h4> <p className="text-color"><b>Description:</b></p></h4>
                        <h5> <p className="text-color">{this.props.data.description}</p></h5>
                        <br/>
                        <button className="btn btn-info btn-size">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaintingExtraDetails
