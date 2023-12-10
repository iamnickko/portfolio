import Link from "next/link";

export default function Header() {
  return (
    <header className="flex mx-auto max-w-screen-lg my-5 px-5">
      <nav className="flex w-full justify-end space-x-5 font-body text-pale">
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Experience</Link>
        <Link href={"#"}>Projects</Link>
        <Link href={"#"}>Contact</Link>
      </nav>
    </header>
  );
}
