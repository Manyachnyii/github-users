import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import ContactList from "../components/ContactList";

import getUserList from "../services/getUserList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageLinks, setPageLinks] = useState([
    "https://api.github.com/users?per_page=9",
  ]);

  useEffect(() => {
    if (page < 0) {
      setPage(0);
    }

    getUserList(pageLinks[page]).then((data) => {
      setUsers(data.users);
      if (page >= pageLinks.length - 1) {
        setPageLinks([...pageLinks, data.nextLink]);
      }
    });
  }, [page, pageLinks]);

  return (
    <MainLayout>
      <h1 className="text-center">Пользователи GitHub</h1>
      {users && (
        <ContactList
          users={users}
          prevPage={() => setPage(--page)}
          nextPage={() => setPage(++page)}
        />
      )}
    </MainLayout>
  );
}
