import React from "react";
import { useState, useEffect } from "react";
import {
  get_tickets,
  update_ticket_status,
} from "../../services/ticketservice";
import TicketsTable from "../../components/tickets/TicketsTable";
import { toast } from "sonner";
import ViewTicketModal from "../../components/forms/ViewTicketModal";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const handleView = (id) => {
    setSelectedTicketId(id);
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedTicketId(null);
  };
  const fetchTickets = async () => {
    try {
      const data = await get_tickets();
      setTickets(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);
  const handleStatusChange = async (id, status) => {
    console.log("Handle called", id, status);
    try {
      await update_ticket_status(id, { status });
      toast.success("Ticket status updated");
      fetchTickets();
    } catch (error) {
      toast.error("Failed to update ticket status");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <input
          type="text"
          className="bg-gray-900 w-80 hpy-2 rounded-xl border-2 border-gray-800 text-white placeholder:text-gray-500 p-2 focus:outline-none
focus:border-green-500
focus:ring-2
focus:ring-green-500/20"
          placeholder="Search Tickets ..."
        />
      </div>
      <div className="flex ">
        <TicketsTable
          data={tickets}
          onView={handleView}
          onStatusChange={handleStatusChange}
        ></TicketsTable>
      </div>
      <ViewTicketModal
        isOpen={isModalOpen}
        ticketId={selectedTicketId}
        onClose={handleClose}
      ></ViewTicketModal>
    </div>
  );
};

export default Tickets;
