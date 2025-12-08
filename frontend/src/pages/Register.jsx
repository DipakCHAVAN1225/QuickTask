// import React, { useState } from 'react';
// import API from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import { setAuthToken } from '../api/api';

// export default function Register({ setUser }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/register', { name, email, password });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       setAuthToken(res.data.token);
//       setUser(res.data.user);
//       nav('/items');
//     } catch (err) {
//       alert(err.response?.data?.msg || 'Register failed');
//     }
//   };

//   return (
//     <form onSubmit={submit}>
//       <h2>Register</h2>
//       <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
//       <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
//       <button type="submit">Register</button>
//     </form>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [tab, setTab] = useState("user"); // user | provider

//   // user fields
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");

//   // provider fields
//   const [provBusiness, setProvBusiness] = useState("");
//   const [provEmail, setProvEmail] = useState("");
//   const [provPassword, setProvPassword] = useState("");
//   const [provServiceType, setProvServiceType] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (e) => /^\S+@\S+\.\S+$/.test(e);

//   async function handleUserRegister(e) {
//     e.preventDefault();
//     setApiError("");
//     const err = {};
//     if (!userName.trim()) err.userName = "Name required";
//     if (!userEmail.trim()) err.userEmail = "Email required";
//     else if (!validateEmail(userEmail)) err.userEmail = "Invalid email";
//     if (!userPassword || userPassword.length < 6) err.userPassword = "Password min 6 chars";
//     setErrors(err);
//     if (Object.keys(err).length) return;

//     setLoading(true);
//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           role: "user",
//           name: userName,
//           email: userEmail,
//           password: userPassword,
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Register failed");

//       // optionally auto-login by storing token
//       localStorage.setItem("token", data.token);
//       navigate("/");
//     } catch (err) {
//       setApiError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleProviderRegister(e) {
//     e.preventDefault();
//     setApiError("");
//     const err = {};
//     if (!provBusiness.trim()) err.provBusiness = "Business name required";
//     if (!provEmail.trim()) err.provEmail = "Email required";
//     else if (!validateEmail(provEmail)) err.provEmail = "Invalid email";
//     if (!provPassword || provPassword.length < 6) err.provPassword = "Password min 6 chars";
//     if (!provServiceType) err.provServiceType = "Choose a service";
//     setErrors(err);
//     if (Object.keys(err).length) return;

//     setLoading(true);
//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           role: "provider",
//           businessName: provBusiness,
//           email: provEmail,
//           password: provPassword,
//           serviceType: provServiceType,
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Register failed");

//       localStorage.setItem("token", data.token);
//       navigate("/providers");
//     } catch (err) {
//       setApiError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-2xl font-semibold text-gray-800">Create account</h2>
//           <p className="text-sm text-gray-500 mt-1">Register as a User or Service Provider.</p>
//         </div>

//         <div className="flex items-center gap-2 px-4 py-3 bg-gray-50">
//           <button
//             onClick={() => { setTab("user"); setErrors({}); setApiError(""); }}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === "user" ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-gray-100"}`}
//             aria-pressed={tab === "user"}
//           >
//             User
//           </button>
//           <button
//             onClick={() => { setTab("provider"); setErrors({}); setApiError(""); }}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === "provider" ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-gray-100"}`}
//             aria-pressed={tab === "provider"}
//           >
//             Provider
//           </button>
//         </div>

//         <div className="p-6">
//           {apiError && <div role="alert" className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{apiError}</div>}

//           {tab === "user" ? (
//             <form onSubmit={handleUserRegister} className="space-y-4" aria-label="User register form">
//               <label className="block text-sm">
//                 <span className="text-gray-600">Full name</span>
//                 <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="Your full name" />
//                 {errors.userName && <p className="text-xs text-red-600 mt-1">{errors.userName}</p>}
//               </label>

//               <label className="block text-sm">
//                 <span className="text-gray-600">Email</span>
//                 <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="you@example.com" />
//                 {errors.userEmail && <p className="text-xs text-red-600 mt-1">{errors.userEmail}</p>}
//               </label>

