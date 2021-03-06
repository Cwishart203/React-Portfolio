import React from "react"
import "./contact.css"

function Contact() {

    // const form = useRef();
      
    // function sendEmail(e) {
    //     e.preventDefault();
        
    //     emailjs.sendForm('service_rqteoq9', 'contact_form', e.target, 'user_MNrnPjNdn9mL65mGVhXXX')
    //     .then(res=>{
    //         console.log(res);
    //     }).catch(err=> console.log(err));
    //     e.target.reset()
    // }

    return (
        <div>
            <div className="contact">
                <h2>Contact Me Below</h2>
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <label for="name">Name</label>
                                <br />
                                <input
                                    type="name"
                                    id="name"
                                    name="user_name"
                                    class="form-control"
                                ></input> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label for="email">Email</label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                class="form-control"
                            ></input>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <label for="message">Type your message here</label>
                            <br />
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                class="form-control"
                            ></textarea>
                        </div>
                        
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact