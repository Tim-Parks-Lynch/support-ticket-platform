import React from "react";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.js";
import Authentication from "./pages/Authentication/Authentication.js";
import Database from "./pages/Database/Database.js";
import Functions from "./pages/Functions/Functions.js";
import Hosting from "./pages/Hosting/Hosting.js";
import MachineLearning from "./pages/MachineLearning/Machine-Learning.js";
import Storage from "./pages/Storage/Storage.js";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllTickets from "./components/AllTickets/AllTickets.js";
const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="tickets" element={<AllTickets />} />
            <Route path="database" element={<Database />} />
            <Route path="functions" element={<Functions />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="machine-learning" element={<MachineLearning />} />
            <Route path="storage" element={<Storage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
