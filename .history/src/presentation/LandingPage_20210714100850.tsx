import { Col, Container, Row } from "react-bootstrap"

export const LandingPage = () => {
    return ( 
    <Container fluid>
        <Row className="min-vh-100 align-items-center">
            <Col className="p-5">
                <h1 className="display-1 font-weight-bold">Coming Soon</h1>
                <h5 className="text-muted font-weight-light">Your office IT solutions at one place.</h5>
                <a className="btn btn-primary px-5 my-4" href="mailto:contact@thekxgh.com"> SEND E-MAIL </a>
            </Col>
            <Col className="side-img min-vh-100"></Col>
        </Row>
    </Container>
    );
}