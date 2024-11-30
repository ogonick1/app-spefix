"use client";

import { useState } from "react";

export default function UserList({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="w-full max-w-md text-center">
      <ul className="list-none mb-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="mb-2 p-2 rounded-md text-lg shadow-md truncate"
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-md"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
