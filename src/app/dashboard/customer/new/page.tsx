import { Container } from "@/components/container/page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Form } from "../components/card/form";


export default async function NewCustomer() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }
    return (
        <Container>
            <main className="flex flex-col mt-9 mb-2">
                <div>
                    <Link href="/dashboard/customer" className="bg-gray-900 px-4 py-1 text-white rounded">
                        Voltar
                    </Link>
                    <h1 className="text-3xl font-bold">Novo Cliente</h1>
                </div>

                <Form userId={session.user.id} />

            </main>
        </Container>
    )
}