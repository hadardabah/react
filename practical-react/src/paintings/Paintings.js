import React from "react";
import './Paintings.scss';
import '.././painting-extra-details/Painting-extra-details.js'
// import PaintingExtraDetails from "../painting-extra-details/Painting-extra-details";
import {string} from "prop-types";
import { Link } from "react-router-dom";
import {db} from '../service/firebase'; 

class Paintings extends React.Component {

    constructor(){
        super();
        this.state = {
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
}
    componentDidMount() {
        db.collection('paintings')
            .get()
            .then(snapshot => {
                const paintingsList = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    // console.log(data);
                    if (data)
                        paintingsList.push(data)
                });
                this.setState({paintings: paintingsList});
                console.log(this.state.paintings);
                // window.location.reload();
                // this.render();
                // console.log(paintings);
            }).catch(err => console.log("error => " + err))
    }



    render() {
        return (
            this.List()
          //this.state.flag === true ? <PaintingExtraDetails data={this.state.extra_details_paint}/> : this.List()
        );
    }

    List() {
        // console.log("================");
        if (this.state.paintings) {
            // if(des.length > 20)
            //     this.prop.data.description = des.substr(0,20) + '...';
             console.log("================");
            return (
				<div className="gallery">
					{this.state.paintings.map((paint) => (
                        this.Card(paint)
                    )
                )}
				</div>
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
				<div className="top">
					<h4>{paint.title}</h4>
					<img className="card-img-top" src={paint.img} alt=""/>
				</div>
				<div className="text-below-image">
					<p className="text"><b>Artist:</b> {paint.artist}</p>
					<p className="text"><b>Description:</b> {sub_description}</p>
					<br/>
				</div>

                <Link to={{
                    pathname:`/PaintingExtraDetails/${paint.title}`,
                    state: paint }}>
                    <button className="btn btn-info">Details</button>
                </Link>
            </div>
        );
    }
}

export default Paintings;
