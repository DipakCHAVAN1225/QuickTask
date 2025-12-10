// frontend/src/auth/services.js
import { apiFetch } from './api';

export async function signup({ name, email, password }) {
  return apiFetch('/auth/register', {
    method: 'POST',
    body: { name, email, password }
  });
}

export async function login({ email, password }) {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: { email, password }
  });
}
