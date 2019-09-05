import React, { Component } from 'react';
import './Products.css';
import Favorite from '../components/Favorite/Favorite';
import { connect } from 'react-redux';

const favorites = (props) => {
    return (
        <ul className="products-list">
            {props.products.map(prod => (
                <Favorite
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                />
            ))}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products.filter(p => p.isFavorite)
    }
}

export default connect(mapStateToProps)(favorites);