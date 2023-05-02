import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Recipes.css";

class Recipes extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className="recipe-header">Welcome to our collection of recipes, featuring a wide range of appetizers, salads, soups, main courses, and desserts. Our vast selection is randomly generated to provide you with multiple ideas for an amazing date night. Our recipes are all made from scratch, carefully tested and proven to be an excellent way to have a memorable dinner at home. So come and explore our recipe collection to find the perfect combination for a great date night at home.</p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" className="recipe-image" />
            <Card.Body>
              <Card.Title>Link to the name of the recipe from back-end</Card.Title>
              <Card.Text>
                Link to back-end and have the recipe and instructions listed on it.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Recipes;