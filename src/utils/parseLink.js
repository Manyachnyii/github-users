export default function parseLink(str) {
  const sep = str.split("; ");
  const format = sep[0].match(/[^(&lt;)](.*)[^(&gt;)]/s);
  const nextLink = format[1];

  return nextLink;
}
