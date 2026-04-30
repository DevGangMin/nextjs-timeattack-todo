import TodoCard from "../components/TodoCard";
import FilterBar from "../components/FilterBar";

export const metadata = {
  title: "Todo 목록",
  description: "등록된 할 일 목록을 확인하세요.",
};

// TODO: 함수 시그니처에 searchParams를 추가한다
export default async function TodosPage({ searchParams }) {
  const { completed } = await searchParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    cache: "no-store",
  });
  const todos = await res.json();

  // TODO: completed 값에 따라 todos를 필터링한다
  //   - completed가 "true"  → todo.completed === true  인 항목만
  //   - completed가 "false" → todo.completed === false 인 항목만
  //   - completed가 없음    → 전체 목록 그대로
  const filtered =
    completed === undefined
      ? todos
      : todos.filter((t) => String(t.completed) === completed);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-900">할 일 목록</h1>
      <div className="flex flex-col gap-3">
        {/* TODO: JSX에 FilterBar와 filtered 결과를 넣는다 */}
        <FilterBar current={completed} />
        {filtered.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
