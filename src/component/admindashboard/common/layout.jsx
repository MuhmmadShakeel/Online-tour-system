import { useState } from "react";
import GlobalSidebar from "./Sidebar";
import GlobalTopbar from "./Topbar";
import { LogOut, User, Settings, LayoutDashboard, Map, Star, Users } from "lucide-react";

const ADMIN_MENU_ITEMS = [
  { name: "Overview", href: "/admin/overview", icon: LayoutDashboard },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Tours", href: "/admin/tours", icon: Map },
  { name: "Review", href: "/admin/review", icon: Star },
  { name: "Setting", href: "/admin/setting", icon: Settings },
  { name: "User", href: "/admin/user", icon: Users },
];

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const adminProfile = {
    name: "Admin",
    initials: "OT",
    subtext: "OTMS Manager",
  };

  const adminDropdownItems = [
    { label: "Profile Settings", icon: User, href: "/admin/settings" },
    { label: "Security", icon: Settings, href: "/admin/settings" },
    { 
      label: "Sign Out", 
      variant: "danger", 
      icon: LogOut,
      onClick: () => {
        console.log("Sign out clicked");
        window.location.href = "/";
      }
    },
  ];

  return (
    <div className={`flex min-h-screen bg-gray-50 overflow-x-hidden ${collapsed ? "lg:pl-20" : "lg:pl-72"}`}>
      
      {/* Sidebar */}
      <GlobalSidebar 
        open={open} 
        setOpen={setOpen} 
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        menuItems={ADMIN_MENU_ITEMS}
        portalName="Admin"
        showHelpSection={true}
      />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300`}>
        
        {/* Topbar */}
        <GlobalTopbar 
          onMenuClick={() => setOpen(true)} 
          collapsed={collapsed} 
          userProfile={adminProfile}
          dropdownItems={adminDropdownItems}
        />

        {/* Page Content */}
        <main className="mt-16 p-4 sm:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
