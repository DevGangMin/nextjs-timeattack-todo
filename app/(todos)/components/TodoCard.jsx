import Link from "next/link";
import Badge from "./Badge";
{/*
목록의 각 Todo를 클릭하면 상세 페이지로 이동한다
상세 페이지의 URL에 해당 Todo의 id가 포함되어 있다
*/}

{/*
Todo: 
- 해당 Todo의 모든 정보(제목, 내용, 카테고리, 우선순위, 생성일 등)가 표시된다
- 존재하지 않는 id로 직접 접근했을 때, 적절히 처리된다 (404 화면이거나, "찾을 수 없습니다" 안내)
- 상세 페이지의 브라우저 탭 제목에 **해당 Todo의 제목이 동적으로** 들어간다
*/}

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
          <span className="text-xs text-gray-400">
            카테고리 {todo.category}
          </span>
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
