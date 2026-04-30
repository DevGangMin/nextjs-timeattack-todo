import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-bold text-lg text-blue-600">
          Todo App
        </Link>
        <nav className="flex gap-4">
          <Link href="/todos" className="text-gray-600 hover:text-blue-600">
            목록
          </Link>
          <Link href="/todos/new" className="text-gray-600 hover:text-blue-600">
            추가
          </Link>
        </nav>
      </div>
    </header>
  );
}
