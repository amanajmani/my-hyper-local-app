import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import { AuthProvider } from "../../AuthContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //   <AuthProvider>
    //     <SidebarProvider className="justify-center">
    //     <div className="flex min-h-screen">
    //       <AppSidebar />
    //       <main className="flex-1 p-6 min-w-[500px] max-w-[500px]">{children}</main>
    //       </div>
    //     </SidebarProvider>
    //     </AuthProvider>
    //   </body>
    // </html>

    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider className="justify-center">
              <AppSidebar />
              <main>
                {children}
              </main>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
