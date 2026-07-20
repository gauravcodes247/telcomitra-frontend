import React from "react";
import { useState, useEffect } from "react";
import { BookOpen, Ticket, CircleCheckBig, CircleAlert } from "lucide-react";
import DashboardCard from "../../components/common/DashboardCard";
import { get_dashboard } from "../../services/dashboardService";
const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const fetchDashboard = async () => {
    try {
      const data = await get_dashboard();
      setDashboard(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Total FAQs"
        value={dashboard?.total_faqs ?? 0}
        icon={BookOpen}
        color="bg-blue-600"
      />

      <DashboardCard
        title="Total Tickets"
        value={dashboard?.total_tickets ?? 0}
        icon={Ticket}
        color="bg-purple-600"
      />

      <DashboardCard
        title="Open Tickets"
        value={dashboard?.open_tickets ?? 0}
        icon={CircleAlert}
        color="bg-green-600"
      />

      <DashboardCard
        title="Closed Tickets"
        value={dashboard?.closed_tickets ?? 0}
        icon={CircleCheckBig}
        color="bg-red-600"
      />
    </div>
  );
};

export default Dashboard;
