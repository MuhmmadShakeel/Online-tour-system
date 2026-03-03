import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Home,
  X,
} from "lucide-react";
import React from "react";

const SidebarItem = ({ item, isActive, collapsed, activeColor = "#237227", onClick }) => {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      onClick={onClick}
      title={collapsed ? item.name : ""}
      className={`flex items-center ${collapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3 rounded-lg text-sm font-medium transition-all duration-200
        ${
          isActive
            ? ""
            : "text-[#1D3557] hover:bg-[#1D3557]/5"
        }
      `}
      style={isActive ? { backgroundColor: `${activeColor}1a`, color: activeColor } : {}}
    >
      <Icon
        size={20}
        className={
          isActive ? "" : "text-[#1D3557]/70"
        }
        style={isActive ? { color: activeColor } : {}}
      />
      {!collapsed && <span className="truncate">{item.name}</span>}
    </Link>
  );
};

export default function GlobalSidebar({
  open,
  setOpen,
  collapsed,
  setCollapsed,
  menuItems = [],
  portalName,
  activeColor = "#237227",
  showHelpSection = false,
  footerContent,
}) {
  const { pathname } = useLocation();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full ${collapsed ? 'w-20' : 'w-72'}
        bg-white
        text-[#1D3557]
        z-50 flex flex-col
        transform transition-all duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 border-r border-gray-200 shadow-sm`}
      >
        {/* Header */}
        <div className={`h-16 shrink-0 border-b border-gray-200 flex items-center ${collapsed ? 'justify-center px-0' : 'justify-between px-6'}`}>
          {!collapsed ? (
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-[#237227] leading-none">
                OTMS<span className="text-[#FFAA00]">.</span>
              </h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                {portalName}
              </p>
            </div>
          ) : (
             <h2 className="text-xl font-extrabold tracking-tight text-[#237227]">
                O<span className="text-[#FFAA00]">.</span>
              </h2>
          )}
          
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
               <X size={20} />
            </button>
        </div>

        {/* Navigation */}
        <nav className={`flex-1 ${collapsed ? 'px-2' : 'px-4'} py-6 space-y-1 overflow-y-auto scrollbar-minimal`}>
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isActive={
                item.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(item.href)
              }
              collapsed={collapsed}
              activeColor={activeColor}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>

        {/* Floating Collapse Toggle on Right Border */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex absolute -right-3 top-8 w-6 h-6 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:text-[#237227] hover:border-[#237227] shadow-sm z-[60] transition-all group"
        >
          <ChevronRight 
            size={14} 
            className={`transition-transform duration-300 ${collapsed ? "" : "rotate-180"}`} 
          />
        </button>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200">
            {!collapsed && showHelpSection && (
              <div className="bg-[#237227]/5 p-3 rounded-xl mb-2">
                  <h4 className="text-xs font-bold text-[#237227] mb-1">Need Help?</h4>
                  <p className="text-[10px] text-[#237227]/70 mb-2">Contact our support team.</p>
                  <Link to="/contact" className="block w-full text-center py-1.5 bg-[#237227] text-white text-[10px] font-bold rounded-lg shadow-sm hover:bg-[#237227]/90 transition-all">
                      Contact Support
                  </Link>
              </div>
            )}

            {footerContent ? footerContent : (
              <Link
                to="/"
                title={collapsed ? "Back to Home" : ""}
                className={`flex items-center ${collapsed ? 'justify-center px-0' : 'gap-3 px-3'} py-2 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-[#1D3557] transition-all duration-200`}
              >
                <Home size={16} />
                {!collapsed && <span className="truncate">Back to Home</span>}
              </Link>
            )}
        </div>
      </aside>
    </>
  );
}
