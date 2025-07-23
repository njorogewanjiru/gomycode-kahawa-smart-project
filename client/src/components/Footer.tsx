
export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-white px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About KahawaSmart</h3>
          <p className="text-sm">
            A smart farm management system built for coffee farmers to track operations, finances, and sustainability.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/tasks" className="hover:underline">Tasks</a></li>
            <li><a href="/inventory" className="hover:underline">Inventory</a></li>
            <li><a href="/finance" className="hover:underline">Finance</a></li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@kahawasmart.com</p>
          <p className="text-sm">Phone: +254 712 345 678</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} KahawaSmart. All rights reserved.
      </div>
    </footer>
  )
}
