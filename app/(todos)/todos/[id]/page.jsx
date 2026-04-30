import { notFound } from "next/navigation";
import TodoDetail from "../../components/TodoDetail";

async function getTodo(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`,
    { cache: "no-store" },
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

export default async function TodoDetailPage({ params }) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) notFound();

  return <TodoDetail todo={todo} />;
}