//               <label className="block text-sm">
//                 <span className="text-gray-600">Password</span>
//                 <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="At least 6 characters" />
//                 {errors.userPassword && <p className="text-xs text-red-600 mt-1">{errors.userPassword}</p>}
//               </label>

//               <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">{loading ? "Creating..." : "Create account"}</button>
//             </form>
//           ) : (
//             <form onSubmit={handleProviderRegister} className="space-y-4" aria-label="Provider register form">
//               <label className="block text-sm">
//                 <span className="text-gray-600">Business / Provider Name</span>
//                 <input type="text" value={provBusiness} onChange={(e) => setProvBusiness(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="e.g. Joe's Plumbing" />
//                 {errors.provBusiness && <p className="text-xs text-red-600 mt-1">{errors.provBusiness}</p>}
//               </label>

//               <label className="block text-sm">
//                 <span className="text-gray-600">Service Type</span>
//                 <select value={provServiceType} onChange={(e) => setProvServiceType(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
//                   <option value="">Select a service</option>
//                   <option value="plumbing">Plumbing</option>
//                   <option value="electrician">Electrician</option>
//                   <option value="cleaning">Cleaning</option>
//                   <option value="carpentry">Carpentry</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.provServiceType && <p className="text-xs text-red-600 mt-1">{errors.provServiceType}</p>}
//               </label>

//               <label className="block text-sm">
//                 <span className="text-gray-600">Email</span>
//                 <input type="email" value={provEmail} onChange={(e) => setProvEmail(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="provider@example.com" />
//                 {errors.provEmail && <p className="text-xs text-red-600 mt-1">{errors.provEmail}</p>}
//               </label>

//               <label className="block text-sm">
//                 <span className="text-gray-600">Password</span>
//                 <input type="password" value={provPassword} onChange={(e) => setProvPassword(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200 transition" placeholder="At least 6 characters" />
//                 {errors.provPassword && <p className="text-xs text-red-600 mt-1">{errors.provPassword}</p>}
//               </label>

//               <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">{loading ? "Creating..." : "Create provider account"}</button>
//             </form>
//           )}
//         </div>

//         <div className="px-6 py-4 border-t text-center text-sm text-gray-600">
//           Already have an account? <a className="text-blue-600 hover:underline" href="/login">Sign in</a>
//         </div>
//       </div>
//     </div>
//   );
// }




















// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../auth/api";
import { useAuth } from "../auth/useAuth";

