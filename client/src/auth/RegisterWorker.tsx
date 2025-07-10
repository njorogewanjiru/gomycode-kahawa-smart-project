import { useState } from "react";

export function RegisterWorker() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        farmCode: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 🧑🏽‍🌾 Submit worker registration to backend
        console.log("Registering worker:", formData);
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
                    <label className="block text-sm text-[#3b2f2f] mb-1">Farm Code</label>
                    <input
                        name="farmCode"
                        required
                        value={formData.farmCode}
                        onChange={handleChange}
                        placeholder="Provided by farm owner"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#a85e3c]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#5e8c61] hover:bg-[#4b7350] text-white py-2 rounded-lg transition"
                >
                    Register as Worker
                </button>
            </form>
        </div>
    );
}
