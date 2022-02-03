import { Row, Col, Card, CardGroup } from "reactstrap";

import ContactCard from "./ContactCard";

export default function ContactList({ users }) {
  console.log("users ", users);

  return (
    <CardGroup>
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} lg={4} md={6} sm={12}>
            <ContactCard user={user} />
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}
