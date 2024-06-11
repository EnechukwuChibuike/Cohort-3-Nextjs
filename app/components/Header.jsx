import Link from "next/link";

function Header() {
  return (
    <header className="h-[10vh] flex justify-between p-10 items-center shadow-lg">
      <strong>Logo</strong>

      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="/login"
          className="p-3 bg-blue-500 rounded-md text-white hover:bg-blue-600"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
