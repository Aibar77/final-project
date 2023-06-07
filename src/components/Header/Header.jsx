import "./header.scss";
import logo from "../../assets/images/logo.png";
import insta from "../../assets/icons/Instagram.svg";
import cartImg from "../../assets/icons/Cart.svg";
import fire from "../../assets/icons/Fire.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
function Header({ searchValue, setSearchValue }) {
  const { cart } = useSelector((state) => state);
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Zira-logo" />
      <div className="header-inner">
        <div className="header-top">
          <div className="socials">
            <a
              href="https://www.instagram.com/justcodekz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="insta" />
            </a>
            <a
              href="https://www.instagram.com/justcodekz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="insta" />
            </a>
            <a
              href="https://www.instagram.com/justcodekz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="insta" />
            </a>
            <a
              href="https://www.instagram.com/justcodekz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="insta" />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/menu" className="link">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  О нас
                </Link>
              </li>
              {/* <li>Вход / Регистрация</li> */}
            </ul>
          </nav>
        </div>
        <div className="header-bottom">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="cart-block">
            <Link to={"/cart"} className="cartLink">
              <span>Корзина</span>
            </Link>
            <img src={cartImg} alt="Cart-icon" />
            {cart.length > 0 && (
              <span className="cart-items">{cart.length}</span>
            )}
          </div>
          <button>
            <img src={fire} alt="Fire-icon" />
            АКЦИИ
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
