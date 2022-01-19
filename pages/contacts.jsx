import MainLayout from "../src/layouts/MainLayout";
import ContactList from "../src/ContactList";

export default function Contacts(props) {
  const { users } = props.pageProps;

  return (
    <MainLayout>
      <h1>Страница со списком контактов</h1>
      <ContactList users={users} />
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
