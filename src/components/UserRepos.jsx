import moment from "moment";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export default function UserRepos({ repos }) {
  return (
    <Row className="g-2" md={2} sm={1}>
      {repos?.map((repo) => (
        <Col key={repo.node_id}>
          <Card className="h-100">
            <CardBody className="d-flex flex-column">
              <CardTitle>
                {!!repo.html_url ? (
                  <Link href={repo.html_url}>{repo.name}</Link>
                ) : (
                  repo.name
                )}
              </CardTitle>
              <CardSubtitle>{repo.description}</CardSubtitle>
              <CardText className="d-flex flex-column mt-auto">
                <span className="lang">
                  {repo.language && `Lang: ${repo.language}`}
                </span>
                <span className="updated">{`Updated: ${moment(
                  repo.updated_at
                ).format("DD.MM.YYYY, HH:mm:ss")}`}</span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}

      <style jsx>{`
        .lang {
          color: red;
        }
        .updated {
          color: blue;
        }
      `}</style>
    </Row>
  );
}
