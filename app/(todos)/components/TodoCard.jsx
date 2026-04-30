import Link from "next/link";
import Badge from "./Badge";

export default function TodoCard({ todo }) {
  return (
    <Link href={`/todos/${todo.id}`}>
      <div className="flex items-start justify-between gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm">
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className={`font-medium truncate ${todo.completed ? "line-through text-gray-400" : "text-gray-900"}`}
          >
            {todo.title}
          </span>
          <span className="text-sm text-gray-500 truncate">{todo.content}</span>
          <span className="text-xs text-gray-400">카테고리 {todo.category}</span>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <Badge priority={todo.priority} />
          {todo.completed && (
            <span className="text-xs text-green-600 font-medium">완료</span>
          )}
        </div>
      </div>
    </Link>
  );
}
