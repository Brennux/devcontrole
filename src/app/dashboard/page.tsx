import { Container } from "@/components/container/page"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { TicketItem } from "./components/header/ticket"
import prismaClient from "@/lib/prisma"

export default async function dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const tickets = await prismaClient.ticket.findMany({
        where: {
            userId: session.user.id,
            status: "ABERTO"
        },
        include: {
            customer: true
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Chamados</h1>
                    <Link href="/dashboard/new" className="bg-blue-500 px-4 py-2 rounded text-white">
                        Abrir Chamado
                    </Link>
                </div>


                <table className="min-w-full my-2">
                    <thead>
                        <tr>
                            <th className="font-medium text-left pl-1">CLIENTE</th>
                            <th className="font-medium text-left hidden sm:block">DATA CADASTRO</th>
                            <th className="font-medium text-left">STATUS</th>
                            <th className="font-medium text-left">#</th>
                        </tr>
                    </thead>

                    <tbody>
                      { tickets.map(ticket => (
                        <TicketItem key={ticket.id} ticket={ticket} customer={ticket.customer} />
                      )) }
                    </tbody>
                </table>
            </main>
        </Container>
    )
}