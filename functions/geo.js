export function onRequest({ request }) {
  const country = request.cf?.country || "XX";
  const code = country === "VN" ? "VN" : "XX";

  return new Response(code, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
