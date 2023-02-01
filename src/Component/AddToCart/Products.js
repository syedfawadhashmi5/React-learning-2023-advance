import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="productConatiner">
      <div className="products">
        <div className="container">
          <div className="row">
          {Data.map((item) => {
          item.quantity = 1;
          return (
            <div key={item.id} className="col-md-4 d-flex justify-content-center mt-4">
                          <div className="product">
              <img src={item.image} alt="cart" />
              <h4>{item.name}</h4>
              <p>Pkr. {item.price}</p>
              <button onClick={() => dispatch({type: 'ADD', payload: item})}>
                add to cart
              </button>
            </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;