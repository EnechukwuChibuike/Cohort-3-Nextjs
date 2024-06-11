import Link from "next/link";

function notFound() {
  return (
    <section className="grid content-center justify-items-center h-[90vh]">
      <h1 className="text-4xl">
        <span className="text-red-500">404</span> | The page your're looking
        does not exist.
      </h1>
      <Link href="/">Go back to Home</Link>
    </section>
  );
}

export default notFound;
