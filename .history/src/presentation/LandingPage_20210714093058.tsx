import { Col, Container, Row } from "react-bootstrap"

export const LandingPage = () => {
    return ( 
    <Container fluid>
        <Row className="min-vh-100 align-items-center">
            <Col>
                <h1>Hello World</h1>
            </Col>
            <Col className="bg-primary">
            </Col>
        </Row>
    </Container>
    );
}