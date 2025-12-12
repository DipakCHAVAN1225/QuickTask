// import { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is already logged in (on app load)
//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
        
//         if (!token) {
//           setUser(null);
//           setLoading(false);
//           return;
//         }

//         // Call your backend to verify token and get user data
//         const response = await fetch('http://localhost:3000/api/auth/me', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         if (response.ok) {
//           const userData = await response.json();
          
//           setUser({
//             id: userData._id || userData.id,
//             name: userData.name || '',
//             email: userData.email || '',
//             role: userData.role || 'user',
//             dp: userData.profilePicture || userData.dp || null,
//             businessName: userData.businessName || null,
//             serviceType: userData.serviceType || null
//           });
//         } else {
//           localStorage.removeItem('authToken');
//           setUser(null);
//         }
//       } catch (error) {
//         console.error('Auth check failed:', error);
//         localStorage.removeItem('authToken');
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   const login = async (email, password, role) => {
//     try {
//       setLoading(true);
      
//       const response = await fetch('http://localhost:3000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           role
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
      
//       localStorage.setItem('authToken', data.token);

//       setUser({
//         id: data.user._id || data.user.id,
//         name: data.user.name || '',
//         email: data.user.email || '',
//         role: data.user.role || 'user',
//         dp: data.user.profilePicture || data.user.dp || null,
//         businessName: data.user.businessName || null,
//         serviceType: data.user.serviceType || null
//       });

//       return { success: true, user: data.user };
//     } catch (error) {
//       console.error('Login error:', error);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signup = async (userData, role) => {
//     try {
//       setLoading(true);

//       const signupData = {
//         ...userData,
//         role
//       };

//       const response = await fetch('http://localhost:3000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(signupData)
//       });

//       if (!response.ok) {
//         throw new Error('Signup failed');
//       }

//       const data = await response.json();

//       localStorage.setItem('authToken', data.token);

//       setUser({
//         id: data.user._id || data.user.id,
//         name: data.user.name || '',
//         email: data.user.email || '',
//         role: data.user.role || 'user',
//         dp: data.user.profilePicture || data.user.dp || null,
//         businessName: data.user.businessName || null,
//         serviceType: data.user.serviceType || null
//       });

//       return { success: true, user: data.user };
//     } catch (error) {
//       console.error('Signup error:', error);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setUser(null);
//   };

//   const updateProfile = async (updatedData) => {
//     try {
//       const token = localStorage.getItem('authToken');
      
//       const response = await fetch('http://localhost:3000/api/auth/profile', {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUser({
//           ...user,
//           ...updatedData,
//           dp: data.profilePicture || updatedData.dp || user.dp
//         });
//         return { success: true };
//       }
//       return { success: false };
//     } catch (error) {
//       console.error('Profile update error:', error);
//       return { success: false, error: error.message };
//     }
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     signup,
//     logout,
//     updateProfile,
//     isAuthenticated: !!user
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to read token safely
  const getToken = () => {
    try {
      return localStorage.getItem('authToken');
    } catch (e) {
      console.error('Could not read token from localStorage', e);
      return null;
    }
  };

  // Check if user is already logged in (on app load)
  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        const token = getToken();
        if (!token) {
          setUser(null);
          return;
        }

        const response = await fetch('http://localhost:3000/api/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const payload = await response.json().catch(() => ({}));
        if (response.ok) {
          const userData = payload.user || payload; // adapt to your backend shape
          setUser({
            id: userData._id || userData.id || null,
            name: userData.name || '',
            email: userData.email || '',
            role: userData.role || 'user',
            dp: userData.profilePicture || userData.dp || null,
            businessName: userData.businessName || null,
            serviceType: userData.serviceType || null
          });
        } else {
          // token invalid or expired
          console.warn('Auth check failed:', payload);
          localStorage.removeItem('authToken');
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email, password, role) => {
    setLoading(true);
    try {
      // debug: show exact payload that will be sent
      const body = role ? { email, password, role } : { email, password };
      console.debug('Auth.login payload:', body);

      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        // Surface backend message if available
        const message = data.error || data.message || `Login failed (status ${response.status})`;
        throw new Error(message);
      }

      const token = data.token || data.accessToken;
      if (!token) {
        throw new Error('No token returned from server');
      }

      localStorage.setItem('authToken', token);

      const userObj = data.user || data.userData || data;
      setUser({
        id: userObj._id || userObj.id || null,
        name: userObj.name || '',
        email: userObj.email || '',
        role: userObj.role || role || 'user',
        dp: userObj.profilePicture || userObj.dp || null,
        businessName: userObj.businessName || null,
        serviceType: userObj.serviceType || null
      });

      return { success: true, user: userObj };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData, role) => {
    setLoading(true);
    try {
      const payload = role ? { ...userData, role } : { ...userData };
      console.debug('Auth.signup payload:', payload);

      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = data.error || data.message || `Signup failed (status ${response.status})`;
        throw new Error(message);
      }

      const token = data.token || data.accessToken;
      if (!token) {
        throw new Error('No token returned from server');
      }
      localStorage.setItem('authToken', token);

      const userObj = data.user || data;
      setUser({
        id: userObj._id || userObj.id || null,
        name: userObj.name || '',
        email: userObj.email || '',
        role: userObj.role || role || 'user',
        dp: userObj.profilePicture || userObj.dp || null,
        businessName: userObj.businessName || null,
        serviceType: userObj.serviceType || null
      });

      return { success: true, user: userObj };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message || 'Signup failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('authToken');
    } catch (e) {
      console.warn('Could not remove token', e);
    }
    setUser(null);
  };

  const updateProfile = async (updatedData) => {
    try {
      const token = getToken();
      if (!token) return { success: false, error: 'Not authenticated' };

      const response = await fetch('http://localhost:3000/api/auth/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        return { success: false, error: data.error || data.message || 'Profile update failed' };
      }

      // merge server-confirmed fields with local user
      const serverUser = data.user || data;
      setUser(prev => ({
        ...prev,
        ...serverUser,
        ...updatedData,
        dp: serverUser.profilePicture || updatedData.dp || prev?.dp || null
      }));

      return { success: true, user: serverUser };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, error: error.message || 'Profile update failed' };
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
