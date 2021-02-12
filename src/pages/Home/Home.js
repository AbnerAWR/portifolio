import { Row, Col, Container } from 'react-bootstrap'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './Home.css'

function Home() {
    return (
        <>
        <Header />
        <Container fluid>
            
            <Row>
                <Col sm={8}>
                    <h1>Home</h1>
                </Col>

                <Col sm={4}>
                    <h2>
                        <span className="span-name">
                            Abner Wesley Ribeiro
                        </span>
                    </h2>

                    <div>
                        <p>
                            <span>
                                <a href="mailto:AbnerW_@hotmail.com">AbnerW_@hotmail.com</a>
                            </span>
                        </p>
                        <p>
                            <span>(19)99912-5210 </span>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Home