export default function Register() {
  const [tab, setTab] = useState("user"); // "user" or "provider"

  // user fields
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // provider fields
  const [provBusiness, setProvBusiness] = useState("");
  const [provServiceType, setProvServiceType] = useState("");
  const [provEmail, setProvEmail] = useState("");
  const [provPassword, setProvPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();

  const validateEmail = (e) => /^\S+@\S+\.\S+$/.test(e);

  async function handleUserRegister(e) {
    e.preventDefault();
    setApiError("");
    setSuccessMsg("");
    const err = {};
    if (!userName.trim()) err.userName = "Name required";
    if (!userEmail.trim()) err.userEmail = "Email required";
    else if (!validateEmail(userEmail)) err.userEmail = "Invalid email";
    if (!userPassword || userPassword.length < 6) err.userPassword = "Password min 6 chars";
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);
    try {
      const data = await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          role: "user",
          name: userName,
          email: userEmail,
          password: userPassword
        })
      });

      // Optionally auto-login
      if (data?.token) {
        auth.login({ token: data.token, user: data.user, remember: true });
      }

      setSuccessMsg("Account created successfully. Redirecting...");
      setTimeout(() => navigate("/"), 900);
    } catch (err) {
      setApiError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleProviderRegister(e) {
    e.preventDefault();
    setApiError("");
    setSuccessMsg("");
    const err = {};
    if (!provBusiness.trim()) err.provBusiness = "Business name required";
    if (!provServiceType) err.provServiceType = "Choose a service";
    if (!provEmail.trim()) err.provEmail = "Email required";
    else if (!validateEmail(provEmail)) err.provEmail = "Invalid email";
    if (!provPassword || provPassword.length < 6) err.provPassword = "Password min 6 chars";
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);
    try {
      const data = await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          role: "provider",
          businessName: provBusiness,
          serviceType: provServiceType,
          email: provEmail,
          password: provPassword
        })
      });

      if (data?.token) {
        auth.login({ token: data.token, user: data.user, remember: true });
      }

      setSuccessMsg("Provider account created. Redirecting to provider area...");
      setTimeout(() => navigate("/providers"), 900);
    } catch (err) {
      setApiError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-pink-300 via-white to-violet-500 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Brand / Illustration */}
        <div className="hidden lg:flex flex-col justify-center gap-6 p-10 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
          <div className="transform -translate-y-2">
            <h1 className="text-3xl font-extrabold">Quick<span className="text-yellow-300">Task</span></h1>
            <p className="mt-2 text-indigo-100/90 max-w-sm">
              Join QuickTask — find local jobs or grow your service business. Create an account and start today.
            </p>
          </div>

          <div className="mt-4">
            <div className="w-44 h-44 rounded-xl bg-white/10 flex items-center justify-center">
              <svg className="w-24 h-24 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
              </svg>
            </div>
          </div>

          <p className="text-sm text-indigo-100/80 max-w-xs">
            Already have an account? Use Sign In to access your dashboard.
          </p>
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-10">
          <div className="max-w-md mx-auto animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Create account</h2>
              <p className="text-sm text-gray-500 mt-1">Register as a User or Service Provider</p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => { setTab("user"); setErrors({}); setApiError(""); setSuccessMsg(""); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === "user" ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-gray-100"}`}
                aria-pressed={tab === "user"}
              >
                User
              </button>

              <button
                onClick={() => { setTab("provider"); setErrors({}); setApiError(""); setSuccessMsg(""); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === "provider" ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-gray-100"}`}
                aria-pressed={tab === "provider"}
              >
                Provider
              </button>
            </div>

            {apiError && (
              <div role="alert" className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">
                {apiError}
              </div>
            )}

            {successMsg && (
              <div role="status" className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded">
                {successMsg}
              </div>
            )}

            {tab === "user" ? (
              <form onSubmit={handleUserRegister} className="space-y-4" aria-label="User register">
                <div>
                  <label className="block text-sm text-gray-600">Full name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {errors.userName && <p className="text-xs text-red-600 mt-1">{errors.userName}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.userEmail && <p className="text-xs text-red-600 mt-1">{errors.userEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                  />
                  {errors.userPassword && <p className="text-xs text-red-600 mt-1">{errors.userPassword}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Create account"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleProviderRegister} className="space-y-4" aria-label="Provider register">
                <div>
                  <label className="block text-sm text-gray-600">Business / Provider Name</label>
                  <input
                    type="text"
                    value={provBusiness}
                    onChange={(e) => setProvBusiness(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="e.g. Joe's Plumbing"
                    autoComplete="organization"
                  />
                  {errors.provBusiness && <p className="text-xs text-red-600 mt-1">{errors.provBusiness}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Service Type</label>
                  <select
                    value={provServiceType}
                    onChange={(e) => setProvServiceType(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select a service</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrician">Electrician</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.provServiceType && <p className="text-xs text-red-600 mt-1">{errors.provServiceType}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    value={provEmail}
                    onChange={(e) => setProvEmail(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="provider@example.com"
                    autoComplete="email"
                  />
                  {errors.provEmail && <p className="text-xs text-red-600 mt-1">{errors.provEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    value={provPassword}
                    onChange={(e) => setProvPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                  />
                  {errors.provPassword && <p className="text-xs text-red-600 mt-1">{errors.provPassword}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Create provider account"}
                </button>
              </form>
            )}

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account? <a className="text-blue-600 hover:underline" href="/login">Sign in</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn .28s ease-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
