import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

import fantasy from "./data/fantasy.json";
import { Component } from "react";

class App extends Component {
  state = {
    selected: null,
    selectedBook: null,
  };
  callbackFunction = (childData) => {
    this.setState({ selectedBook: childData });
  };

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={7}>
            <BookList books={fantasy} parentCallback={this.callbackFunction} />
          </Col>
          <Col>
            {this.state.selectedBook && (
              <CommentArea asin={this.state.selectedBook} />
            )}
          </Col>
        </Row>
        <MyFooter />
      </Container>
    );
  }
}

export default App;
