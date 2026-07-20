import React from "react";
import { Ticket } from "lucide-react";
import { theme } from "../../constants/theme";
const RaiseTicketBanner = ({ onClick }) => {
  return (
    <div
      className="mx-4 mt-3 rounded-xl border p-3"
      style={{
        borderColor: `${theme.colors.secondary}33`,
        backgroundColor: `${theme.colors.secondary}1A`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="rounded-full p-2"
          style={{
            backgroundColor: `${theme.colors.secondary}33`,
          }}
        >
          <Ticket
            size={18}
            style={{
              color: theme.colors.secondary,
            }}
          />
        </div>

        <div className="flex-1">
          <h3
            className="text-sm font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Need Human Support?
          </h3>

          <p
            className="mt-1 text-xs"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            Raise a support ticket and our team will get back to you.
          </p>

          <button
            onClick={onClick}
            className="mt-3 w-full rounded-lg px-3 py-2 text-sm font-medium text-white transition"
            style={{
              backgroundColor: theme.colors.secondary,
            }}
          >
            Raise a Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicketBanner;
