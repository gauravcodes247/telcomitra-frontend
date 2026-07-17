import React from "react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { createFAQ, updateFAQ } from "../../services/knowledgebaseservices";

const FAQModal = ({ isOpen, onClose, mode, faq, onUploadSuccess }) => {
  const INITIAL_FORM = {
    question: "",
    answer: "",
    keywords: "",
    category: "",
    is_active: true,
  };
  const [formData, setFormData] = useState(INITIAL_FORM);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode == "add") {
        await createFAQ(formData);
        setFormData(INITIAL_FORM);
        onClose();
        onUploadSuccess();
      } else {
        await updateFAQ(faq.id, formData);
        setFormData(INITIAL_FORM);
        onClose();
        onUploadSuccess();
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
  useEffect(() => {
    if (mode === "edit" && faq) {
      setFormData({
        question: faq.question,
        answer: faq.answer,
        keywords: faq.keywords,
        category: faq.category,
        is_active: faq.is_active,
      });
    } else {
      setFormData(INITIAL_FORM);
    }
  }, [mode, faq]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 overflow-y-auto">
      <div className="w-full max-w-3xl rounded-xl bg-gray-900 border border-gray-800 shadow-xl p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              {mode === "add" ? "Add FAQ" : "Edit FAQ"}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {mode === "add" ? "Create FAQ" : "Edit existing FAQ"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-800 transition-colors"
          >
            <X className="text-gray-400 hover:text-red-400" />
          </button>
        </div>

        {/* Form */}
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          {/* Question */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Question
            </label>

            <input
              type="text"
              placeholder="Enter question"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
          </div>

          {/* Answer */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Answer
            </label>

            <textarea
              rows={4}
              placeholder="Enter answer"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Keywords
            </label>

            <input
              type="text"
              placeholder="telecom, nsqf, jobs"
              name="keywords"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
              value={formData.keywords}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Category
            </label>

            <input
              type="text"
              placeholder="General"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:border-green-500 focus:outline-none"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* Active */}
          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4" />

            <label className="text-gray-300">Active</label>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-700 px-5 py-2 text-gray-300 transition-colors hover:bg-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-green-600 px-5 py-2 text-white transition-colors hover:bg-green-700"
            >
              Save FAQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FAQModal;
