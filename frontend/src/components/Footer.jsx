export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <div className="text-xl font-bold">QuickTask</div>
          <p className="mt-2 text-sm text-gray-600">Reliable home services at the tap of a button.</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Support</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-2">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Cancellation</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm text-gray-600">support@quicktask.example</div>
          <div className="mt-4 flex gap-2 text-sm">
            <div className="p-2 border rounded-lg">Twitter</div>
            <div className="p-2 border rounded-lg">LinkedIn</div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} QuickTask — All rights reserved</div>
    </footer>
  )
}
