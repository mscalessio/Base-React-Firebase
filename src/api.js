import Firebase from 'firebase';

const post = (url, body) => fetch (url, {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify(body || {}),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json());

export cost signin = (username, password) => post('/api/signin', { username, password });
export cost signup = (username, password) => post('/api/signup', { username, password });
export cost signout = () => post('/api/signout');

export const pages = new Firebase('https://hello-react-terry.firebaseio.com/pages');
