import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("../pages/DashboardPage"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
