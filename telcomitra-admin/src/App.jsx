import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <Toaster position="top-right" richColors closeButton />
      <Analytics />
    </>
  );
};

export default App;
