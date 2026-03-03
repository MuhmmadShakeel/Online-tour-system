import React from "react";
import { 
  Users, 
  Map, 
  Star, 
  TrendingUp, 
} from "lucide-react";
import StatCard from "../component/admindashboard/overview/StatCard";
import ActivityItem from "../component/admindashboard/overview/ActivityItem";
import PerformanceCard from "../component/admindashboard/overview/PerformanceCard";

export default function OverviewPage() {
  const stats = [
    { title: "Total Users", value: "2,543", icon: Users, trend: "up", trendValue: "12%", color: "green" },
    { title: "Active Tours", value: "48", icon: Map, trend: "up", trendValue: "5%", color: "blue" },
    { title: "Total Reviews", value: "1,205", icon: Star, trend: "up", trendValue: "18%", color: "yellow" },
    { title: "Growth Rate", value: "24.5%", icon: TrendingUp, trend: "down", trendValue: "2%", color: "purple" },
  ];

  const recentActivities = [
    { title: "New user registered: Ahmed Raza", time: "2 minutes ago", status: "Completed", type: "user" },
    { title: "Tour booked: Northern Pakistan Expedition", time: "45 minutes ago", status: "Pending", type: "tour" },
    { title: "Review received for 'Skardu Valley Tour'", time: "2 hours ago", status: "Completed", type: "review" },
    { title: "Tour cancelled: Hunza Valley 7-Day Trip", time: "5 hours ago", status: "Cancelled", type: "tour" },
    { title: "User updated profile: Sarah Khan", time: "Yesterday", status: "Completed", type: "user" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 text-sm">Welcome back! Here's what's happening with OTMS today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <button className="text-[#237227] text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-slate-50">
            {recentActivities.map((activity, i) => (
              <ActivityItem key={i} {...activity} />
            ))}
          </div>
        </div>

        {/* Quick Stats / Performance */}
        <PerformanceCard />
      </div>
    </div>
  );
}
