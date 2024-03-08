import "./Navbar.css";
import { Link } from "react-router-dom";
import myLogo from "../../assets/yo.png";
import NavSearch from "../NavSearch/NavSearch";

export default function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/" className="navLogo">
        <img src={myLogo} alt="" className="navImage" />
      </Link>
      <NavSearch />
      <div className="links">
        <Link to="/movies/popular" className="navLink">
          <span>Popular</span>
          <i title="Popular" className="fa-solid fa-fire"></i>
        </Link>
        <Link to="/movies/top_rated" className="navLink">
          <span>Top Rated</span>
          <i className="fa-solid fa-arrow-trend-up"></i>
        </Link>
        <Link to="/movies/upcoming" className="navLink">
          <span>Upcoming</span>
          <i className="fa-regular fa-calendar"></i>
        </Link>
        <Link to="/movies/now_playing" className="navLink">
          <span>Now Playing</span>
          <i className="fa-solid fa-tv"></i>
        </Link>
        {/* <Link to='/movies/2' className='navLink'>Favourites <i className="fa-solid fa-heart"></i></Link> */}
      </div>
      {/* <div className="login"> */}
      <Link to="/signin">
        <button id="loginButton">
          Sign In
          {/* <i className="fa-solid fa-sign-in"></i> */}
        </button>
      </Link>
      {/* </div> */}
    </nav>
  );
}
