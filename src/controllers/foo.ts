export async function createUser(payload: { email: string; name: string }) {
  await db.query("INSERT INTO users (email, name) VALUES ($1, $2)", [payload.email, payload.name]);
}