import { useState } from "react";

export function RegisterClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 🚀 Send registration data to backend here
        console.log("Registering client:", formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-[#3b2f2f] mb-1">Full Name</label>
                    <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#a85e3c]"
                    />
                </div>

                <div>
                    <label className="block text-sm text-[#3b2f2f] mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#a85e3c]"
                    />
                </div>

                <div>
                    <label className="block text-sm text-[#3b2f2f] mb-1">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#a85e3c]"
                    />
                </div>

                <div>
                    <label className="block text-sm text-[#3b2f2f] mb-1">Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#a85e3c]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#5e8c61] hover:bg-[#4b7350] text-white py-2 rounded-lg transition"
                >
                    Register as Client
                </button>
            </form>
        </div>
    );
}
