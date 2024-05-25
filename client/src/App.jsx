import "./App.css";
import AuthProvider from "./contexts/authContext";
import LoadingProvider from "./contexts/loadingContext";
import AppRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./config/axios";
import { Toaster } from "react-hot-toast";
import { ScreenTimeProvider } from "./components/ScreenTime/ScreenTimeContext";

function App() {
  return (
    <>
    <ScreenTimeProvider>
      <LoadingProvider>
        <AuthProvider>
          <Toaster />
          <AppRoutes />
        </AuthProvider>
      </LoadingProvider>
      </ScreenTimeProvider>
    </>
  );
}

export default App;
