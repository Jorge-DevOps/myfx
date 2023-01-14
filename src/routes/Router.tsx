import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { App } from "../app";
import { Dashboard, Logbook, Performance, Settings, Target, WhatchList } from "../views/";
// import { Login } from "../Auth";

// import {
//   Home,
//   SearchActivation,
//   HiringPackages,
//   NotFound,
//   Package,
//   Layout,
//   Maintenance,
// } from "../Commons/UI";
// import { Roles } from "../Commons/Utils/constantsAPP";
// import { Logs_audit } from "../modules/Administrador/views/logsAudit";
// import { RegistrationProfilesUsers } from "../modules/Administrador/Views/RegistrationProfilesUsers/RegistrationProfilesUsers";
// import { PublicRoute, PrivateRoute, RoleRoute } from "./ManagerRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="login/*"
          element={
            <Routes>
              {/* <Route path="/*" element={<Login />} /> */}
            </Routes>
          }
        />

        <Route
          path="/*"
          element={
            <Routes>
              <Route path="*" element={<Navigate to="/404" replace />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              {/* <Route path="/404" element={<NotFound />} />
                <Route path="/maintenance" element={<NotFound />} /> */}
              {/* Internal Components */}
              <Route element={<App />}>
                <Route path="/404" element={<h2>404</h2>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/logbook" element={<Logbook />} />
                <Route path="/watchlist" element={<WhatchList />} />
                <Route path="/target" element={<Target />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/settings" element={<Settings />} />

                
              </Route>
            </Routes>
          }
        />
        <Route element={<h2></h2>} />
      </Routes>
    </Router>
  );
};
