import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  sendData = (value) => {
    this.props.parentCallback(value);
  };

  render() {
    return (
      <Card
        className="mb-3"
        style={{
          border: this.state.selected ? "2px solid green" : "1px solid grey",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={(e) => {
            this.setState({ selected: !this.state.selected });
            this.sendData(this.props.book.asin);
          }}
          value={this.props.book.asin}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
