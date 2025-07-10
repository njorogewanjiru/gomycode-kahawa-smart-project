import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.email || !formData.password) {
            setError("Please enter both email and password.");
            return;
        }

        // TODO: Replace with actual login request
        console.log("Logging in with:", formData);

        // Simulate login success
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5efe6] to-[#e8dccf]">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-[#3b2f2f] mb-6 text-center">
                    Login to KahawaSmart
                </h2>

                {error && (
                    <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-[#3b2f2f] mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-[#a85e3c]"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-[#3b2f2f] mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-[#a85e3c]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#a85e3c] text-white py-2 rounded-md hover:bg-[#7c4b2b] transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    <span className="text-gray-600">Forgot your password?</span>{" "}
                    <a
                        href="/forgot-password"
                        className="text-[#a85e3c] hover:underline"
                    >
                        Reset it here
                    </a>
                </div>
            </div>
        </div>
    );
}