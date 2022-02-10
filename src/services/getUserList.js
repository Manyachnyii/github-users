export default async function getUserList(req) {
  const url = req || "https://api.github.com/users?per_page=9";
  const options = {
    headers: {
      accept: "application/vnd.github.v3+json",
    },
  };
  const res = await fetch(url, options);
  const users = await res.json();
  const headers_link = res.headers.get("link");

  const responce_limit = res.headers.get("x-ratelimit-limit");
  const responce_used = res.headers.get("x-ratelimit-used");
  console.log(
    "Лимит запросов использовано/осталось:",
    `${responce_used}/${responce_limit}`
  );

  console.log("headers_link", headers_link);

  return {
    users,
    link,
  };
}
