import React from 'react';
import './App.css';
import {db} from './service/firebase'
import Paintings from "./paintings/Paintings.js";

class App extends React.Component {
    state = {
        paintings:null
    };

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
        // console.log( "renderr => "+this.state.paintings)
        return (
            <div className="app">
                <Header/>
                <Paintings data={this.state.paintings}/>
                <Footer/>
            </div>
        )
    }
}

function Header() {
    return (
        <header><h1>Paintings</h1></header>
    );
}

function Footer() {
    return (
        <footer>We Are The Best</footer>
    );
}

export default App;
