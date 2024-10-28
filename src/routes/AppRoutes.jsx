import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const TaskBarPage = React.lazy(() => import("../pages/TaskbarPage"));

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
