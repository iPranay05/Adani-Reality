import Image from 'next/image';

// Map amenity names to Material Icons
const amenityIcons = {
  'Swimming Pool': 'pool',
  'Tennis Court': 'sports_tennis',
  'Basketball Court': 'sports_basketball',
  'Squash Court': 'sports_handball',
  'Cricket Pitch': 'sports_cricket',
  'Jogging Track': 'directions_run',
  'Yoga Deck': 'self_improvement',
  'Indoor Games': 'sports_esports',
  'Spa & Sauna': 'spa',
  'Meditation Zone': 'self_improvement',
  'Gymnasium': 'fitness_center',
  'Aerobics Studio': 'fitness_center',
  'Steam Room': 'hot_tub',
  'Jacuzzi': 'waves',
  'Multipurpose Hall': 'meeting_room',
  'Theatre': 'theaters',
  'Business Center': 'business_center',
  'Library': 'menu_book',
  'Cafe': 'local_cafe',
  'Barbecue Area': 'outdoor_grill',
  'Party Lawn': 'celebration',
  'Children\'s Play Area': 'child_care',
  'Creche': 'child_friendly',
  'Kids Pool': 'water',
  'Adventure Zone': 'attractions'
};

const amenitiesList = [
  {
    category: 'Sports & Recreation',
    items: [
      { name: 'Swimming Pool', icon: '/icons/swimming-pool.svg' },
      { name: 'Tennis Court', icon: '/icons/tennis.svg' },
      { name: 'Basketball Court', icon: '/icons/basketball.svg' },
      { name: 'Squash Court', icon: '/2-bhk.jpg' },
      { name: 'Cricket Pitch', icon: '/icons/cricket.svg' },
      { name: 'Jogging Track', icon: '/icons/jogging.svg' },
      { name: 'Yoga Deck', icon: '/icons/yoga.svg' },
      { name: 'Indoor Games', icon: '/icons/indoor-games.svg' },
    ]
  },
  {
    category: 'Wellness & Relaxation',
    items: [
      { name: 'Spa & Sauna', icon: '/icons/spa.svg' },
      { name: 'Meditation Zone', icon: '/icons/meditation.svg' },
      { name: 'Gymnasium', icon: '/icons/gym.svg' },
      { name: 'Aerobics Studio', icon: '/icons/aerobics.svg' },
      { name: 'Steam Room', icon: '/icons/steam.svg' },
      { name: 'Jacuzzi', icon: '/icons/jacuzzi.svg' },
    ]
  },
  {
    category: 'Social & Entertainment',
    items: [
      { name: 'Multipurpose Hall', icon: '/icons/hall.svg' },
      { name: 'Theatre', icon: '/icons/theatre.svg' },
      { name: 'Business Center', icon: '/icons/business.svg' },
      { name: 'Library', icon: '/icons/library.svg' },
      { name: 'Cafe', icon: '/icons/cafe.svg' },
      { name: 'Barbecue Area', icon: '/icons/bbq.svg' },
      { name: 'Party Lawn', icon: '/icons/party.svg' },
    ]
  },
  {
    category: 'Kids & Family',
    items: [
      { name: 'Children\'s Play Area', icon: '/icons/playground.svg' },
      { name: 'Creche', icon: '/icons/creche.svg' },
      { name: 'Kids Pool', icon: '/icons/kids-pool.svg' },
      { name: 'Adventure Zone', icon: '/icons/adventure.svg' },
    ]
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Luxury Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a lifestyle beyond compare with our extensive range of world-class amenities
          </p>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#2d7d2d' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <video 
              src="/v1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              controls
            />
          </div>
          
          <div className="space-y-8">
            {amenitiesList.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: '#b9e1b9' }}></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center" style={{ color: '#2d7d2d' }}>
                        <span className="material-icons">
                          {amenityIcons[item.name] || 'star'}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <p className="text-gray-600 italic">
                * This is a partial list. The project offers 50+ amenities designed for modern luxury living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
