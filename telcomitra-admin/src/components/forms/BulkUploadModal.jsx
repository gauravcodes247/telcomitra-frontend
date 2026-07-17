import { X } from "lucide-react";
import { useState } from "react";
import { uploadFAQs } from "../../services/knowledgebaseservices";
import { toast } from "sonner";
import {
  FileSpreadsheet,
  CircleCheckBig,
  HardDrive,
  Upload,
} from "lucide-react";
const BulkUploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    try {
      setIsUploading(true);
      const response = await uploadFAQs(selectedFile);

      await onUploadSuccess();
      toast.success(response.message);
      onClose();
      setSelectedFile(null);
      console.log(response);
    } catch (e) {
      console.log(e);
      toast.error("Upload Failed");
    } finally {
      setIsUploading(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-full max-w-lg rounded-xl bg-gray-900 border border-gray-800 p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-white">
            Upload Knowledge Base
          </h2>

          <X
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-white"
          />
        </div>

        <input
          type="file"
          accept=".xlsx"
          className="hidden"
          id="excel-upload"
          onChange={handleFileChange}
        />
        {selectedFile ? (
          <div className="rounded-xl border border-green-500/30 bg-gray-900 p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-green-500/10 p-3">
                <FileSpreadsheet className="h-8 w-8 text-green-400" />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-white break-all">
                  {selectedFile.name}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-green-400">
                  <CircleCheckBig size={16} />
                  <span>Ready to upload</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <HardDrive size={16} />
                  <span>{(selectedFile.size / 1024).toFixed(2)} KB</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-green-700 active:scale-95"
            >
              <Upload size={18} />
              Upload Excel
            </button>
          </div>
        ) : (
          <label
            htmlFor="excel-upload"
            className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-700 hover:border-green-500 transition"
          >
            <p className="text-white font-medium">
              Click to choose an Excel file
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Only .xlsx files are supported
            </p>
          </label>
        )}
      </div>
    </div>
  );
};

export default BulkUploadModal;
