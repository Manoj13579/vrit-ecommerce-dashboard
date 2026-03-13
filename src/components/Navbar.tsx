import Link from "next/link";

export default function Navbar() {
  return (
   
        <nav className="flex gap-6 text-sm font-medium">
           <Link href="/cart" className="hover:text-primary">go to cart</Link>
        </nav>
          );
}