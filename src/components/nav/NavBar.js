import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="owners">Owners</Link>
                    </li>
                </ul>
                <section className="section">
                    <form className="form" id="search">
                        <input
                        type="text"
                        className="input"
                        id="addInput"
                        placeholder="Search"
                        />
                        <button className="button is-info" onClick={this.addItem}>
                        Search
                        </button>
                    </form>
                </section>
            </nav>
        )
    }
}

export default NavBar