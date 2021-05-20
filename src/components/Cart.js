import React, { Component } from "react";
import "../styles.css";
import store from '../redux/store';
import CartItem from './CartItem';


class Cart extends Component {
  state = {
    cartGoods: []
  }

  componentDidMount(){
    store.subscribe(() => {                            // навешиваю слушатель событий на странице через componentDidMount
      const globalState = store.getState();             // эту функцию нужно выполнять каждый раз при измененеии store
      this.setState({ cartGoods: globalState.cart })    //  записывает globalState.cart в cartGoods,  т.е. в state текущего компонента
    })
  }

  getTotal() {
    const { cartGoods } = this.state;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.state.cartGoods.length ?
          <ul className="cart__list">
            {this.state.cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }
        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

export default Cart;