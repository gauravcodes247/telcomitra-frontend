import React from "react";

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111827] p-6 shadow-lg transition-all hover:border-green-500/30 hover:shadow-green-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h2 className="mt-3 text-3xl font-bold text-white">{value}</h2>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
