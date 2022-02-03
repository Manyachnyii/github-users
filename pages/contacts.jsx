import MainLayout from "../src/layouts/MainLayout";
import ContactList from "../src/ContactList";

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
  const res = await fetch("https://api.github.com/users?per_page=9&page=1");
  const users = await res.json();

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
