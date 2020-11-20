import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <p className="navbar-brand">
                    Total Items <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
                </p>
            </nav>
        )
    }
}

export default Navbar;