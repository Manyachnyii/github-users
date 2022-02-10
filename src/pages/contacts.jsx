import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ContactList from "../components/ContactList";

import getUserList from "../services/getUserList";

export default function Contacts() {
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState("");
  console.log(next);

  useEffect(() => {
    getUserList().then((data) => {
      setUsers(data.users);
      setNext(data.nextLink);
    });
  }, []);

  return (
    <MainLayout>
      <h1 className="text-center">Пользователи GitHub</h1>
      {users && <ContactList users={users} />}
    </MainLayout>
  );
}
