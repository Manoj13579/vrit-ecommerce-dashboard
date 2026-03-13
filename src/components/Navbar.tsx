import Link from "next/link";

export default function Navbar() {
  return (
   
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/login" className="hover:text-primary">login</Link>
           <Link href="/cart" className="hover:text-primary">go to cart</Link>
        </nav>
          );
}