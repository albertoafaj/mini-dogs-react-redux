import React from 'react'
import { useDispatch, /* useSelector */ } from 'react-redux';
import { loginin } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  // const { login } = useSelector(state => state);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginin({ username, password }));
  }

  return (
    <form className='anime' onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input id="username" className={styles.input} type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input id="password" autoComplete="on" className={styles.input} type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button className={styles.button}>Enviar</button>
    </form>
  )
}

export default Login