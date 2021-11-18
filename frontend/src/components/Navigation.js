import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img src="../images/logo192.png" alt="" width="30" height="30" className="d-inline-block align-top"/>Post It!
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">New Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">Create User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
