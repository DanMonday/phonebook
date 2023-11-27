import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "./pages/LogoutButton";

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <header>
        {isLoggedIn ? (
          <nav>
            <Link to='/'>Home</Link>
            <LogoutButton />
          </nav>
        ) : (
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </nav>
        )}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;






