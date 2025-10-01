import { Container } from "@/components/container/page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "./components/card";
import prismaClient from "@/lib/prisma";


export default async function Customer() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const customers = await prismaClient.customer.findMany({ // traz todos os clientes que pertencem ao usuario logado
        where: {
            userId: session.user.id
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Meus Clientes</h1>
                    <Link href="/dashboard/customer/new" className="bg-blue-500 px-4 py-1 rounded text-white">
                        Novo Cliente
                    </Link>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {customers.map(customer => (
                        <Card
                            key={customer.id}
                            customer={customer}
                        />
                    ))}
                </section>

                {customers.length === 0 && (
                    <h1 className="text-gray-500">Nenhum cliente encontrado</h1>
                )}
            </main>
        </Container>
    )
}