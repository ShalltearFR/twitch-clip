export default defineEventHandler(async (event) => {
  const origin = event.node.req.headers.origin || "";

  // Vérifie si l'origine de la requête est autorisée
  if (origin) {
    event.res.statusCode = 403; // Interdit
    return { error: "Access denied" };
  }

  return { data: [{ id: 1, name: "John Doe" }] };
});
