import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-318px)]">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="btn">
        Return Home
      </Link>
    </div>
  );
}
