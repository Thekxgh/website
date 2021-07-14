import { Col, Container, Row } from "react-bootstrap"

export const LandingPage = () => {
    return ( 
    <Container fluid>
        <Row className="min-vh-100 align-items-center">
            <Col>
                <h1 className="display-1">Coming Soon</h1>
            </Col>
            <Col className="bg-primary min-vh-100">
                <h1>Heya</h1>
            </Col>
        </Row>
    </Container>
    );
}