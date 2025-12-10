// frontend/src/auth/api.js
export async function apiFetch(url, options = {}) {
  const defaultHeaders = { "Content-Type": "application/json" };
  const token = localStorage.getItem("token");
  const headers = { ...(options.headers || {}), ...defaultHeaders };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const opts = { ...options, headers };

  const res = await fetch(url, opts);

  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const message = (data && data.message) || res.statusText || "Request failed";
    const err = new Error(message);
    err.status = res.status;
    err.payload = data;
    throw err;
  }

  return data;
}