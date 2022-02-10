import { Row, Col, Button } from "reactstrap";

import ContactCard from "./ContactCard";

export default function ContactList({ users, prevPage, nextPage }) {
  return (
    <>
      <Row className="g-4" lg={3} md={2} sm={1}>
        {users?.map((user) => (
          <Col key={user.id}>
            <ContactCard user={user} />
          </Col>
        ))}
      </Row>

      <Row className="my-5">
        <div className="d-flex justify-content-evenly">
          <Button color="light" outline onClick={prevPage}>
            {"< НАЗАД"}
          </Button>
          <Button color="light" outline onClick={nextPage}>
            {"ДАЛЕЕ >"}
          </Button>
        </div>
      </Row>
    </>
  );
}
