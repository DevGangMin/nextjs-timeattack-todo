import TodoCard from "../components/TodoCard";

export const metadata = {
  title: "Todo 목록",
  description: "등록된 할 일 목록을 확인하세요.",
};

export default async function TodosPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    cache: "no-store",
  });
  const todos = await res.json();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-900">할 일 목록</h1>
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
