import { Col, Container, Row } from "react-bootstrap"

export const LandingPage = () => {
    return ( 
    <Container fluid>
        <Row className="min-vh-100 align-items-center">
            <Col className="p-5">
                <h1 className="display-1">Coming Soon</h1>
                <h5>Your office IT solutions at one place.</h5>
            </Col>
            <Col className="bg-primary min-vh-100">
                <h1>Heya</h1>
            </Col>
        </Row>
    </Container>
    );
}