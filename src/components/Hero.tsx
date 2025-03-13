import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Banner.png"
          alt="Adani Thane"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#e9d48c]">Adani</span>
            <br />
            <span>Luxury Residences in Thane</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Pre-launch of Thane's most awaited premium residential project at Teen Hath Naka
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#floor-plans" 
              className="py-3 px-8 rounded-full font-medium transition duration-300 text-white bg-[#2d7d2d] hover:bg-opacity-80"
            >
              View Floor Plans
            </Link>
            <Link 
              href="/#contact" 
              className="bg-transparent hover:bg-white hover:text-[#2d7d2d] text-white py-3 px-8 rounded-full font-medium border-2 border-white transition duration-300"
            >
              Book Site Visit
            </Link>
          </div>
        </div>
        
        {/* Highlights */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="font-bold text-3xl text-[#2d7d2d]">18</p>
                <p className="text-gray-700">Acres Land Parcel</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-[#2d7d2d]">6</p>
                <p className="text-gray-700">Luxury Towers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-[#2d7d2d]">40+</p>
                <p className="text-gray-700">Habitable Floors</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-[#2d7d2d]">50+</p>
                <p className="text-gray-700">Grand Amenities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
