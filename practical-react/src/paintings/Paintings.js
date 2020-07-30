import React from "react";
import './Paintings.scss';
import '.././painting-extra-details/Painting-extra-details.js'
import PaintingExtraDetails from "../painting-extra-details/Painting-extra-details";
import {string} from "prop-types";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Link} from "react-router-dom";

class Paintings extends React.Component {

    state = {
        search: "",
        flag: false,
        paintings_list:[],
        extra_details_paint: {
            artist: string,
            category: string,
            description: string,
            img: string,
            price: string,
            title: string,
        }
    };

    onChange = e => {
        this.setState({search: e.target.value})
    };

    render() {
        this.SearchByCategory();
        return (
            <div>
                <div>
                    <header className="header"><h2>List Of Paintings</h2></header>
                </div>
                <div>
                    <DropdownButton className="dropdown-button" id="search-button" title="Search By Category">
                        <Dropdown.Item href="#/action-1">Famous Paintings</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Animals</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Digital Art</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Landscape Paintings</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    {this.state.flag === true ?
                        <PaintingExtraDetails data={this.state.extra_details_paint}/> : this.List()}
                </div>
            </div>
        );
    }

    List() {
        if (this.props.data) {
            this.SearchByCategory(this.props.data);
            return (
                this.props.data.map((paint, i) => (
                        <div key={i} style={{display: "inline-block"}}>
                            {this.Card(paint)}
                        </div>
                    )
                )
            )
        } else {
            return (<p>DB Empty</p>)
        }
    }

    SearchByCategory(paints) {
        // const {search} = this.state;
        // const filterPaint = paints.filter();
        // if(search !== "" &&){
        //     return null
        // }
        // return (
        //
        // )
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
                    {/*<Router>*/}
                    {/*    <Link to={`/PaintDetail/${paint}`}>*/}
                            <Button className="btn btn-info"
                                    onClick={() => this.setState({flag: true, extra_details_paint: paint})}
                            >Extra Details
                            </Button>
                    {/*    </Link>*/}
                    {/*</Router>*/}

                    {/*<button className="btn btn-info"*/}
                    {/*        onClick={() => this.setState({flag: true, extra_details_paint: paint})}*/}
                    {/*>Extra Details*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }
}

export default Paintings;
