import React from "react";

function Contact(){
    return(
        <>
        <div className="home_bg contact_padding">
        <div className="container mx-auto mt-5 contact_bg rounded">
          <div className ="mb-3">
            <label for="exampleFormControlInput1" className ="form-label"><h3>Full Name</h3></label>
            <input type="text" className ="form-control" id="exampleFormControlInput1" placeholder="write your full name here" />
          </div>
          <div className ="mb-3">
            <label for="exampleFormControlInput1" className ="form-label"><h3>Phone Number</h3></label>
            <input type="number" className ="form-control" id="exampleFormControlInput1" placeholder="enter mobile number here" />
          </div>
          <div className ="mb-3">
            <label for="exampleFormControlInput1" className ="form-label"><h3>Email</h3></label>
            <input type="email" className ="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className ="mb-3">
            <label for="exampleFormControlInput1" className ="form-label"><h3>Address</h3></label>
            <input type="text" className ="form-control" id="exampleFormControlInput1" placeholder="enter address here" />
          </div>
          <div className ="mb-3">
            <label for="exampleFormControlTextarea1" className ="form-label"><h3>Message</h3></label>
            <textarea className ="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="enter message here"></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
          </div>
        </div>
        </div>
        </>
    )
}

export default Contact;