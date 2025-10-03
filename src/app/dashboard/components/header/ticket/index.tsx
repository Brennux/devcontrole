import { Customer } from "@/utils/customer.type";
import { TicketType } from "@/utils/tiket.type";
import { FiFile, FiFileText, FiTrash2 } from "react-icons/fi";

interface TicketItemProps {
    ticket: TicketType;
    customer: Customer | null;
}

export function TicketItem({ ticket, customer }: TicketItemProps) {
    return (
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-slate-200 duration-300">
                <td className="text-left pl-1">
                    {customer?.name}
                </td>
                <td className="text-left hidden sm:table-cell">
                    {ticket.created_at?.toLocaleDateString("pt-BR")}
                </td>
                <td className="text-left">
                    <span className="bg-green-500 px-2 py-1 rounded">{ticket.status}</span>
                </td>
                <td className="text-left">
                    <button className="mr-2">
                        <FiTrash2 size={24} color="#FF3636" />
                    </button>
                    <button>
                        <FiFileText size={24} color="#3D85C6" />
                    </button>
                </td>
            </tr>
        </>
    )
}