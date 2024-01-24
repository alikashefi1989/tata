import { Route, Routes } from "react-router-dom";
import useProtectedLayout from "./hooks/protected"
import APP_ROUTE from "./enums/app-route.enum";
import Layout from "./components/layout";
import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
  useProtectedLayout()

  return (
    <Layout>
      <Routes>
        <Route key='1' path={APP_ROUTE.LOGIN} element={<Login />} />
        <Route key='2' path={APP_ROUTE.PROFILE} element={<Profile />} />
        <Route key='3' path={APP_ROUTE.ABOUT} element={<About />} />
        <Route key='4' path={APP_ROUTE.HOME} element={<Home />} />
        <Route key='5' path={APP_ROUTE.NOT_FOUND} element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
