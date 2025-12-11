// src/services/auth.js
import { apiFetch } from './apiFetch'; // path where you saved the wrapper

export async function register({ name, email, password, role = 'user' }) {
  return apiFetch('/auth/register', {
    method: 'POST',
    body: { name, email, password, role }
  });
}

export async function login({ email, password }) {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: { email, password }
  });
}

export async function getMe() {
  return apiFetch('/auth/me', { method: 'GET' });
}
