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

                    <div class="middle-card">
                        <p className="text-color"><h4><b>Name Of The Painting:</b></h4> <h5>{this.props.data.title}</h5></p>
                        <p className="text-color"><h4><b>Artist:</b></h4> <h5>{this.props.data.artist}</h5></p>
                        <p className="text-color"><h4><b>Description:</b></h4> <h5>{this.props.data.description}</h5></p>
                        <br/>
                        <button className="btn btn-info">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaintingExtraDetails
