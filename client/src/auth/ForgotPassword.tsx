import { useState } from "react";

export function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // reset link email logic
        setSubmitted(true);
    };

    return (
        <div>
            {submitted ? (
                <p className="text-green-700 text-center">
                    If your email is in our system, you’ll receive a password reset link shortly.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                            Enter your email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#a85e3c]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#5e8c61] hover:bg-[#4b7350] text-white py-2 rounded-lg transition"
                    >
                        Send Reset Link
                    </button>
                </form>
            )}
        </div>
    );
}
