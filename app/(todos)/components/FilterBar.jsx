import Link from "next/link";

const filters = [
  { label: "전체", value: undefined, href: "/todos" },
  { label: "미완료", value: "false", href: "/todos?completed=false" },
  { label: "완료", value: "true", href: "/todos?completed=true" },
];

export default function FilterBar({ current }) {
  return (
    <div className="flex gap-2">
      {filters.map(({ label, value, href }) => {
        const isActive = current === value;
        return (
          // 서버 컴포넌트로 만든 이유는 클라이언트 hook이나 onClick 이벤트를 사용하지 않기 때문입니다.
          <Link
            key={label}
            href={href}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
