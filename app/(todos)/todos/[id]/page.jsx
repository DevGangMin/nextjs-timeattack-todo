export default async function TodoDetailPage({ params }) {
  const { id } = await params;
  return <div>todo detail: {id}</div>;
}
