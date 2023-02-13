import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.comments && (
          <Row>
            <Col className="text-center" style={{ fontWeight: 700 }}>
              Comment
            </Col>
            <Col className="text-center" style={{ fontWeight: 700 }}>
              Value
            </Col>
          </Row>
        )}
      </>
    );
  }
}
export default CommentList;
