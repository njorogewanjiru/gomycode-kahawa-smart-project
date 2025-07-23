import { FaSeedling, FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa";

export function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{ backgroundImage: "url('/coffee-drying.jpg')" }}
    >
      <div className="max-w-5xl mx-auto text-[#3b2f2f] space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">About KahawaSmart</h1>
          <p className="text-lg md:text-xl">
            Empowering coffee farmers through digital innovation 🌱
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>KahawaSmart</strong> is a digital coffee farm management system designed to
            help farmers in Kenya and beyond simplify complex operations, boost productivity,
            and improve traceability from seed to cup.
          </p>
          <p>
            Our platform allows farmers to monitor records, manage financials, train staff,
            analyze yields, and connect with buyers — all in one place.
          </p>
          <p>
            Inspired by Kenya’s rich agricultural legacy, we’re bridging the gap between
            traditional practices and modern technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-[1.02] transition">
            <FaSeedling className="text-4xl text-emerald-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Empowering Farmers</h2>
            <p>Digital tools to manage your farm smarter — from anywhere, anytime.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-[1.02] transition">
            <FaChartLine className="text-4xl text-emerald-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Boosting Productivity</h2>
            <p>Track performance, manage inputs, and increase yields effectively.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-[1.02] transition">
            <FaLightbulb className="text-4xl text-emerald-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Smart Decisions</h2>
            <p>Use analytics to guide your choices and optimize your farming process.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-[1.02] transition">
            <FaHandshake className="text-4xl text-emerald-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Connecting Communities</h2>
            <p>Collaborate with buyers, cooperatives, and suppliers for greater value.</p>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-lg leading-relaxed font-semibold text-center pt-6">
          Together, let’s grow smarter — one coffee tree at a time. 🌱☕
        </p>
      </div>
    </div>
  );
}
