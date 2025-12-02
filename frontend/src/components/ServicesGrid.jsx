const services = [
  { id: 1, title: 'AC Service & Repair', price: 'From ₹499', time: '1 - 2 hrs', img: 'https://source.unsplash.com/600x400/?air-conditioner' },
  { id: 2, title: 'Home Cleaning', price: 'From ₹299', time: '2 - 4 hrs', img: 'https://source.unsplash.com/600x400/?home-cleaning' },
  { id: 3, title: 'Plumbing', price: 'From ₹399', time: '1 - 3 hrs', img: 'https://source.unsplash.com/600x400/?plumbing' },
  { id: 4, title: 'Electrician', price: 'From ₹199', time: '30 - 90 mins', img: 'https://source.unsplash.com/600x400/?electrician' },
]

export default function ServicesGrid(){
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Top services</h3>
        <div className="text-sm text-gray-600">Showing top results near you</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition">
            <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{s.title}</h4>
                <div className="text-sm text-gray-500">{s.time}</div>
              </div>
              <div className="mt-2 text-indigo-600 font-semibold">{s.price}</div>
              <div className="mt-4 flex items-center gap-3">
                <button className="flex-1 py-2 rounded-md border hover:bg-indigo-50">View details</button>
                <button className="py-2 px-4 rounded-md bg-indigo-600 text-white">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
