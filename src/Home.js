import React from "react";
import Common from "./Common";
import image1 from "../src/images/image1.jpg"
import image2 from "../src/images/image2.jpg"

function Home(){
    return(
        <>
            <Common image1={image1} image2={image2} />        
        </>
    )
}

export default Home;