
// frontend/src/auth/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check if user is already logged in on app load
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      console.log("🔍 Checking localStorage on app load:");
      console.log("  Token:", storedToken ? "✅ Found" : "❌ Not found");
      console.log("  User:", storedUser ? "✅ Found" : "❌ Not found");
      
      if (storedToken && storedUser) {
        const userData = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(userData);
        console.log("✅ User restored from localStorage:", userData);
      }
    } catch (err) {
      console.error("❌ Error loading auth from localStorage:", err);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Login function
  const login = (authData) => {
    try {
      const { token: newToken, user: newUser } = authData;
      
      // ✅ FIXED: Validate that we have token and user
      if (!newToken || !newUser) {
        console.error("❌ Login error: Missing token or user data", { newToken, newUser });
        throw new Error('Email and password required');
      }

      console.log("📝 Storing login data in localStorage:");
      console.log("  Token:", newToken.substring(0, 20) + "...");
      console.log("  User:", newUser);
      
      // Store in localStorage
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Store in state
      setToken(newToken);
      setUser(newUser);
      
      console.log("✅ Login successful");
    } catch (err) {
      console.error("❌ Login function error:", err);
      throw err;
    }
  };

  // ✅ Logout function
  const logout = () => {
    console.log("🚪 Logging out");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // ✅ Check if user is logged in
  const isLoggedIn = () => {
    return !!token && !!user;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading, 
      login, 
      logout, 
      isLoggedIn 
    }}>
      {children}
    </AuthContext.Provider>
  );
}