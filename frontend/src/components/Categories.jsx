const categories = ['Cleaning', 'AC', 'Plumbing', 'Electrical', 'Salon', 'Pest Control', 'Carpentry']

export default function Categories(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Browse by category</h3>
        <a href="#" className="text-sm text-indigo-600">See all</a>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((c) => (
          <div key={c} className="min-w-[140px] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="text-sm text-gray-500">{c}</div>
            <div className="mt-2 font-medium">Expert pros</div>
          </div>
        ))}
      </div>
    </section>
  )
}
