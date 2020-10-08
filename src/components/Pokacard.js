import React, { Component } from 'react'
import { Container } from 'reactstrap';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokacard extends Component {  

    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <Container>
                <div>Name: {this.props.name} </div>
            <img src={imgSrc} />
            <div>Type: {this.props.type} </div>
            <div>Experience: {this.props.exp} </div>
            </Container>            
        )
    }
}

export default Pokacard