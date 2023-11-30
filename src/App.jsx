import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LogoutButton from "./component/LogoutButton/LogoutButton";
import UserMenu from "./component/UserMenu/UserMenu";
import { useSelector } from "react-redux";


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Contacts = lazy(() => import('./pages/Contacts'))

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <header>
        {isLoggedIn ? (
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <UserMenu />
            <LogoutButton />
          </nav>
        ) : (
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </nav>
        )}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;






