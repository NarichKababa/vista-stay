import { useState } from 'react';
import { HotelCard } from '@/components/HotelCard';
import { mockHotels } from '@/data/hotels';
import { Hotel } from '@/types/hotel';
import { Heart } from 'lucide-react';

const Favorites = () => {
  // In a real app, this would come from user's saved favorites
  const [favoriteHotels] = useState<Hotel[]>(mockHotels.slice(0, 2));

  const handleHotelSelect = (hotel: Hotel) => {
    console.log('Selected hotel:', hotel);
    // Navigate to hotel detail page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          <h1 className="text-3xl font-bold">Your Favorite Hotels</h1>
        </div>
        
        {favoriteHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onSelect={handleHotelSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-muted-foreground">
              Start exploring hotels and save your favorites here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;