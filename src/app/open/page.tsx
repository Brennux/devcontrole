"use client"

import { Input } from "@/components/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { use, useState } from "react"
import { useForm } from "react-hook-form"
import { FiSearch } from "react-icons/fi"
import z from "zod"

const schema = z.object({
    email: z.string().email("Email inválido").min(3, "Mínimo 3 caracteres").max(255, "Máximo 255 caracteres"),
})

type FormData = z.infer<typeof schema>

interface CustomerDataInfo {
    id: string;
    name: string;
}

export default function OpenTicket() {
    const [customer, setCustomer] = useState<CustomerDataInfo | null>(null)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    return (
        <div className="w-full max-w-2xl mx-auto px-2">
            <h1 className="font-bold text-3xl text-center mt-24">Abrir Chamado</h1>

            <main className="flex flex-col mt-4 mb-2">
                {customer ? (
                    <div>

                    </div>
                ) : (
                    <form className="bg-slate-200 py-6 px-2 rounded border-2">
                        <div className="flex flex-col gap-3">
                            <Input
                                name="email"
                                placeholder="Digite seu email"
                                type="text"
                                error={errors.email?.message}
                                register={register}

                            />

                            <button className="bg-blue-500 flex flex-row gap-3 px-2 h-11 items-center justify-center rounded text-white font-bold">
                                Procurar Cliente
                                <FiSearch size={24} color="#fff" />
                            </button>
                        </div>
                    </form>
                )}
            </main>
        </div>
    )
}