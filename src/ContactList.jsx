import { Row, Col } from "reactstrap";

import ContactCard from "./ContactCard";

export default function ContactList({ users }) {
  console.log("users ", users);

  return (
    <Row className="g-4" lg={3} md={2} sm={1}>
      {users.map((user) => (
        <Col key={user.id}>
          <ContactCard user={user} />
        </Col>
      ))}
    </Row>
  );
}
