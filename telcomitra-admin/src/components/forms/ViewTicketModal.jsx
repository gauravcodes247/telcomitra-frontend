import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { get_ticket_by_id } from "../../services/ticketservice";

const ViewTicketModal = ({ isOpen, ticketId, onClose }) => {
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTicket = async () => {
    try {
      setLoading(true);
      const data = await get_ticket_by_id(ticketId);
      setTicket(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen || !ticketId) return;
    fetchTicket();
  }, [isOpen, ticketId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Ticket Details</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {loading ? (
            <div className="py-12 text-center text-gray-400">Loading...</div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="mb-1 text-sm text-gray-400">Ticket Number</p>

                  <p className="font-medium text-white">
                    {ticket?.ticket_number}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-400">Status</p>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                    {ticket?.status}
                  </span>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-400">Name</p>

                  <p className="text-white">{ticket?.name}</p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-400">Email</p>

                  <p className="text-white">{ticket?.email}</p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-400">Phone</p>

                  <p className="text-white">{ticket?.phone}</p>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Subject</p>

                <div className="rounded-xl border border-gray-800 bg-gray-950 p-3 text-white">
                  {ticket?.subject}
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Message</p>

                <div className="min-h-32 rounded-xl border border-gray-800 bg-gray-950 p-3 text-white whitespace-pre-wrap">
                  {ticket?.message}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t border-gray-800 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTicketModal;
