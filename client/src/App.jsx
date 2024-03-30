import "./App.css";
import AuthProvider from "./contexts/authContext";
import LoadingProvider from "./contexts/loadingContext";
import AppRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
