import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute flex w-full text-2xl font-bold px-20 py-8">
      <Link href="/" className="flex-1 ">
        gunn.one
      </Link>
      <Link href="/apps" className="mr-16">
        apps
      </Link>
      <Link href="/about">about</Link>
    </nav>
  );
};

export default Navbar;
