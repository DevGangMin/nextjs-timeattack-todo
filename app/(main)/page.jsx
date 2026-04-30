import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold text-gray-900">Todo App</h1>
        <p className="text-gray-500">할 일을 간편하게 관리하세요.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <Link
          href="/todos"
          className="flex flex-col items-center gap-2 p-6 bg-blue-50 rounded-xl hover:bg-blue-100"
        >
          <span className="text-2xl">📋</span>
          <span className="font-medium text-blue-700">목록 보기</span>
        </Link>
        <Link
          href="/todos/new"
          className="flex flex-col items-center gap-2 p-6 bg-green-50 rounded-xl hover:bg-green-100"
        >
          <span className="text-2xl">✏️</span>
          <span className="font-medium text-green-700">할 일 추가</span>
        </Link>
      </div>
    </div>
  );
}
