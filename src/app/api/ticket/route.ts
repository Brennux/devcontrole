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

    if(!findTicket){
        return NextResponse.json({ message: "failed to update Ticket", status: 400 })
    }

    try{
        await prismaClient.ticket.update({
            where:{
                id: id as string
            },
            data:{
                status: "FECHADO"
            }
        })

        return NextResponse.json({ message: "Ticket updated successfully", status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Failed to update Ticket", status: 400 })
    }

}