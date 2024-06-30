import "./App.css";
import AuthProvider from "./contexts/authContext";
import LoadingProvider from "./contexts/loadingContext";
import AppRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./config/axios";
import { Toaster } from "react-hot-toast";
import { ScreenTimeProvider } from "./components/ScreenTime/ScreenTimeContext";
import { UserProvider } from "./hooks/UserContext";

function App() {
  return (
    <>
    <UserProvider>
    <ScreenTimeProvider>
      <LoadingProvider>
        <AuthProvider>
          <Toaster />
          <AppRoutes />
        </AuthProvider>
      </LoadingProvider>
      </ScreenTimeProvider>
      </UserProvider>
    </>
  );
}

export default App;
