import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
const KnowledgeBaseTable = () => {
  const data = [
    {
      id: 1,
      question: "What is NSQF?",
      category: "General",
      status: true,
      updated: "13 Jul 2026",
    },
  ];
  return (
    <div className="overflow-x-auto text-gray-400 w-full rounded-xl overflow-hidden">
      <table className="bg-gray-900 w-full">
        <thead>
          <tr className="border-b  transition-colors duration-150 text-sm font-semibold uppercase tracking-wide">
            <th className="px-6 py-4 text-left">Question</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Updated</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((faq) => (
            <tr
              key={faq.id}
              className="border-b hover:bg-gray-800/50 transition-colors duration-150"
            >
              <td className="px-6 py-4 text-left">{faq.question}</td>
              <td className="px-6 py-4 text-left">{faq.category}</td>
              <td className="px-6 py-4 text-left">
                {faq.status ? (
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                    Inactive
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-left">{faq.updated}</td>
              <td className="px-6 py-4 text-left">
                <div className="flex gap-3">
                  <SquarePen className="hover:text-blue-400 cursor-pointer"></SquarePen>
                  <Trash2 className="hover:text-red-400 cursor-pointer"></Trash2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KnowledgeBaseTable;
