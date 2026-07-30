import React, { useEffect } from "react";
import KnowledgeBaseTable from "../../components/knowledge-base/KnowledgeBaseTable";
import { useState } from "react";
import FAQModal from "../../components/forms/FAQModal";
import BulkUploadModal from "../../components/forms/BulkUploadModal";
import { getFAQs } from "../../services/knowledgeBaseServices";
import DeleteFAQModal from "../../components/forms/DeleteFAQModal";
import { deleteFAQ } from "../../services/knowledgeBaseServices";
import { toast } from "sonner";
const KnowledgeBase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const fetchFAQs = async () => {
    try {
      const data = await getFAQs();
      setFaqs(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchFAQs();
  }, []);
  const handleDelete = async () => {
    try {
      if (!selectedFAQ) return;
      await deleteFAQ(selectedFAQ.id);

      toast.success("FAQ deleted successfully");

      setIsDeleteModalOpen(false);
      setSelectedFAQ(null);

      fetchFAQs();
    } catch {
      toast.error("Failed to delete FAQ");
    }
  };
  const handleDeleteClick = (faq) => {
    setSelectedFAQ(faq);
    setIsDeleteModalOpen(true);
  };
  const handleEditClick = (faq) => {
    setMode("edit");
    setSelectedFAQ(faq);
    setIsModalOpen(true);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        {/* <input
          type="text"

          className="bg-gray-900 w-80 hpy-2 rounded-xl border-2 border-gray-800 text-white placeholder:text-gray-500 p-2 focus:outline-none
focus:border-green-500
focus:ring-2
focus:ring-green-500/20"
          placeholder="Search FAQ ..."
        /> */}
        <div className="flex gap-5">
          <button
            className="px-4 py-2
rounded-lg bg-green-600 text-white font-medium transition-all duration-200
hover:bg-green-700
hover:shadow-lg
active:scale-95"
            onClick={() => setIsUploadModalOpen(true)}
          >
            + Upload Excel
          </button>
          <button
            className="px-4 py-2
rounded-lg bg-green-600 text-white font-medium transition-all duration-200
hover:bg-green-700
hover:shadow-lg
active:scale-95"
            onClick={() => {
              setMode("add");
              setSelectedFAQ(null);
              setIsModalOpen(true);
            }}
          >
            + ADD FAQ
          </button>
        </div>
      </div>
      <KnowledgeBaseTable
        data={faqs}
        onDelete={handleDeleteClick}
        onEdit={handleEditClick}
      ></KnowledgeBaseTable>
      <FAQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUploadSuccess={fetchFAQs}
        mode={mode}
        faq={selectedFAQ}
      />
      <BulkUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadSuccess={fetchFAQs}
      />
      <DeleteFAQModal
        isOpen={isDeleteModalOpen}
        faq={selectedFAQ}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedFAQ(null);
        }}
        onConfirm={handleDelete}
      ></DeleteFAQModal>
    </div>
  );
};

export default KnowledgeBase;
