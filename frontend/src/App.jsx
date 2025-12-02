import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ServicesGrid from './components/ServicesGrid'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen bg-gray-50 text-gray-800">
<Navbar />
<main>
<Hero />
<Categories />
<ServicesGrid />
<HowItWorks />
<Testimonials />
</main>
<Footer />
</div>
)
}


// ---------------------------
// Inline SVG ICON HELPERS (Reusable icons)
// ---------------------------
export const IconUser = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
<path d="M12 20v-2a4 4 0 0 0-3-3.87" />
<circle cx="10" cy="6" r="4" />
</svg>
);


export const IconSearch = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
<circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>
);


export const IconMapPin = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M12 21s-6-5-6-10a6 6 0 0 1 12 0c0 5-6 10-6 10z" />
<circle cx="12" cy="11" r="2" />
</svg>
);


export const IconStar = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" stroke="none">
<path d="M12 17.3l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.76L5.82 21z" />
</svg>
);


export const IconPhone = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 7.27 7.27l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92z" />
</svg>
);