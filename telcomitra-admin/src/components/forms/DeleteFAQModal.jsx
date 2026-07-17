import React from "react";
import { X, TriangleAlert } from "lucide-react";

const DeleteFAQModal = ({ isOpen, faq, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-500/20 p-2">
              <TriangleAlert className="h-5 w-5 text-red-400" />
            </div>

            <h2 className="text-lg font-semibold text-white">Delete FAQ</h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          <p className="text-gray-300">
            Are you sure you want to delete this FAQ?
          </p>

          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
            <p className="font-medium text-red-300">{faq?.question}</p>
          </div>

          <p className="text-sm text-gray-500">This action cannot be undone.</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-800 p-5">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-700 px-4 py-2 text-gray-300 transition hover:bg-gray-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Delete FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFAQModal;
