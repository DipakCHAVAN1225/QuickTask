// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContextType';

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);      // { _id, name, email, role, avatarUrl }
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//   console.log('[Auth] mounting - reading localStorage auth');
//   try {
//     const raw = localStorage.getItem('auth');
//     console.log('[Auth] raw', raw);
//     if (raw) {
//       const parsed = JSON.parse(raw);
//       console.log('[Auth] parsed', parsed);
//       setUser(parsed.user);
//       setToken(parsed.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.token}`;
//     }
//   } catch (e) {
//     console.error('[Auth] load error', e);
//   }
//   setLoading(false);
// }, []);


//   // load from localStorage (or implement a call to /auth/me if using httpOnly cookie)
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem('auth');
//       if (raw) {
//         const parsed = JSON.parse(raw);
//         setUser(parsed.user);
//         setToken(parsed.token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.token}`;
//       }
//     } catch  { /* ignore */ }
//     finally {
//       setLoading(false);
//     }
//   }, []);

//   const saveAuth = (userObj, jwt) => {
//     setUser(userObj);
//     setToken(jwt);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
//     localStorage.setItem('auth', JSON.stringify({ user: userObj, token: jwt }));
//   };

//   const clearAuth = () => {
//     setUser(null);
//     setToken(null);
//     delete axios.defaults.headers.common['Authorization'];
//     localStorage.removeItem('auth');
//   };

//   // wrapper for login request
//   const login = async (credentials) => {
//     const res = await axios.post('/api/auth/login', credentials);
//     // expect { token, user }
//     saveAuth(res.data.user, res.data.token);
//     return res.data;
//   };

//   const register = async (payload) => {
//     const res = await axios.post('/api/auth/register', payload);
//     saveAuth(res.data.user, res.data.token);
//     return res.data;
//   };

//   console.log('Auth init', { raw: localStorage.getItem('auth') });

//   const logout = async () => {
//     // optional: call backend logout if using server-side sessions
//     clearAuth();
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, loading, login, register, logout, saveAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContextCore';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { _id, name, email, role, avatarUrl }
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize axios defaults (adjust baseURL if needed)
  // Note: In React, environment variables are accessed via import.meta.env or webpack-injected globals
  // For Vite, use: import.meta.env.VITE_API_URL
  // For Create React App, use: window location or hardcode the URL
  const apiUrl = typeof window !== 'undefined' ? window.__API_URL__ || '' : '';
  if (apiUrl) {
    axios.defaults.baseURL = apiUrl;
  }

  useEffect(() => {
    // load persisted auth from localStorage
    try {
      const raw = localStorage.getItem('auth');
      console.log('[Auth] init localStorage', raw);
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
        if (parsed.token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.token}`;
        }
      }
    } catch (e) {
      console.error('[Auth] load error', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const persistAuth = (userObj, jwt) => {
    setUser(userObj);
    setToken(jwt);
    try {
      localStorage.setItem('auth', JSON.stringify({ user: userObj, token: jwt }));
    } catch (e) {
      console.warn('Could not persist auth to localStorage', e);
    }
    if (jwt) axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  };

  const clearAuth = () => {
    setUser(null);
    setToken(null);
    try { localStorage.removeItem('auth'); } catch { /* ignore */ }
    delete axios.defaults.headers.common['Authorization'];
  };

  // Real backend login
  const login = async (credentials) => {
    // credentials: { email, password }
    const res = await axios.post('/api/auth/login', credentials);
    // Expecting { token, user } from backend. If backend differs, adapt here.
    const payload = res.data;
    // try common shapes
    const jwt = payload.token || payload.accessToken || null;
    const userObj = payload.user || payload.data?.user || payload.userData || null;

    if (!jwt || !userObj) {
      // If backend returns different shape, save entire payload for debugging
      console.warn('[Auth] unexpected login response shape', payload);
      throw new Error('Unexpected login response shape. Check backend response in Network tab.');
    }

    persistAuth(userObj, jwt);
    return { user: userObj, token: jwt };
  };

  // Real backend register
  const register = async (payload) => {
    const res = await axios.post('/api/auth/register', payload);
    const data = res.data;
    const jwt = data.token || data.accessToken || null;
    const userObj = data.user || data.data?.user || null;
    if (!jwt || !userObj) {
      console.warn('[Auth] unexpected register response shape', data);
      throw new Error('Unexpected register response shape. Check backend response in Network tab.');
    }
    persistAuth(userObj, jwt);
    return { user: userObj, token: jwt };
  };

  // Logout wrapper
  const logout = async () => {
    // optionally call backend logout
    try {
      // await axios.post('/api/auth/logout'); // uncomment if your backend supports it
    } catch {
      /* ignore */
    }
    clearAuth();
  };

  // For local testing if backend is not available
  const mockLoginAs = (role = 'user') => {
    const mockUser = {
      _id: role === 'provider' ? 'prov-1' : 'user-1',
      name: role === 'provider' ? 'Demo Provider' : 'Demo User',
      email: role === 'provider' ? 'prov@example.com' : 'user@example.com',
      role,
      avatarUrl: '', // set a public URL if you want
    };
    const mockToken = 'mock-token';
    persistAuth(mockUser, mockToken);
    return { user: mockUser, token: mockToken };
  };

  return (
    <AuthContext.Provider value={{
      user, token, loading,
      login, register, logout,
      persistAuth, clearAuth, mockLoginAs
    }}>
      {children}
    </AuthContext.Provider>
  );
}
