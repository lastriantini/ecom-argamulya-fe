import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CustomerDashboard from "../Pages/Customer/CustomerDashboard";
const queryClient = new QueryClient();

function CustomerRoutes() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<CustomerDashboard />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default CustomerRoutes;
