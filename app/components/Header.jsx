import Link from "next/link";

function Header() {
  return (
    <header className="h-[10vh] flex justify-between p-10 items-center shadow-lg">
      <strong>Logo</strong>

      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
