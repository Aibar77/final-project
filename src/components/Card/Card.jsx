import "./Card.scss";
import { add, remove } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const Card = ({ item, wineSort }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(item));
  };
  const removeFromCart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div className="card">
      <img src={item.image} alt="img" />

      <h3>{item.wine}</h3>
      <p>{`${item.winery} - ${item.location}`}</p>
      <div className="card-bottom">
        <p className="cost">
          {" "}
          <span className="cost-500">500 $</span> /шт
        </p>
        {cart.some((p) => p.id === item.id) ? (
          <button onClick={removeFromCart}>Удалить из корзины</button>
        ) : (
          <button onClick={addToCart}>В корзину</button>
        )}
      </div>
    </div>
  );
};

export default Card;
