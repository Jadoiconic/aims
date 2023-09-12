import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Users from "./views/pages/users/Users";
import Dashboard from "./views/pages/dashboard/Dashboard";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="/dashboard" name="Home" element={<Dashboard />} />
            <Route path="/admin" name="Admin" element={<DefaultLayout />} />
            <Route path="/users" name="Home" element={<Users />} />
            <Route exact path="*" name="Page 500" element={<Page500 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
