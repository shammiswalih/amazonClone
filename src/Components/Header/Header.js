import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header_container">
      <Link to="/">
        <img className="header_logo" src="/images/amazon_logo.png" />
      </Link>

      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
        <div className="header_nav_options">
          <span className="header_nav_option_lineOne">Hello Guest</span>
          <Link to="/login">
            <span className="header_nav_option_lineTwo">Sign In</span>
          </Link>
        </div>
        <div className="header_nav_options">
          <span className="header_nav_option_lineOne">Returns</span>
          <span className="header_nav_option_lineTwo">& Orders</span>
        </div>
        <div className="header_nav_options">
          <span className="header_nav_option_lineOne">Your</span>
          <span className="header_nav_option_lineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header_option_basket">
          <ShoppingBasketIcon />
          <span className="header_nav_option_lineTwo header_basket_count">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
