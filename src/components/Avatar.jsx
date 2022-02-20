import Image from "next/image";

export default function Avatar({ url }) {
  if (!url) return null;

  return (
    <Image
      className="rounded-circle"
      src={url}
      alt="Avatar"
      width={128}
      height={128}
      layout="responsive"
    />
  );
}
