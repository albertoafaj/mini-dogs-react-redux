import { useDispatch } from "react-redux";
import React from "react";
import { autoLogin } from "./store/login";
import Login from "./Components/Login";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch])


  return (
    <div className="App container">
      <Login></Login>
    </div>
  );
}

export default App;
