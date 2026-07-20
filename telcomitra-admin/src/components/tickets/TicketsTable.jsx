import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { formatDate } from "../../utils/dateUtils";
import { toast } from "sonner";

const TicketsTable = ({ data, onView, onStatusChange }) => {
  return (
    <div className="overflow-x-auto text-gray-400 w-full rounded-xl overflow-hidden">
      <table className="bg-gray-900 w-full">
        <thead>
          <tr className="border-b  transition-colors duration-150 text-sm font-semibold uppercase tracking-wide">
            <th className="px-6 py-4 text-left">Ticket No</th>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Subject</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr
              key={data.id}
              className="border-b hover:bg-gray-800/50 transition-colors duration-150"
            >
              <td className="px-6 py-4 text-left">{data.ticket_number}</td>
              <td className="px-6 py-4 text-left">{data.name}</td>
              <td className="px-6 py-4 text-left">{data.subject}</td>
              <td className="px-6 py-4 text-left">
                <select
                  value={data.status}
                  onChange={(e) => onStatusChange(data.id, e.target.value)}
                  className={`rounded-full px-3 py-1 text-sm border-none outline-none cursor-pointer ${
                    data.status === "OPEN"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  <option value="OPEN">Open</option>
                  <option value="CLOSED">Closed</option>
                </select>
              </td>

              <td className="px-6 py-4 text-left">
                <div className="flex gap-3">
                  <Eye
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => onView(data.id)}
                  ></Eye>
                  <Trash2
                    className="hover:text-red-400 cursor-pointer"
                    //onClick={() => onDelete(data)}
                  ></Trash2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
