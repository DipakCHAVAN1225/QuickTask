export default function HowItWorks(){
  return (
    <section id="how" className="bg-white/60 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-semibold">1</div>
          <div className="mt-3 font-medium">Choose a service</div>
          <p className="mt-2 text-sm text-gray-600">Tell us what you need — cleaning, repair, or installation.</p>
        </div>
        <div className="text-center p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-semibold">2</div>
          <div className="mt-3 font-medium">Pick a pro</div>
          <p className="mt-2 text-sm text-gray-600">Compare ratings, prices and choose the best professional.</p>
        </div>
        <div className="text-center p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-semibold">3</div>
          <div className="mt-3 font-medium">Schedule & pay</div>
          <p className="mt-2 text-sm text-gray-600">Book instantly and pay online with secure options.</p>
        </div>
      </div>
    </section>
  )
}
