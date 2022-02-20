import Link from "next/link";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

import Avatar from "./Avatar";

export default function UserInfo({ user }) {
  return (
    <>
      <Card>
        <CardBody className="text-center">
          <Avatar url={user.avatar_url} />
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {user.location}
          </CardSubtitle>
          <CardText>
            {!!user.html_url && <Link href={user.html_url}>GitHub</Link>}
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}
