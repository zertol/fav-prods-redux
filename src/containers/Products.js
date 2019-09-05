import React, { Component } from 'react';
import './Products.css';
import Product from '../components/Product/Product';
import * as actions from '../store/actions/products';
import { connect } from 'react-redux';


class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <ul className="products-list">
                {
                    this.props.products.map((prod, index) => (
                        <Product
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            description={prod.description}
                            isFav={prod.isFavorite}
                            toggleFavHandler={() => this.props.toggleFavHandler(prod.id, index, prod.isFavorite)}
                        />
                    ))}
            </ul>
        );
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = disptach => {
    return {
        fetchProducts: () => disptach(actions.FetchProducts()),
        toggleFavHandler: (id, index, isFav) => disptach(actions.ToggleFav(id, index, isFav))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);