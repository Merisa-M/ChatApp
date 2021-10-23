import { useState } from 'react';
import axios from 'axios';
const ProjectID = '64b2aa5a-d33a-4587-9bc7-af5f30e0a1ea';
const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const authObject = { 'Project-ID': ProjectID, 'User-Name': username, 'User-Secret': 123123 };
  
      try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        window.location.reload();
        setError('');
      } catch (err) {
        setError('Oops, incorrect credentials.');
      }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> chat application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <div align="center">
                  <button type="submit" className="button">
                      <spna>start chatting</spna>
                  </button>
              </div>
                </form>
                <h1>{error}</h1>
            </div>

        </div>
    )
};
export default Modal;