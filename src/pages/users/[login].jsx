import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Col, Row } from "reactstrap";

import MainLayout from "../../layouts/MainLayout";
import UserInfo from "../../components/UserInfo";

import getUserInfo from "../../services/getUserInfo";
import getUserRepos from "../../services/getUserRepos";

import sortDescUpdatesRepos from "../../utils/sortDescUpdatesRepos";

export default function UserPage() {
  const router = useRouter();
  const { login } = router.query;

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUserInfo(login).then((data) => {
      setUser(data?.userInfo);
    });
    getUserRepos(login).then((data) => {
      setRepos(sortDescUpdatesRepos(data?.userRepos));
    });
  }, [login]);

  return (
    <MainLayout>
      <Row>
        <Col sm={12}>
          <h1 className="text-center text-white bg-dark py-2">
            {user?.login || login}
          </h1>
        </Col>
        <Col md={4}>{!!user && <UserInfo user={user} />}</Col>
        <Col md={8}>
          <h2 className="text-center py-2">Last updated repositories</h2>
        </Col>
      </Row>
    </MainLayout>
  );
}
