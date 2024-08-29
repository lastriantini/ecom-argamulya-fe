import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import GuestSinglePage from "../components/Pages/guestSinglePage";
const queryClient = new QueryClient();

function GuestRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<GuestSinglePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default GuestRoutes;
