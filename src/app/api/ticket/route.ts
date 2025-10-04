import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import prismaClient from "@/lib/prisma"



export async function PATCH(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await request.json()

    const findTicket = await prismaClient.ticket.findFirst({
        where: {
            id: id as string,
        }
    })

    return NextResponse.json({ message: "teste chamada" })

}