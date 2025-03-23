import Image from 'next/image';
import Link from 'next/link';

const locationHighlights = [
  {
    category: 'Connectivity',
    items: [
      'Close proximity to Eastern Express Highway',
      'Easy access to Thane Railway Station',
      'Near upcoming Metro stations',
      'Well-connected to BKC and South Mumbai'
    ]
  },
  {
    category: 'Education',
    items: [
      'Prestigious schools within 3-5 km radius',
      'Renowned colleges and universities nearby',
      'Educational hubs in close vicinity'
    ]
  },
  {
    category: 'Healthcare',
    items: [
      'Multi-specialty hospitals in the neighborhood',
      'Clinics and diagnostic centers nearby',
      'Emergency medical facilities in close proximity'
    ]
  },
  {
    category: 'Shopping & Entertainment',
    items: [
      'Premium shopping malls within 2-3 km',
      'Multiplexes and entertainment zones',
      'Fine dining restaurants and cafes',
      'Supermarkets and convenience stores'
    ]
  }
];

export default function Location() {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Prime Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located at Teen Hath Naka, Thane with excellent connectivity to major hubs
          </p>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#2d7d2d' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="relative h-[500px] w-full">
                <Image 
                  src="/Loc.jpeg" 
                  alt="Adani Location Map" 
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <Link 
                href="https://maps.app.goo.gl/ApVmA3z1fMSzJgv57" 
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                <span>View on Google Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why This Location?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strategic location at the heart of Thane</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Excellent connectivity to major business districts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proximity to social infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Rapidly developing neighborhood with appreciation potential</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Teen Hath Naka, Thane</h3>
            <p className="text-gray-600">
              Adani is located at one of Thane's most sought-after locations, offering the perfect balance of 
              connectivity, convenience, and tranquility. The strategic location ensures easy access to major highways, 
              railway stations, and upcoming metro lines, making commuting a breeze.
            </p>
            
            <div className="grid grid-cols-1 gap-5 mt-8">
              {locationHighlights.map((category, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Distances</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 bg-[#dcf0dc]">
                  <span className="material-icons text-lg sm:text-xl text-[#2d7d2d]">train</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Thane Railway Station</h4>
                <p className="text-gray-600 text-sm">2.5 km</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 bg-[#dcf0dc]">
                  <span className="material-icons text-lg sm:text-xl text-[#2d7d2d]">directions_bus</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Teen Hath Naka Bus Stop</h4>
                <p className="text-gray-600 text-sm">0.2 km</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 bg-[#dcf0dc]">
                  <span className="material-icons text-lg sm:text-xl text-[#2d7d2d]">flight</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Mumbai International Airport</h4>
                <p className="text-gray-600 text-sm">22 km</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 bg-[#dcf0dc]">
                  <span className="material-icons text-lg sm:text-xl text-[#2d7d2d]">shopping_cart</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Viviana Mall</h4>
                <p className="text-gray-600 text-sm">1.8 km</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 bg-[#dcf0dc]">
                  <span className="material-icons text-lg sm:text-xl text-[#2d7d2d]">local_hospital</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Jupiter Hospital</h4>
                <p className="text-gray-600 text-sm">3.5 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
