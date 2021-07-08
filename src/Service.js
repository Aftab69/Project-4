import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"

function Service(){
    return(
        <>
                    <div className="d-flex justify-content-center p-4 home_bg">
                      <h5>~ <u>Here is a list of our products</u> ~</h5>
                    </div>
                    <div className="container-fluid">
                    <div className="row gy-3 home_bg">
                    {
                           Sdata.map((val,ind)=>{
                               return(
                                   <Card key={ind} images={val.images} titles={val.titles} />
                               )
                           })
                       }
                    </div>
                    </div>


        </>
    )
}

export default Service;