import { notFound } from "next/navigation";

async function getTodo(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo) return { title: "찾을 수 없음" };
  return { title: todo.title };
}

const priorityLabel = { high: "높음", medium: "보통", low: "낮음" };

function Row({ label, value }) {
  return (
    <div className="flex gap-3">
      <span className="w-20 shrink text-sm text-gray-400">{label}</span>
      <span className="text-sm text-black">{value}</span>
    </div>
  );
}
export default async function TodoDetailPage({ params }) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">{todo.title}</h1>
        {todo.completed && (
          <span className="shrink-0 px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
            완료
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-xl">
        <Row label="내용" value={todo.content} />
        <Row label="카테고리" value={`카테고리 ${todo.category}`} />
        <Row
          label="우선순위"
          value={priorityLabel[todo.priority] ?? todo.priority}
        />
        <Row
          label="생성일"
          value={new Date(todo.createdAt).toLocaleString("ko-KR")}
        />
      </div>
    </div>
  );
}
