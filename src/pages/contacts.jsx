import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ContactList from "../components/ContactList";

import getUserList from "../services/getUserList";

export default function Contacts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList().then((data) => {
      console.log("data", data);
      setUsers(data.users);
    });
  }, []);

  return (
    <MainLayout>
      <h1 className="text-center">Пользователи GitHub</h1>
      {users && <ContactList users={users} />}
    </MainLayout>
  );
}
