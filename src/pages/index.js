import React, { Component } from "react";
import Hero from "../components/Hero";

class index extends Component {
    constructor(props) {
        super(props);

    }

    render(props) {
        return (
            <div>
                <Hero 
                    title="Blackhawk Oven Cleaning & Property Services"
                    blurb="Welcome to Blackhawk Oven Cleaning & Property Services"
                    />
            </div>
        )
    }
}

export default index;