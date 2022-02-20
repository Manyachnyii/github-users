import Link from "next/link";
import Image from "next/image";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

import Avatar from "./Avatar";

export default function ContactCard({ user }) {
  return (
    <Card>
      <CardBody>
        <Row className="g-3 align-items-center text-center text-xl-start">
          <Col xl={5}>
            <Avatar url={user.avatar_url} />
          </Col>

          <Col xl={7}>
            <CardTitle tag="h5">{user.login}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Тип: {user.type}
            </CardSubtitle>
            <CardText>
              <Link href={`/users/${user.login}`}>
                <a>Профиль</a>
              </Link>
            </CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
