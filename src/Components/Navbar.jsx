import { useState, useContext } from 'react';
import './Navbar.css';
import { MdArrowOutward, MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CoinContext } from '../Pages/Context.Coins/CoinContext';

const Navbar = () => {
  const { setcurrency } = useContext(CoinContext); 
  const [isMenuActive, setIsMenuActive] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setcurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setcurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setcurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setcurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={`Navbar ${isMenuActive ? 'active' : ''}`}>
      <Link to="/" className='Link'>
        <h1 className='Logo'>Cryptoplace</h1>
      </Link>
      <ul>
        <Link to="/" className='Link'><li>Home</li></Link>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <MdArrowOutward /></button>
      </div>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <MdMenu />
      </div>
    </div>
  );
};

export default Navbar;
