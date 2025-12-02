export default function Testimonials(){
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6">What customers say</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i)=> (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">U</div>
              <div>
                <div className="font-medium">User {i}</div>
                <div className="text-sm text-gray-500">Verified customer</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Great service, punctual and professional. Pricing was fair and the pro fixed the issue quickly.</p>
          </div>
        ))}
      </div>
    </section>
  )
}