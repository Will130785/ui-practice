import React, { Component } from "react";
import Hero from "../components/Hero";

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>
                <Hero
                    title="Contact us"
                    blurb="Get in contact with us today"    
                />
            </div>
        )
    }
}

export default Contact;