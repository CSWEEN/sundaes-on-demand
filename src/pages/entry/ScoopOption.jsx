import { Col } from "react-bootstrap";

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      ></img>
    </Col>
  );
}
