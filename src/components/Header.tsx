import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/adani-logo.png" 
            alt="Adani Realty Logo" 
            width={180} 
            height={60}
            className="h-20 w-20"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/#about" className="text-gray-700 hover:text-[#2d7d2d] transition duration-300">
            About
          </Link>
          <Link href="/#amenities" className="text-gray-700 hover:text-[#2d7d2d] transition duration-300">
            Amenities
          </Link>
          <Link href="/#floor-plans" className="text-gray-700 hover:text-[#2d7d2d] transition duration-300">
            Floor Plans
          </Link>
          <Link href="/#location" className="text-gray-700 hover:text-[#2d7d2d] transition duration-300">
            Location
          </Link>
          <Link href="/#gallery" className="text-gray-700 hover:text-[#2d7d2d] transition duration-300">
            Gallery
          </Link>
        </nav>
        
        <Link 
          href="/#contact" 
          className="hidden md:inline-block text-white py-2 px-6 rounded-full bg-[#2d7d2d] hover:bg-opacity-90 transition duration-300"
        >
          Contact Us
        </Link>
        
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
