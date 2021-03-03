import { Row, Col, Container, Card, CardDeck, CardGroup } from "react-bootstrap";
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

            <Row>
                <Col sm={8} className="bg-primary col-esquerda text-dark">
                    <Row>
                        <Col sm={1}></Col>

                        <Col sm={11}>
                            <div className="align-middle div-name pt-10 ps-3">
                                <p className="p-hello fw-bolder">
                                    <span>OLÁ! EU SOU</span>
                                    <h1 className="h1-name">
                                        Abner Wesley Ribeiro
                                    </h1>
                                    <p>
                                        <span className="span-description">
                                            Estudando de Análise e
                                            Desenvolvimento de Sistemas.
                                        </span>
                                    </p>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4} className="bg-dark coluna-direita p-5 ">
                    <img
                        src="https://i.ibb.co/Jj1Yqrt/62721361.jpg"
                        alt="photo"
                        className="img-photo"
                    ></img>
                    <h2>
                        <span className="span-name">Abner Wesley Ribeiro</span>
                    </h2>
                    <div>
                        <p className="p-description">
                            Técnico em Análise e Desenvolvimento de Sistemas.{" "}
                            <br />
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
                <Col sm={12} className="div-padding py-6 bg-light-2">
                    <div name="id-sobre" id="id-sobre">
                        <div className="text-secundary">
                            <span className="font-playfair text-light">
                                Sobre
                            </span>
                            <br />
                            <span className="font-quicksand text-light">
                                Minha historia
                            </span>
                        </div>

                        <div>
                            <p className="pt-5 font-quicksand text-light p-size">
                                Amante de tecnologia, desenvolvedor Front-end e
                                Back-end, com conhecimento diversificado em{" "}
                                <br />
                                JavaScript, HTML, CSS e alguns frameworks como
                                React, Vue e Angular.
                                <br />
                                Sempre buscando evolução atrás minha primeira
                                experiência profissional, disposto a me
                                apronfundar no mercado de trabalho.
                                <br />
                                Boa comunicação, facilidade no aprendizado e
                                grande interesse em ajudar com problemas, focado
                                em dar meu melhor e obter bons resultados.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="div-padding py-3 bg-light-2">
                    <div name="id-sobre" id="id-sobre">
                        <div className="text-secundary">
                            <span className="font-playfair text-light">
                                Formação e Cursos
                            </span>
                            <br />
                            <span className="font-quicksand text-light">
                                O que eu aprendi
                            </span>
                        </div>

                        <div className="pt-5 text-light">
                            <h6> 2016 - 2021 </h6>
                            <p className="font-quicksand text-light p-size">
                                Universidade de Tecnologia do Estado de São
                                Paulo <br />
                                Ensino Superior de tecnologia em Análise e
                                Desenvolvimento de Sistemas.
                            </p>
                            <h6> 2021 - 89 horas. </h6>
                            <p className="font-quicksand text-light p-size">
                                Curso Web Moderno Completo com JavaScript 2020 +
                                Projetos.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

                
            <Container>
                <Row className="py-4 ">
                        <div>
                            <div className="text-secundary">
                                <span className="font-playfair text-dark">
                                    Projetos
                                </span>
                                <br />
                                <span className="font-quicksand text-dark">
                                    Alguns projetos que desenvolvi ao longo do tempo como Front-end.
                                </span>
                            </div>
                        </div>
                    
                    <Col className="mt-4">
                   
                        <Card>
                            <div className="img-holder bg-light-2">
                            <Card.Img
                                variant="top"
                                src="https://raw.githubusercontent.com/AbnerAWR/Semanaomnistack/master/mobile/src/assets/logo%403x.png"
                                className="img-card p-2 bg-light-2"
                            />
                            </div>
                            <Card.Body>
                                <Card.Title>Be the hero</Card.Title>
                                <Card.Text>
                                    As organizações não governamentais (ONGs)
                                    são entidades privadas da sociedade civil,
                                    sem fins lucrativos, cujo propósito é
                                    defender e promover uma causa. Essa causa
                                    pode ser virtualmente de qualquer tipo:
                                    direitos humanos, direitos animais, direitos
                                    indígenas, gênero, luta contra o racismo,
                                    meio ambiente, questões urbanas, imigrantes,
                                    entre muitos outros.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Acessar o site:{" "}
                                    <a
                                        href="https://github.com/AbnerAWR/Semanaomnistack"
                                        target="_blank"
                                    >
                                        {" "}
                                        Semana Omnistack{" "}
                                    </a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className=" mt-4">
                        <Card >
                            <div className="img-holder bg-light-2">
                            <Card.Img
                                variant="top"
                                src="https://raw.githubusercontent.com/AbnerAWR/NextLevelWeek04/main/moveit-next/Logo.png"
                                className="img-card p-2 bg-light-2"
                            />
                            </div>
                            <Card.Body>
                                <Card.Title>Move it</Card.Title>
                                <Card.Text>
                                    As organizações não governamentais (ONGs)
                                    são entidades privadas da sociedade civil,
                                    sem fins lucrativos, cujo propósito é
                                    defender e promover uma causa. Essa causa
                                    pode ser virtualmente de qualquer tipo:
                                    direitos humanos, direitos animais, direitos
                                    indígenas, gênero, luta contra o racismo,
                                    meio ambiente, questões urbanas, imigrantes,
                                    entre muitos outros.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Acessar o site:{" "}
                                    <a
                                        href="https://next-level-week04-abnerawr.vercel.app"
                                        target="_blank"
                                    >
                                        Next Level Week 04
                                    </a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="fluid mt-4">
                        <Card>
                        <div className="img-holder bg-light-2">
                            <Card.Img
                                variant="top"
                                src="https://raw.githubusercontent.com/AbnerAWR/dsdeliver-sds2/main/front-web/src/Logo.png"
                                className="img-card p-2"
                            />
                        </div>
                            <Card.Body>
                                <Card.Title>Ds Delivery</Card.Title>
                                <Card.Text>
                                    As organizações não governamentais (ONGs)
                                    são entidades privadas da sociedade civil,
                                    sem fins lucrativos, cujo propósito é
                                    defender e promover uma causa. Essa causa
                                    pode ser virtualmente de qualquer tipo:
                                    direitos humanos, direitos animais, direitos
                                    indígenas, gênero, luta contra o racismo,
                                    meio ambiente, questões urbanas, imigrantes,
                                    entre muitos outros.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Acessar o site:{" "}
                                    <a
                                        href="https://abner-wesley-ribeiro-sds2.netlify.app"
                                        target="_blank"
                                    >
                                        Ds Delivery
                                    </a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}

export default Home;
