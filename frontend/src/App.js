import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

const Login = lazy(() => import("./components/User/Login"));

function App() {
  return (
    <div className="App">
      <h1>Hello Reactt!</h1>
    </div>
  );
}

export default App;
