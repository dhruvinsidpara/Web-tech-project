import { Component } from "react";
import { Menuitems } from "./Menuitems";
import { link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="NavabarItems">
        <h1 className="navbar-logo">Tourisum</h1>

        <ul className="nav-mune">
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sing Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
