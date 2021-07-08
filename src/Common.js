import React from "react";

function Common(props){
    return(
        <>
            <div className="container-fluid mx-auto home_bg">
                <div className="row">
                <div className="col-lg-6 p-5">
                    <img className="img-fluid rounded" src={props.image1} alt="image1" />
                </div>
                <div className="col-lg-6 p-3 d-flex align-items-center">
                    <div className=" bg-secondary rounded p-2">
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                    </div>
                </div>
                    </div>
                <div className="row">
                <div className="col-lg-6 order-lg-2 p-5">
                    <img className="img-fluid rounded" src={props.image2} alt="image2" />     
                </div>              
                <div className="col-lg-6 order-lg-1 p-3 d-flex align-items-center">
                    <div className="bg-secondary rounded p-2">
                <h2>Vorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                </div>
                </div>
                </div>
            </div>          
        </>
    )
}

export default Common;