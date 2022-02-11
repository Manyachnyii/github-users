export default async function getUserInfo(user) {
  const url = `https://api.github.com/users/${user}`;
  const options = {
    headers: {
      accept: "application/vnd.github.v3+json",
    },
  };
  const res = await fetch(url, options);
  const userInfo = await res.json();

  const responce_limit = res.headers.get("x-ratelimit-limit");
  const responce_used = res.headers.get("x-ratelimit-used");
  console.log(
    "Лимит запросов - использовано/осталось:",
    `${responce_used}/${responce_limit}`
  );

  return {
    userInfo,
  };
}
