import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;






