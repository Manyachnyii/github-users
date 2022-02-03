import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

export default function ContactCard({ user }) {
  return (
    <Card>
      <CardBody>
        <>
          <Row className="gy-3 align-items-center text-center text-xl-start">
            <Col xl={5}>
              <Image
                className="rounded-circle"
                src={user.avatar_url}
                alt="Avatar"
                width={128}
                height={128}
                layout="responsive"
              />
            </Col>

            <Col xl={7}>
              <CardTitle tag="h5">{user.login}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Тип: {user.type}
              </CardSubtitle>
              <CardText>
                <Link href={user.html_url}>
                  <a>Профиль</a>
                </Link>
              </CardText>
            </Col>
          </Row>
        </>
      </CardBody>
    </Card>
  );
}
