import { Link, Outlet, useLocation } from "react-router";

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-medium">sckmyenglish</span>
            </Link>
            
            <div className="flex space-x-8">
              <Link
                to="/answers"
                className={`px-3 py-2 transition-colors ${
                  isActive("/answers")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Ответы
              </Link>
              <Link
                to="/useful"
                className={`px-3 py-2 transition-colors ${
                  isActive("/useful")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Полезное
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}