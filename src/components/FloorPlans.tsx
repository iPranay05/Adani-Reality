"use client";

import { useState } from 'react';
import Image from 'next/image';

const floorPlans = [
  {
    id: '2bhk',
    title: '2 BHK',
    size: '800 to 900 sq.ft. carpet',
    price: 'Starting from ₹2 Cr to ₹2.20 Cr (All Inclusive)',
    eoiAmount: '₹2 Lakhs',
    image: '/2-bhk-img.jpg'
  },
  {
    id: '2.5bhk',
    title: '2.5 BHK',
    size: '900 to 1000 sq.ft. carpet',
    price: 'Starting from ₹2.43 Cr (All Inclusive)',
    eoiAmount: '₹2 Lakhs',
    image: '/2.5-bhk.png'
  },
  {
    id: '3bhk',
    title: '3 BHK',
    size: '1100 to 1300 sq.ft. carpet',
    price: 'Starting from ₹2.80 Cr+',
    eoiAmount: '₹3 Lakhs',
    image: '/3-bhk.jpg'
  },
  {
    id: '3.5bhk',
    title: '3.5 BHK',
    size: '1300 to 1400 sq.ft. carpet',
    price: 'Starting from ₹3.50 Cr+',
    eoiAmount: '₹3.5 Lakhs',
    image: '/3-bhk.png'
  },
  {
    id: '4bhk',
    title: '4 BHK',
    size: '1600 to 1800 sq.ft. carpet',
    price: 'Starting from ₹4.05 Cr+',
    eoiAmount: '₹4 Lakhs',
    image: '/4-bhk-floor.png'
  }
];

export default function FloorPlans() {
  const [activeFloorPlan, setActiveFloorPlan] = useState(floorPlans[0]);

  return (
    <section id="floor-plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Floor Plans & Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of spacious and thoughtfully designed floor plans to suit your lifestyle
          </p>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#2d7d2d' }}></div>
        </div>
        
        {/* Floor Plan Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveFloorPlan(plan)}
              className={`px-6 py-3 mx-2 mb-2 rounded-full transition-all ${
                activeFloorPlan.id === plan.id
                  ? 'text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={activeFloorPlan.id === plan.id ? { backgroundColor: '#2d7d2d' } : {}}
            >
              {plan.title}
            </button>
          ))}
        </div>
        
        {/* Active Floor Plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-100 p-6 rounded-lg relative">
            <div className="relative">
              <Image
                src={activeFloorPlan.image}
                alt={`${activeFloorPlan.title} Floor Plan`}
                width={600}
                height={400}
                className="rounded-lg filter blur-md"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-white text-lg font-semibold text-center px-4">Floor plan images not available yet</p>
                <p className="text-white text-sm text-center px-4 mt-2">Please contact our sales team for more information</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">{activeFloorPlan.title}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Carpet Area</h4>
                <p className="text-xl" style={{ color: '#2d7d2d' }}>{activeFloorPlan.size}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Price</h4>
                <p className="text-xl" style={{ color: '#2d7d2d' }}>{activeFloorPlan.price}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700">EOI Amount</h4>
                <p className="text-xl" style={{ color: '#2d7d2d' }}>{activeFloorPlan.eoiAmount}</p>
              </div>
              
              <div className="pt-4">
                <button className="py-3 px-8 rounded-full font-medium transition duration-300 text-white" style={{ backgroundColor: '#2d7d2d' }}>
                  Request Floor Plan
                </button>
              </div>
            </div>
            
            <div className="mt-10 p-4 rounded-lg border" style={{ backgroundColor: '#f0f9f0', borderColor: '#b9e1b9' }}>
              <h4 className="font-semibold text-gray-800 mb-2">Expression of Interest Window Open</h4>
              <p className="text-gray-600">
                Secure your dream home with an EOI. Limited units available at pre-launch prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
