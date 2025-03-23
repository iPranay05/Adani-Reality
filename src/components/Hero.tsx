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
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pb-40 sm:pb-32 md:pb-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#e9d48c]">Adani</span>
            <br />
            <span>Luxury Residences in Thane</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
            Pre-launch of Thane's most awaited premium residential project at Teen Hath Naka
          </p>
          <div className="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <Link 
              href="/#floor-plans" 
              className="py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium transition duration-300 text-white bg-[#2d7d2d] hover:bg-opacity-80 text-sm sm:text-base"
            >
              View Floor Plans
            </Link>
            <Link 
              href="/#contact" 
              className="bg-transparent hover:bg-white hover:text-[#2d7d2d] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium border-2 border-white transition duration-300 text-sm sm:text-base"
            >
              Book Site Visit
            </Link>
          </div>
        </div>
        
        {/* Highlights */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="font-bold text-2xl sm:text-3xl text-[#2d7d2d]">18</p>
                <p className="text-gray-700 text-sm sm:text-base">Acres Land Parcel</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl sm:text-3xl text-[#2d7d2d]">6</p>
                <p className="text-gray-700 text-sm sm:text-base">Luxury Towers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl sm:text-3xl text-[#2d7d2d]">40+</p>
                <p className="text-gray-700 text-sm sm:text-base">Habitable Floors</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl sm:text-3xl text-[#2d7d2d]">50+</p>
                <p className="text-gray-700 text-sm sm:text-base">Grand Amenities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
