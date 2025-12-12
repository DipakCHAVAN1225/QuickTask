import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', form);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      // redirect to appropriate dashboard
      if (user.role === 'provider') navigate('/provider');
      else navigate('/user');
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>

        <button type="submit" >Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}


// import React, { useState } from 'react';
// import api from '../services/api';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await api.post('/auth/login', form);
//       const { token, user } = res.data;
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', user.role);
//       // redirect to appropriate dashboard
//       if (user.role === 'provider') navigate('/provider');
//       else navigate('/user');
//     } catch (err) {
//       console.error(err);
//       setError(err?.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={onSubmit}>
//         <label>
//           Email
//           <input type="email" name="email" value={form.email} onChange={handleChange} required />
//         </label>

//         <label>
//           Password
//           <input type="password" name="password" value={form.password} onChange={handleChange} required />
//         </label>

//         <button type="submit" >Login</button>
//       </form>

//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// }

