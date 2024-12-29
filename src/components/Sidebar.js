'use client'

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { useAuth } from "../../AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { user } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log("User signed out")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleClick = (e) => {
    e.preventDefault() // Prevent default link behavior
    handleSignOut() // Sign out the user
  }

  if (!user) {
    return null // Don't display the sign out button if the user is not logged in
  }

  return (
    // <Sidebar>
    //   <SidebarContent>
    //     <SidebarGroup>
    //       {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
    //       <SidebarGroupContent>
    //         <SidebarMenu>
    //           {items.map((item) => (
    //             <SidebarMenuItem key={item.title}>
    //               <SidebarMenuButton asChild>
    //                 <a href={item.url}>
    //                   <item.icon />
    //                   <span>{item.title}</span>
    //                 </a>
    //               </SidebarMenuButton>
    //             </SidebarMenuItem>
    //           ))}
    //         </SidebarMenu>
    //       </SidebarGroupContent>
    //     </SidebarGroup>
    //   </SidebarContent>
    // </Sidebar>

    // <Sidebar>
    //   <SidebarContent>
    //     <SidebarGroup>
    //       {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
    //       {/* <SidebarGroupAction></SidebarGroupAction> */}
    //       <SidebarGroupContent>
    //         <SidebarMenu>
    //           <SidebarMenuItem>
    //             <SidebarMenuButton asChild>
    //               <SignOut />
    //             </SidebarMenuButton>
    //             <SidebarMenuButton asChild>
    //               <SignOut />
    //             </SidebarMenuButton>
    //           </SidebarMenuItem>
    //         </SidebarMenu>
    //       </SidebarGroupContent>
    //     </SidebarGroup>
    //   </SidebarContent>
    // </Sidebar>


    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <a
    href="#"
    onClick={handleClick}
  >
    <Inbox />
    <span>Sign Out</span>
  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
