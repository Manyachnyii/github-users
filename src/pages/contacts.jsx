import MainLayout from "../layouts/MainLayout";
import ContactList from "../components/ContactList";

export default function Contacts(props) {
  const { users } = props.pageProps;

  return (
    <MainLayout>
      <h1 className="text-center">Пользователи GitHub</h1>
      {users && <ContactList users={users} />}
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const url = "https://api.github.com/users?per_page=9";
  const options = {
    headers: {
      accept: "application/vnd.github.v3+json",
    },
  };
  const res = await fetch(url, options);
  const headers = await res.headers.get("link");
  const users = await res.json();
  console.log("headers", headers)

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users,
    },
  };
};
