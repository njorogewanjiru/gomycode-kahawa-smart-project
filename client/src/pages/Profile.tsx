export function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf6] to-[#e2dbd2] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">User Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-1">👤 Personal Info</h2>
          <p className="text-[#3b2f2f]">
            View and update your name, email, and phone number.
          </p>
          {/* 📌 Profile edit form component here */}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-1">🔐 Security</h2>
          <p className="text-[#3b2f2f]">
            Change your password or manage login credentials securely.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-1">🏷️ User Role</h2>
          <p className="text-[#3b2f2f]">
            You are currently logged in as <strong>Farmer</strong> / <strong>Worker</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
