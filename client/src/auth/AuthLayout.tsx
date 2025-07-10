import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-[#3b2f2f] mb-4 text-center">KahawaSmart</h1>
                <Outlet />
            </div>
        </div>
    );
}
