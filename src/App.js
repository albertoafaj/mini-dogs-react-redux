import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { loginin, autoLogin } from "./store/login";

function App() {
  const { login } = useSelector(state => state)
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch])

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginin({ username, password }));
  }
  return (
    <div className="App">
      <>
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
      </>
    </div>
  );
}

export default App;
