import TodoForm from "../../components/TodoForm";

export const metadata = {
  title: "할 일 추가",
};

export default function NewTodoPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-900">할 일 추가</h1>
      <TodoForm />
    </div>
  );
}
