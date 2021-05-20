import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles.css";
import {removeGood} from './action.js';


class CartItem extends Component {


  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => { this.props.removeGoodFromCart(id) }}>❌</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeGoodFromCart: (id) => dispatch(removeGood(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);