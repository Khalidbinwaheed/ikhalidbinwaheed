import { 
  LayoutDashboard, BedDouble, CalendarDays, Users, 
  UserCog, Receipt, MessageSquare, Settings, 
  Search, Bell, Moon, Sun, MoreHorizontal 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useState } from 'react';
import adminAvatar from '../assets/admin_avatar.png';

const revenueData = [
  { name: 'Jan', revenue: 12500 },
  { name: 'Feb', revenue: 14000 },
  { name: 'Mar', revenue: 16000 },
  { name: 'Apr', revenue: 18000 },
  { name: 'May', revenue: 19500 },
];

const occupancyData = [
  { name: 'Mon', standard: 65, deluxe: 45, suite: 30 },
  { name: 'Tue', standard: 70, deluxe: 50, suite: 35 },
  { name: 'Wed', standard: 75, deluxe: 60, suite: 40 },
  { name: 'Thu', standard: 82, deluxe: 65, suite: 45 },
  { name: 'Fri', standard: 95, deluxe: 80, suite: 60 },
  { name: 'Sat', standard: 98, deluxe: 85, suite: 70 },
  { name: 'Sun', standard: 90, deluxe: 70, suite: 55 },
];

export function HotelDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex min-h-screen font-sans ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              <BedDouble className="w-5 h-5" />
            </div>
            <h1 className="font-bold leading-tight">Feather Group of<br />hotels</h1>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
          <NavItem icon={<BedDouble />} label="Rooms" />
          <NavItem icon={<CalendarDays />} label="Reservations" />
          <NavItem icon={<Users />} label="Guests" />
          <NavItem icon={<UserCog />} label="Staff" />
          <NavItem icon={<Receipt />} label="Billing" />
          <NavItem icon={<MessageSquare />} label="Messages" />
          <NavItem icon={<Settings />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        
        {/* Topbar */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
              />
            </div>
            
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

             <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>

            <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                <img src={adminAvatar} alt="Admin" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm">
                <p className="font-bold">Khalid</p>
                <p className="text-gray-500 text-xs">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Rooms" 
            value="120" 
            subtext="5 under maintenance" 
            icon={<BedDouble />} 
            trend="neutral"
          />
          <StatCard 
            title="Occupancy Rate" 
            value="78%" 
            subtext="+12% vs last week" 
            icon={<LayoutDashboard />} 
            trend="up"
          />
           <StatCard 
            title="Total Reservations" 
            value="35" 
            subtext="+5% today" 
            icon={<CalendarDays />} 
            trend="up"
          />
           <StatCard 
            title="Guests In-House" 
            value="94" 
            subtext="-3% vs yesterday" 
            icon={<Users />} 
            trend="down"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Revenue Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Revenue Overview</h3>
                <p className="text-sm text-gray-500">Monthly revenue for the last 5 months</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="revenue" fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Occupancy Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Weekly Occupancy</h3>
                <p className="text-sm text-gray-500">Room type occupancy percentage</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
             <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={occupancyData}>
                  <defs>
                    <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDeluxe" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                     <linearGradient id="colorSuite" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Area type="monotone" dataKey="standard" stroke="#0EA5E9" strokeWidth={2} fillOpacity={1} fill="url(#colorStandard)" />
                  <Area type="monotone" dataKey="deluxe" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorDeluxe)" />
                  <Area type="monotone" dataKey="suite" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#colorSuite)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
             <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Standard</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Deluxe</div>
                 <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Suite</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${active ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
      {icon}
      <span>{label}</span>
    </a>
  );
}

function StatCard({ title, value, subtext, icon, trend }: { title: string, value: string, subtext: string, icon: any, trend: 'up' | 'down' | 'neutral' }) {
    const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-500';
    
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
                    <div className="text-3xl font-bold">{value}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                   {icon}
                </div>
            </div>
            <p className={`text-xs font-medium ${trendColor}`}>
                {subtext}
            </p>
        </div>
    )
}
