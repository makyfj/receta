import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex justify-around p-2">
        <Link href="/">
          <p className="custom-nav">Home</p>
        </Link>
        <Link href="/recipes">
          <p className="custom-nav">Recipes</p>
        </Link>
        <Link href="/">
          <p className="custom-nav">Sign In</p>
        </Link>
      </nav>
      <main className="container mx-auto px-4">{children}</main>
    </div>
  );
};

export default Layout;