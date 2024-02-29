import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Posts from "./components/Pages/Posts";
import Comments from "./components/Pages/Comments";
import AuthLayout from "./components/Layouts/AuthLayout";
import MainLayout from "./components/Layouts/MainLayout";
import Login from "./components/Pages/Auth/Login";
import Calculator from "./components/Pages/Calculator";
import Users from "./components/Pages/Users";


export default function App() {

  const userData = JSON.parse(localStorage.getItem("userData")) 

  if (!userData?.token) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login " />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<div>home page</div>} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
