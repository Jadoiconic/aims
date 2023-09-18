import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Public Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

// Super Users
const Welcome = React.lazy(()=> import("./views/pages/superAdmin/WelcomePage"))
const ManageUsers = React.lazy(()=> import("./views/pages/superAdmin/ManageUsers"))
const SuperSetting = React.lazy(()=> import("./views/pages/superAdmin/SuperUserSettings"))

// Admin Pages
const Dashboard = React.lazy(()=> import("./views/pages/admin/dashboard/Dashboard"))
const Dosiye = React.lazy(()=> import("./views/pages/admin/dosiye/Dosiye"))
const Users = React.lazy(()=> import("./views/pages/admin/users/Users"))
const AdminSettings = React.lazy(()=> import("./views/pages/admin/settings/Settings"))

// client Pages
const WelcomePage = React.lazy(()=> import("./views/pages/clientUser/homePage/HomePage"))
const ClintDosiye = React.lazy(()=> import("./views/pages/clientUser/dosiye/Dosiye"))
const UserSettings = React.lazy(()=> import("./views/pages/clientUser/settings/Settings"))
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
            {/* Super User routes */}
            <Route path="/welcome" name="Home" element={<Welcome />} />
            <Route path="/manage-users" name="Home" element={<ManageUsers />} />
            <Route path="/my-setting" name="Home" element={<SuperSetting />} />

            {/* Admin routes */}
            <Route path="/dashboard" name="Home" element={<Dashboard />} />
            <Route path="/ibirego" name="Home" element={<Dosiye />} />
            <Route path="/users" name="Home" element={<Users />} />
            <Route path="/setting" name="Home" element={<AdminSettings />} />

            {/* Users Routes */}
            <Route path="/home" name="Home" element={<WelcomePage />} />
            <Route path="/dosiye001" name="Home" element={<ClintDosiye />} />
            <Route path="/usetting" name="Home" element={<UserSettings />} />

            {/* public routes */}
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="*" name="Page 500" element={<Page500 />} />
            {/* <Route path="/admin" name="Admin" element={<DefaultLayout />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
