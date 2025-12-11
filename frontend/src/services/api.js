const BASE_URL = import.meta.env.VITE_API_URL || '';

function buildUrl(url) {
  const trimmed = (url || '').trim();
  if (!trimmed) throw new Error('Empty URL passed to apiFetch');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `${BASE_URL.replace(/\/+$/, '')}/${trimmed.replace(/^\/+/, '')}`;
}

export async function apiFetch(url, options = {}) {
  const finalUrl = buildUrl(url);
  const defaultHeaders = { "Content-Type": "application/json" };
  const token = localStorage.getItem("token");

  const headers = { ...defaultHeaders, ...(options.headers || {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  // Handle AbortController timeout if provided in options.timeout (ms)
  let controller;
  if (options.timeout) {
    controller = new AbortController();
    options.signal = controller.signal;
    setTimeout(() => controller.abort(), options.timeout);
  }

  // Prepare body: do not stringify FormData / Blob / URLSearchParams
  const opts = { ...options, headers };
  if (opts.body && typeof opts.body === 'object' && !(opts.body instanceof FormData) && !(opts.body instanceof URLSearchParams) && headers['Content-Type']?.toLowerCase().includes('application/json')) {
    opts.body = JSON.stringify(opts.body);
  }

  // Ensure method present for bodyless fetches default to GET
  if (!opts.method) opts.method = opts.body ? 'POST' : 'GET';

  let res;
  try {
    res = await fetch(finalUrl, opts);
  } catch (err) {
    // network/abort error
    const e = new Error(err.name === 'AbortError' ? 'Request timed out' : 'Network error');
    e.cause = err;
    throw e;
  }

  const contentType = (res.headers.get("content-type") || "").toLowerCase();
  // 204 No Content or empty body
  if (res.status === 204 || contentType === '') {
    if (!res.ok) {
      const err = new Error(res.statusText || 'Request failed');
      err.status = res.status;
      err.payload = null;
      throw err;
    }
    return null;
  }

  let data;
  try {
    data = contentType.includes("application/json") ? await res.json() : await res.text();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message = (data && data.message) || res.statusText || "Request failed";
    const err = new Error(message);
    err.status = res.status;
    err.payload = data;
    throw err;
  }

  return data;
}
