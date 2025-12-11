// // // // frontend/src/auth/useAuth.js
// // // import { createContext, useContext } from "react";

// // // export const AuthContext = createContext(null);

// // // export function useAuth() {
// // //    return useContext(AuthContext);
// // // }

// // // export function parseJwt(token) {
// // //   try {
// // //     const base64Url = token.split(".")[1];
// // //     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// // //     const jsonPayload = decodeURIComponent(
// // //       atob(base64)
// // //         .split("")
// // //         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
// // //         .join("")
// // //     )
// // //     return JSON.parse(jsonPayload);
// // //   } catch {
// // //     return null;
// // //   }
// // // }


// // import { createContext, useContext, useState, useEffect } from "react";

// // export const AuthContext = createContext(null);

// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const userData = localStorage.getItem('user');
// //     if (userData) {
// //       try {
// //         setUser(JSON.parse(userData));
// //       } catch (error) {
// //         console.error('Failed to parse user data:', error);
// //         localStorage.removeItem('user');
// //       }
// //     }
// //     setLoading(false);
// //   }, []);

// //   const login = (userData) => {
// //     localStorage.setItem('user', JSON.stringify(userData));
// //     setUser(userData);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export function useAuth() {
// //   return useContext(AuthContext);
// // }

// // export function parseJwt(token) {
// //   try {
// //     const base64Url = token.split(".")[1];
// //     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// //     const jsonPayload = decodeURIComponent(
// //       atob(base64)
// //         .split("")
// //         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
// //         .join("")
// //     );
// //     return JSON.parse(jsonPayload);
// //   } catch {
// //     return null;
// //   }
// // }

// /* eslint-disable no-unused-vars */
// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       try {
//         setUser(JSON.parse(userData));
//       } catch (error) {
//         console.error('Failed to parse user data:', error);
//         localStorage.removeItem('user');
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     localStorage.setItem('user', JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function parseJwt(token) {
//   try {
//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//         .join("")
//     );
//     return JSON.parse(jsonPayload);
//   } catch {
//     return null;
//   }
// }

import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}