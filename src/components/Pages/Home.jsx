import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import { useMovieData } from "../../context/data-provider";
import { useState } from "react";
// import { Col } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  const [fetch, setFetch] = useState("");
  const { searchHandler, movieData } = useMovieData();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Fetch DFata :: ", fetch);
    searchHandler(fetch);
  };

  const onChangeHandler = (e) => {
    setFetch(e.target.value);
    console.log(e.target.value);
  };

  const onPosterClick = (e) => {
    searchHandler(e.target.alt)
  }
  
  if (movieData) {
    return <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="input"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={fetch}
                onChange={onChangeHandler}
              />
              <Button variant="outline-success" onClick={onSubmitHandler}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      <Row xs={1} md={4} className="g-4">
      {movieData.map((movie) => (
            // <h2>sadfa</h2>
        <Col key={movie.imdbID} >
          <Card style={{ width: "18rem", cursor: "pointer" }} >
            <Card.Img variant="top" onClick={onPosterClick} src={movie.Poster} style={{ height: "500px"}} alt={movie.Title}  />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        //   <h2>Data</h2>
      ))}
      </Row>
      </Container>
    </React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Movie App</Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="input"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={fetch}
                  onChange={onChangeHandler}
                />
                <Button variant="outline-success" onClick={onSubmitHandler}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>
            Please search the Desire Movie in Search Box
        </h1>
      </React.Fragment>
    );
  }
};

export default Home;
