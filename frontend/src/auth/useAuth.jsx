

import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Protect against SSR (window undefined)
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }

    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (err) {
      console.error("Failed to read user from localStorage:", err);
      // remove corrupt data so next load is clean
      try { localStorage.removeItem("user"); } catch (_) {}
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(userData));
      }
      setUser(userData);
    } catch (err) {
      console.error("Failed to save user:", err);
    }
  };

  const logout = () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.error("Failed to remove user:", err);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    // helpful developer error message if hook used outside provider
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

/**
 * Safely parse a JWT payload in both browser and Node environments.
 * Returns parsed object or null on failure.
 */
export function parseJwt(token) {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length < 2) return null;

  // the payload is parts[1]
  let payload = parts[1];

  // Convert from URL-safe base64 to standard base64
  payload = payload.replace(/-/g, "+").replace(/_/g, "/");

  // Add padding if required
  const pad = payload.length % 4;
  if (pad === 2) payload += "==";
  else if (pad === 3) payload += "=";
  else if (pad === 1) return null; // invalid base64

  try {
    let jsonPayload;
    if (typeof window !== "undefined" && typeof window.atob === "function") {
      jsonPayload = decodeURIComponent(
        Array.prototype.map
          .call(atob(payload), (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
    } else {
      // Node environment fallback
      jsonPayload = Buffer.from(payload, "base64").toString("utf8");
    }
    return JSON.parse(jsonPayload);
  } catch (err) {
    // decode or parse failed
    console.error("parseJwt failed:", err);
    return null;
  }
}
