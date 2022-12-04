import React, {Component} from 'react';
import '../App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Books', price: '$500', name: 'Game of Thrones'},
  '2': {id: 2, category: 'Books', price: '$200', name: 'The Alchemist'},
  '3': {id: 3, category: 'Books', price: '$1000', name: 'Sherlock Holmes'},
  '4': {id: 4, category: 'Books', price: '$500', name: 'The Da Vinci Code'},
  '5': {id: 5, category: 'Football', price: '$1500', name: 'Nike'},
  '6': {id: 6, category: 'Football', price: '$100', name: 'Addidas'},
  '7': {id: 7, category: 'Furniture', price: '$2000', name: 'Table'},
  '8': {id: 8, category: 'Clothing', price: '$300', name: 'Dress'}
};


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    });

  }

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;