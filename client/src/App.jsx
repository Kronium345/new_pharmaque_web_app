import "./App.css";
import AuthProvider from "./contexts/authContext";
import LoadingProvider from "./contexts/loadingContext";
import AppRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./config/axios";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>
          <Toaster />
          <AppRoutes />
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
