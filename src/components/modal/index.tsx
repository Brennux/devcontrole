"use client"

import { ModalContext } from "@/providers/modal"
import { useContext, useRef, MouseEvent } from "react"

export function Modal() {

    const { handleModalVisible, ticket } = useContext(ModalContext)
    const modalRef = useRef<HTMLDivElement>(null)

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleModalVisible()
        }
    }

    return (
        <div className="absolute bg-gray-900/80 w-full min-h-screen" onClick={handleModalClick}>
            <div className="absolute inset-0 flex items-center justify-center">

                <div ref={modalRef} className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl rounded-lg">

                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h1 className="font-bold text-lg md:text-2xl text-gray-800">Detalhes do chamado</h1>
                        <button className="bg-red-500 hover:bg-red-600 p-2 px-4 text-white rounded-md transition-colors" onClick={handleModalVisible}>
                            Fechar
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center">
                                <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0">Nome:</h2>
                                <p className="text-gray-800 font-medium">{ticket?.customer?.name}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start">
                                <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0 mt-1">Descrição:</h2>
                                <p className="text-gray-800 leading-relaxed">{ticket?.ticket.description}</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <h1 className="font-bold text-lg text-gray-800 mb-6 text-center">Informações do Cliente</h1>

                            <div className="grid gap-3">
                                <div className="flex items-center py-2 px-4 bg-gray-50 rounded">
                                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0">Nome:</h2>
                                    <p className="text-gray-800 font-medium">{ticket?.customer?.name}</p>
                                </div>

                                <div className="flex items-center py-2 px-4 bg-gray-50 rounded">
                                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0">Telefone:</h2>
                                    <p className="text-blue-600 font-medium">{ticket?.customer?.phone}</p>
                                </div>

                                <div className="flex items-center py-2 px-4 bg-gray-50 rounded">
                                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0">Email:</h2>
                                    <p className="text-blue-600 font-medium">{ticket?.customer?.email}</p>
                                </div>

                                {ticket?.customer?.address && (
                                    <div className="flex items-start py-2 px-4 bg-gray-50 rounded">
                                        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide w-28 flex-shrink-0 mt-1">Endereço:</h2>
                                        <p className="text-gray-800 font-medium">{ticket?.customer?.address}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}