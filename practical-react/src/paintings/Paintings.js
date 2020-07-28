import React from "react";
import './Paintings.scss';
import '.././painting-extra-details/Painting-extra-details.js'
import PaintingExtraDetails from "../painting-extra-details/Painting-extra-details";
import {string} from "prop-types";

class Paintings extends React.Component {

    state = {
        flag: false,
        extra_details_paint: {
            artist: string,
            category: string,
            description: string,
            img: string,
            price: string,
            title: string,
        }
    };

    render() {
        return (
            <div>
                {this.state.flag === true ? <PaintingExtraDetails data={this.state.extra_details_paint}/> : this.List()}
            </div>
        );
    }

    List() {
        if (this.props.data) {
            // if(des.length > 20)
            //     this.prop.data.description = des.substr(0,20) + '...';
            // console.log(this.props.data);
            return (
                this.props.data.map((paint) => (
                        <div style={{display: "inline-block"}}>
                            {this.Card(paint)}
                        </div>
                    )
                )
            )
        } else {
            return (<p>DB Empty</p>)
        }
    }

    Card(paint) {
        let sub_description = paint.description;
        if (sub_description.length > 45) {
            sub_description = sub_description.substr(0, 45) + '...';
        }
        return (
            <div className="Card">
                <div className="card-body">
                    <h5 className="text">{paint.title}</h5>
                    <img className="card-img-top" src={paint.img} alt=""/>
                    <div className="text-below-image">
                        <p className="text"><b>Artist:</b> {paint.artist}</p>
                        <p className="text"><b>Description:</b> {sub_description}</p>
                        <br/>
                    </div>

                    <button className="btn btn-info"
                            onClick={() => this.setState({flag: true, extra_details_paint: paint})}
                    >Extra Details
                    </button>
                </div>
            </div>
        );
    }
}

export default Paintings;
