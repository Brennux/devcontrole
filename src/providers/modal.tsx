"use client"

import { createContext, ReactNode, useState } from "react"
import { TicketType } from "@/utils/tiket.type"
import { Customer } from "@/utils/customer.type"
import { Modal } from "@/components/modal"

interface ModalContextType {
    visible: boolean
    handleModalVisible: () => void
    ticket?: TicketInfo | undefined
    setDetailTicket: (detail: TicketInfo) => void
}

interface TicketInfo {
    ticket: TicketType
    customer: Customer | null
}

export const ModalContext = createContext({} as ModalContextType)

export const ModalProvider = ({ children }: { children: ReactNode }) => {

    const [visible, setVisible] = useState(false);
    const [ticket, setTicket] = useState<TicketInfo>()

    function handleModalVisible() {
        setVisible(!visible)
    }

    function setDetailTicket(detail: TicketInfo) {
        setTicket(detail)
    }

    return (
        <ModalContext.Provider value={{ visible, handleModalVisible, ticket, setDetailTicket }}>
            {visible && <Modal />}
            {/* // Renderiza o modal quando 'visible' é true */}
            {children}
        </ModalContext.Provider>
    )
}