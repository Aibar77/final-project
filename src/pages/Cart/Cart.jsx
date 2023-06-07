import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./Cart.scss";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalAmount(cart.length * 500);
  }, [cart]);
  return (
    <main className="cart-content">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="cartimg" />
            <p>{item.wine}</p>
            <p>{item.location}</p>
            <p>500 $</p>
            <button onClick={() => dispatch(remove(item.id))}>Удалить</button>
          </div>
        ))
      ) : (
        <div className="emptyCart">
          <h1>А корзина пустая!</h1>
          <Link to={"/menu"}>
            <button>Посмотреть Меню</button>
          </Link>
        </div>
      )}
      {totalAmount > 0 && <div className="total">Итого: {totalAmount}$</div>}
    </main>
  );
};
export default Cart;
