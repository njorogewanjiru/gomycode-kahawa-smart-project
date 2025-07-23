import React, { useEffect, useState } from "react";

export default function Profile() {
  const mockUser = { name: "Zack", email: "zack@example.com", role: "Farmer" };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    role: ""
  });

  useEffect(() => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      role: mockUser.role,
      password: "",
      newPassword: ""
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.newPassword) {
      alert("All password fields are required.");
      return;
    }
    // Add password change logic here
    alert("Password updated successfully!");
  };

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        backgroundImage: "url('/coffee-harvesting.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-8">User Profile</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Personal Info Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#4b382a] mb-4">Personal Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-[#3b2f2f]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#ccc] p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-[#3b2f2f]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#ccc] p-2 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#4b382a] mb-4">Security</h2>
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-[#3b2f2f]">
                Current Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-[#ccc] p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-[#3b2f2f]">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full border border-[#ccc] p-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#7c4b2b] text-white px-4 py-2 rounded-md hover:bg-[#5e3822]"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Role Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-[#4b382a] mb-4">User Role</h2>
          <p className="text-[#3b2f2f]">
            Your role in the farm is: <span className="font-medium">{formData.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
