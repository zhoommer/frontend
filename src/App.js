import LoginForm from './LoginForm';
import BookList from './BookList';
import Update from './Update';
import Navi from './Navi';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { Component } from 'react';
import { Routes, Route } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Navi />
          <Row>
            <Col xs="3">
              <Routes>
                <Route exact path="/" element={<LoginForm />} />
                <Route path='/books/update' element={<Update />} />
              </Routes>
            </Col>
            <Col xs="9">
              <BookList />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}