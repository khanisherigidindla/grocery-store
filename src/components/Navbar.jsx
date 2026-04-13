import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useSearchStore from "../store/useSearchStore";

const Navbar = () => {
  const { isLoggedIn, user, logout, initializeAuth, cartCount } =
    useAuthStore();

  const { search, setSearch } = useSearchStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <div className="navSection ">
      <div className="brandGroup">
        <Link to="/">
          <div className="title">Khanish Grocery & Electronics</div>
        </Link>
        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/all-products">All Products</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/fruit-products">Fruits</Link>
          <Link to="/vegetables">Vegetables</Link>
          <Link to="/food-grains">Groceries</Link>
          <Link to="/fashion">Fashion</Link>
          <Link to="/ai-hub">AI Hub</Link>
          {isLoggedIn && (
            <>
              <Link to="/admin-dashboard">Admin</Link>
              <Link to="/settings">Settings</Link>
            </>
          )}
        </nav>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search products, devices, brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rightNav">
        <Link to="/cart">
          <div className="cart" data-count={cartCount}>
            🛒 Cart
          </div>
        </Link>

        <div className="userName">
          {user ? (
            <>
              Hello, <span className="userHighlight">{user}</span>
            </>
          ) : (
            <span className="guestLabel">Guest</span>
          )}
        </div>

        <div className="auth-section">
          {isLoggedIn ? (
            <>
              <Link to="/settings">
                <button className="settingsButton">⚙️ Settings</button>
              </Link>
              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/send-otp">
              <button className="loginButton">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
