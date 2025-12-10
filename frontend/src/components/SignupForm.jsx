// // frontend/src/components/SignupForm.jsx
// import React, { useState } from 'react';
// import { signup } from '../auth/services';

// export default function SignupForm() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   function onChange(e) {
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//   }

//   async function onSubmit(e) {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await signup(form);
//       // Save token and show success
//       localStorage.setItem('token', res.token);
//       setMessage('Registration successful');
//     } catch (err) {
//       setMessage(err.payload?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>Name</label>
//         <input name="name" value={form.name} onChange={onChange} required />
//       </div>
//       <div>
//         <label>Email</label>
//         <input name="email" value={form.email} onChange={onChange} type="email" required />
//       </div>
//       <div>
//         <label>Password</label>
//         <input name="password" value={form.password} onChange={onChange} type="password" required />
//       </div>
//       <button type="submit" disabled={loading}>{loading ? 'Please wait...' : 'Sign up'}</button>
//       {message && <div>{message}</div>}
//     </form>
//   );
// }


import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/register', form);
      const { token, user } = res.data;
      // Save token and role
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      // Redirect based on role
      if (user.role === 'provider') {
        navigate('/provider');
      } else {
        navigate('/user');
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>

        <label>
          Role
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="user">Normal User</option>
            <option value="provider">Service Provider</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
