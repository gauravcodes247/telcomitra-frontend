import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import KnowledgeBase from "../pages/knowledge-base/KnowledgeBase";
import JobRoles from "../pages/job-roles/JobRoles";
import ChatLogs from "../pages/chat-logs/ChatLogs";

import Tickets from "../pages/tickets/Tickets";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />

          <Route path="/chat-logs" element={<ChatLogs />} />

          <Route path="/tickets" element={<Tickets />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
