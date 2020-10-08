import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/charActions';
import Pokacard from './Pokacard';

class Pokedex extends Component {
    componentDidMount() {
        this.props.getItems();
    }   
      
    render() {
        const { items } = this.props.item;
        return(
            <div className="Pokedex-pokemons">
                            
                        {items.map(({id, name, type, base_experience}) => (
                            
                            <Pokacard name={name} id={id} type={type} exp={base_experience} />
                        ))}</div>  
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {getItems})(Pokedex);