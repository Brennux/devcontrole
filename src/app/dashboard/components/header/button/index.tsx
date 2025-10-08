"use client"

import { useRouter } from "next/navigation";
import { FiRefreshCcw } from "react-icons/fi";



export function Button() {

    const router = useRouter()
    return (
        <button onClick={() => router.refresh()}
        className="bg-gray-900 px-4 py-1 rounded hover:transition-colors duration-200 hover:bg-gray-700 flex items-center gap-2 text-white font-medium"
        >
            <FiRefreshCcw size={24} color="#fff" />
        </button>
    )

}
