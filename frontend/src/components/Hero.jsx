import { IconSearch, IconMapPin, IconStar, IconPhone } from '../App'


export default function Hero(){
return (
<section className="max-w-screen-2xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-bold leading-tight">Trusted home services — on-demand, reliable, and affordable</h1>
<p className="mt-4 text-gray-600 max-w-xl">Book verified professionals for cleaning, AC repair, plumbing, electrical work and more. Transparent pricing and easy scheduling.</p>


<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex-1 flex items-center bg-white border rounded-lg px-3 py-2 shadow-sm">
<IconSearch />
<input placeholder="Search services or type of problem" className="flex-1 px-3 outline-none text-sm" />
<IconMapPin />
</div>
<button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700">Search</button>
</div>


<div className="mt-6 flex gap-4 text-sm text-gray-600">
<div className="flex items-center gap-2"><IconStar /> 4.8 (50k+)</div>
<div className="flex items-center gap-2"><IconMapPin /> Mumbai</div>
<div className="flex items-center gap-2"><IconPhone /> Support</div>
</div>
</div>


<div className="hidden md:block">
<div className="relative rounded-2xl overflow-hidden shadow-lg">
<img src="https://source.unsplash.com/800x600/?service,technician" alt="hero" className="w-full h-96 object-cover" />
<div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur p-4 rounded-lg">
<div className="text-sm font-medium">Popular</div>
<div className="text-lg font-semibold">AC Installation - ₹1,299</div>
</div>
</div>
</div>
</section>
)
}