import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CustomerDashboard from "../Pages/Customer/CustomerDashboard";
import DetailProduct from "../Pages/Customer/DetailProduct";
import UserProfile from "../Pages/Customer/UserProfile";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

function CustomerRoutes() {
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<CustomerDashboard />} />
              <Route path="/product/:id" element={<DetailProduct />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/my-order" element={<UserProfile />} />
              <Route path="/address" element={<UserProfile />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      )}
    </>
  );
}

export default CustomerRoutes;
