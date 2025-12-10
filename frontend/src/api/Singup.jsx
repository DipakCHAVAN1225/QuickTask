// frontend example
import axios from 'axios';

async function signup() {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/register', {
      name: 'Dipak',
      email: 'dipak@test.com',
      password: '123456'
    });
    console.log(res.data);
  } catch (err) {
    console.error('Signup error:', err.response ? err.response.data : err.message);
  }
}

signup();
