// src/components/ServicesGrid.jsx

const services = [
  { id: 1, title: 'AC Service & Repair', price: 'From ₹499', time: '1 - 2 hrs', img: '/Static/AC_Reparing.jpg' },
  { id: 2, title: 'Home Cleaning',        price: 'From ₹299', time: '2 - 4 hrs', img: '/Static/House_Keeping.jpg' },
  { id: 3, title: 'Plumbing',             price: 'From ₹399', time: '1 - 3 hrs', img: '/Static/Plumbing.jpg' },
  { id: 4, title: 'Electrician',          price: 'From ₹199', time: '30 - 90 mins', img: '/Static/Electrician.jpg' },
];

function ServicesGrid() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Top services</h3>
        <div className="text-sm text-gray-600">Showing top results near you</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition"
          >
            <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{s.title}</h4>
                <div className="text-sm text-gray-500">{s.time}</div>
              </div>
              <div className="mt-2 text-indigo-600 font-semibold">{s.price}</div>
              <div className="mt-4 flex items-center gap-3">
                <button className="flex-1 py-2 rounded-md bg-black text-white">
                  View details
                </button>
                <button className="py-2 px-4 rounded-md bg-black text-white">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;  // default export

// -----------------------------
// CATEGORIES COMPONENT
// -----------------------------

export function Categories() {
  const items = [
    { title: "Women's Salon & Spa",            img: "/icons/women-salon.png" },
    { title: "Men's Salon & Massage",         img: "/icons/men-salon.png" },
    { title: "Cleaning & Pest Control",       img: "/icons/cleaning.png" },
    { title: "Electrician, Plumber & Carpenter", img: "/icons/electrician.png" },
    { title: "AC & Appliance Repair",         img: "/icons/ac-repair.png" },
    { title: "Native Water Purifier",         img: "/icons/water.png",  tag: "Sale" },
    { title: "Painting & Waterproofing",      img: "/icons/painting.png" },
    { title: "Native Smart Locks",           img: "/icons/locks.png",   tag: "Sale" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold leading-tight mb-8">
        Home services at your <br /> doorstep
      </h1>

      <div className="bg-white shadow rounded-2xl p-8 border">
        <h2 className="text-xl font-semibold mb-6">What are you looking for?</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center bg-gray-100 rounded-xl p-4 hover:shadow cursor-pointer transition"
            >
              {item.tag && (
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-md absolute top-2 right-2">
                  {item.tag}
                </span>
              )}

              <img src={item.img} alt={item.title} className="w-16 h-16 mb-3" />
              <p className="text-center text-gray-800 text-sm font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
