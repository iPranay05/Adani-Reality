import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Adani</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A premium residential project by Adani Realty, offering world-class living spaces with unmatched amenities
          </p>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#2d7d2d' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/adani-thane-banner.png" 
              alt="Adani Building" 
              width={600} 
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Luxury Redefined in Thane</h3>
            <p className="text-gray-600 mb-6">
              Adani is the most awaited pre-launch residential project by Adani Realty at Teen Hath Naka, Thane. 
              Spread across 18 acres of prime land, this luxury development features 6 towers with 5 levels of podiums 
              and 40 habitable floors.
            </p>
            <p className="text-gray-600 mb-6">
              The project offers deck apartments with unobstructed views, ensuring the lowest density living experience 
              and over 50 grand amenities designed for an elevated lifestyle.
            </p>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#dcf0dc' }}>
                  <span className="text-xl font-bold" style={{ color: '#2d7d2d' }}>1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Premium Location</h3>
                  <p className="text-gray-600">Strategically located at Teen Hath Naka, Thane with excellent connectivity</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#dcf0dc' }}>
                  <span className="text-xl font-bold" style={{ color: '#2d7d2d' }}>2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Luxury Amenities</h3>
                  <p className="text-gray-600">Over 50 premium amenities including swimming pools, sports facilities, and wellness centers</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#dcf0dc' }}>
                  <span className="text-xl font-bold" style={{ color: '#2d7d2d' }}>3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Spacious Layouts</h3>
                  <p className="text-gray-600">Thoughtfully designed 2, 2.5, 3 & 4 BHK residences with premium finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
