import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { ThemeProvider } from "./context/ThemeContaxt.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <Toaster richColors position="top-right" />
  </React.StrictMode>
);
