import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
};

export default App;
