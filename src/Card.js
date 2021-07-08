import React from "react";
import { NavLink } from "react-router-dom";

function Card(props){
    return(         
        <>              <div className="col-md-4 col-10 mx-auto ">
                        <div className ="card p-4 card_bg"> 
                          <img src={props.images} className ="card-img-top img-fluid card_img" alt={props.images} />
                        <div className ="card-body">
                            <h5 className ="card-title">{props.titles}</h5>
                            <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/home" className ="btn btn-primary">Buy Now</NavLink>
                        </div>
                        </div>
                        </div>
        </>
    )
}

export default Card;