import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginForm = z.infer<typeof schema>

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginForm>({ resolver: zodResolver(schema) })

    const navigate = useNavigate()
    const [serverError, setServerError] = useState("")

    const onSubmit = async (data: LoginForm) => {
        setServerError("")
        try {
            const response = await axios.post("http://localhost:5000/users/login", data)

            if (response.status === 200) {
                navigate("/dashboard")
            }
        } catch (err: any) {
            if (err.response?.status === 401) {
                setError("password", { message: "Invalid email or password" })
            } else {
                setServerError("Server error. Please try again.")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md space-y-6"
            >
                <h2 className="text-3xl font-bold text-center text-[#3b2f2f]">Welcome Back</h2>

                {serverError && (
                    <div className="text-red-600 bg-red-100 px-4 py-2 rounded-lg text-sm">
                        {serverError}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4b2b]"
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4b2b]"
                        placeholder="••••••••"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7c4b2b] text-white py-2 rounded-lg font-semibold hover:bg-[#5e3821] transition"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}
