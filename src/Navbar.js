import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
    <>
        <section>
            <nav className ="navbar navbar-expand-lg navbar-light nav_bg">
                <div className ="container-fluid">
                    <NavLink className ="navbar-brand logo_size" to="/home"><h2>McBlunt Watches</h2></NavLink>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className ="nav-item">
                                <NavLink className ="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className ="nav-item">
                                <NavLink className ="nav-link" to="/service">Service</NavLink>
                            </li>
                            <li className ="nav-item">
                                <NavLink className ="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className ="nav-item">
                               <NavLink className ="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </>
    )
}

export default Navbar;