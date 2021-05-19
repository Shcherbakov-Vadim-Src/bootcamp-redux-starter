import React, { Component } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { addGoodAction } from '../components/action';
import store from '../redux/store';

class GoodsItem extends Component {

  // addCardHandler = (id) => {    // по обработчику событий создаем action
  //   const action = {
  //     type: 'ADD_GOOD_TO_CART',   // что должен сделать пишется в type
  //     payload: {
  //       id: id  // или просто { id }     (держит данные, которые нужно добавить в глобальный state, в объекте payload)
  //     }
  //   }
  //   store.dispatch(action);  // отправляет action только он и попадает в reducer  (Чтобы reducer изменил данные в store, нужно вызвать метод dispatch и передать в него соответствующий action)
  // }

  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={() => { this.props.addGoodToCartProp(id) }}>Add to cart</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGoodToCartProp: (id) => dispatch(addGoodAction(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsItem);