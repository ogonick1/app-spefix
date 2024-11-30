import UserList from "./user-list";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
  const users = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <UserList initialUsers={users} />
    </div>
  );
}
