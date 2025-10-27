import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { 
  FaChartLine, 
  FaCar, 
  FaUsers, 
  FaReceipt, 
  FaCog,
  FaHome
} from "react-icons/fa";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const isAdmin = true;

  if (!isAdmin) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0C142E] text-white">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        
        <nav className="mt-8">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            <FaChartLine />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/admin/cars"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            <FaCar />
            <span>Cars Management</span>
          </Link>
          
          <Link
            to="/admin/users"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            <FaUsers />
            <span>Users</span>
          </Link>
          
          <Link
            to="/admin/orders"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            <FaReceipt />
            <span>Orders</span>
          </Link>
          
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            <FaCog />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <FaHome />
              <span>Back to Site</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.emailAddresses[0].emailAddress}</span>
            <UserButton />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

