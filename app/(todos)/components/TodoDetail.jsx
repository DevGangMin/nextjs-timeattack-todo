"use client";

import { useRouter } from "next/navigation";

const priorityLabel = { high: "높음", medium: "보통", low: "낮음" };

function Row({ label, value }) {
  return (
    <div className="flex gap-3">
      <span className="w-20 shrink-0 text-sm text-gray-400">{label}</span>
      <span className="text-sm text-black">{value}</span>
    </div>
  );
}

export default function TodoDetail({ todo }) {
  const router = useRouter();

  async function handleToggle() {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">{todo.title}</h1>
        <button
          onClick={handleToggle}
          className={`shrink-0 px-3 py-1 text-sm font-medium rounded-full border ${
            todo.completed
              ? "bg-green-100 text-green-700 border-green-200"
              : "bg-white text-gray-500 border-gray-300 hover:border-blue-400"
          }`}
        >
          {todo.completed ? "완료 ✓" : "미완료"}
        </button>
      </div>

      <div className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-xl">
        <Row label="내용" value={todo.content} />
        <Row label="카테고리" value={`카테고리 ${todo.category}`} />
        <Row label="우선순위" value={priorityLabel[todo.priority] ?? todo.priority} />
        <Row label="생성일" value={new Date(todo.createdAt).toLocaleString("ko-KR")} />
      </div>
    </div>
  );
}
