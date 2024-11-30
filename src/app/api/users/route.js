let users = [
  { id: 1, name: "Mykola", email: "Mykola@example.com" },
  { id: 2, name: "Alina", email: "Alina@example.com" },
];

export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const body = await req.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
