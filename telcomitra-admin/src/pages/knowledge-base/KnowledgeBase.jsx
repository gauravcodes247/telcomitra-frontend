import React, { useEffect } from "react";
import KnowledgeBaseTable from "../../components/knowledge-base/KnowledgeBaseTable";
import { useState } from "react";
import AddFAQModal from "../../components/forms/AddFAQModal";
import { getFAQs } from "../../services/knowledgebaseservices";
const KnowledgeBase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const fetchFAQs = async () => {
    try {
      const data = await getFAQs();
      console.log(data);
      setFaqs(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchFAQs();
  }, []);

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
          onClick={() => setIsModalOpen(true)}
        >
          + ADD FAQ
        </button>
      </div>
      <KnowledgeBaseTable data={faqs}></KnowledgeBaseTable>
      <AddFAQModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default KnowledgeBase;
