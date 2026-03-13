import Link from "next/link";

export default function Footer() {
  return (
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
  );
}