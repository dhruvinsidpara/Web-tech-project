import { Component } from "react";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state ={ clicked : false};
  handaleclick =() =>{
    this.setState({clicked: !this.state.clicked})

  }
  
  render() {
    return (
      <nav className="NavabarItems">
        <h1 className="navbar-logo">Tourism</h1>

        <div className="menu-icons" onClick={this.handaleclick}>
          <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? 
        "nav-menu.active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.Url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>

              </li>
            );
          })}
          <button>Sing Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
