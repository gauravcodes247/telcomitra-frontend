import React from "react";
import KnowledgeBaseTable from "../../components/knowledge-base/KnowledgeBaseTable";
const KnowledgeBase = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-gray-900 w-80 hpy-2 rounded-xl border-2 border-gray-800 text-white placeholder:text-gray-500 p-2 focus:outline-none
focus:border-green-500
focus:ring-2
focus:ring-green-500/20"
          placeholder="Search FAQ ..."
        />
        <button
          className="px-4 py-2
rounded-lg bg-green-600 text-white font-medium transition-all duration-200
hover:bg-green-700
hover:shadow-lg
active:scale-95"
        >
          + ADD FAQ
        </button>
      </div>
      <KnowledgeBaseTable></KnowledgeBaseTable>
    </div>
  );
};

export default KnowledgeBase;
