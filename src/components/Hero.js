import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BigLogo from "../img/logo3d.jpeg";


class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <img className="bigLogo" src={BigLogo} />
                        </Col>
                        <Col>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.blurb}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Hero;