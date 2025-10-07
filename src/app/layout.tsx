import type { Metadata } from "next";
import "./globals.css";
import { Header} from "@/components/header/page";
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";


export const metadata: Metadata = {
  title: "Dev Controle -seu sistema de gerenciamento",
  description: "Gerencie seu sistema de forma eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthProvider>
          <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
