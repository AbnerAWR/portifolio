import { Row, Col, Container, Card, CardDeck } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "../Home/Home.scss";

function Home() {
    return (
        <>
            <Row>
                <Col sm={8} className="bg-dark">
                    <Header />
                </Col>
                <Col sm={4} className="bg-dark"></Col>
            </Row>
            <Container fluid>
                <Row>
                    <Col sm={8} className="bg-primary col-esquerda text-dark">
                        <div className="div-col-esquerda">
                            <p className="p-hello fw-bolder">
                                <span>OLÁ! EU SOU</span>
                                <h1 className="h1-name">
                                    Abner Wesley Ribeiro
                                </h1>
                                <p>
                                    <span className="span-description">
                                        Estudando de Análise e Desenvolvimento
                                        de Sistemas.
                                    </span>
                                </p>
                            </p>
                        </div>
                    </Col>
                    <Col sm={4} className="bg-dark coluna-direita p-5 ">
                        <img
                            src="https://i.ibb.co/Jj1Yqrt/62721361.jpg"
                            alt="photo"
                            className="img-photo"
                        ></img>
                        <h2>
                            <span className="span-name">
                                Abner Wesley Ribeiro
                            </span>
                        </h2>
                        <div>
                            <p className="p-description">
                                Técnico em Análise e Desenvolvimento de
                                Sistemas. <br />
                                Estiva Gerbi, SP
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>
                                    <a
                                        href="mailto:AbnerW_@hotmail.com"
                                        className="a-email"
                                    >
                                        AbnerW_@hotmail.com
                                    </a>
                                </span>
                            </p>
                            <p>
                                <span className="span-number">
                                    (19) 99912-5210{" "}
                                </span>
                            </p>
                            <a href="https://www.linkedin.com/in/abner-wesley-ribeiro-6731bb171/">
                                <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"></img>
                            </a>
                            <a href="">
                                <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"></img>
                            </a>
                            <a href="">
                                <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/01ab6619093f45388d66736ec22e5885.webp"></img>
                            </a>
                            <a href="">
                                <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></img>
                            </a>

                            <div>
                                <a
                                    download="Abner Wesley Ribeiro CV.pdf"
                                    href="data:application/octet-stream;base64,"
                                    className="a-download mx-auto m-5"
                                >
                                    Baixar CV
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="py-6 px-10 bg-light-2">
                        <div name="id-sobre" id="id-sobre">
                            <div className="text-secundary">
                                <span className="font-playfair">Sobre</span>
                                <br />
                                <span className="font-quicksand">
                                    Minha historia
                                </span>
                            </div>

                            <div>
                                <p className="font-quicksand">Oi.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="py-6 px-10 bg-light">
                        <div name="id-sobre" id="id-sobre">
                            <div className="text-secundary">
                                <span className="font-playfair">Formação</span>
                                <br />
                                <span className="font-quicksand">
                                    O que eu aprendi
                                </span>
                            </div>

                            <div className="pt-6">
                                <h6> 2016 - 2021 </h6>
                                <p className="font-quicksand">
                                    Universidade de Tecnologia do Estado de São
                                    Paulo <br />
                                    Ensino Superior de tecnologia em Análise e
                                    Desenvolvimento de Sistemas.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Container>
                    <Row>
                        <Col className="container-fluid mt-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://raw.githubusercontent.com/AbnerAWR/Semanaomnistack/master/mobile/src/assets/logo%403x.png"
                                    className="img-card p-3"
                                />
                                <Card.Body>
                                    <Card.Title>Be the hero</Card.Title>
                                    <Card.Text>
                                    As organizações não governamentais (ONGs) são entidades privadas da sociedade civil, sem fins lucrativos, 
                                    cujo propósito é defender e promover uma causa. 
                                    Essa causa pode ser virtualmente de qualquer tipo: direitos humanos, direitos animais,
                                    direitos indígenas, gênero, luta contra o racismo, meio ambiente, questões urbanas, imigrantes, entre muitos outros.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>

                                    <small className="text-muted">
                                        Acessar o site: <a href="https://github.com/AbnerAWR/Semanaomnistack" target="_blank"> Semana Omnistack </a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="container-fluid mt-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://raw.githubusercontent.com/AbnerAWR/NextLevelWeek04/main/moveit-next/Logo.png"
                                    className="img-card p-5"
                                />
                                <Card.Body>
                                    <Card.Title>Move it</Card.Title>
                                    <Card.Text>
                                    As organizações não governamentais (ONGs) são entidades privadas da sociedade civil, sem fins lucrativos, 
                                    cujo propósito é defender e promover uma causa. 
                                    Essa causa pode ser virtualmente de qualquer tipo: direitos humanos, direitos animais,
                                    direitos indígenas, gênero, luta contra o racismo, meio ambiente, questões urbanas, imigrantes, entre muitos outros.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                         Acessar o site: <a href="https://next-level-week04-abnerawr.vercel.app" target="_blank">Next Level Week 04</a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="container-fluid mt-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://raw.githubusercontent.com/AbnerAWR/dsdeliver-sds2/main/front-web/src/Logo.png"
                                    className="img-card p-5"
                                />
                                <Card.Body>
                                    <Card.Title>Ds Delivery</Card.Title>
                                    <Card.Text>
                                    As organizações não governamentais (ONGs) são entidades privadas da sociedade civil, sem fins lucrativos, 
                                    cujo propósito é defender e promover uma causa. 
                                    Essa causa pode ser virtualmente de qualquer tipo: direitos humanos, direitos animais,
                                    direitos indígenas, gênero, luta contra o racismo, meio ambiente, questões urbanas, imigrantes, entre muitos outros.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        Acessar o site: <a href="https://abner-wesley-ribeiro-sds2.netlify.app" target="_blank">Ds Delivery</a>

                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
