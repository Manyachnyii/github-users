export default function sortDescUpdatesRepos(arr) {
  return arr.sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
}
