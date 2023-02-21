import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginin } from '../store/login';

const Login = () => {
  const { login } = useSelector(state => state);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginin({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: "block", marginTop: "24px" }} htmlFor="username">
        Usuário
      </label>
      <input id="username" type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <label style={{ display: "block", marginTop: "24px" }} htmlFor="password">
        Senha
      </label>
      <input id="password" type="text" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button>Enviar</button>
      {<span>User: {login.user.data?.email}</span>}
    </form>
  )
}

export default Login