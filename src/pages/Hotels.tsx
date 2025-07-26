import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { HotelCard } from '@/components/HotelCard';
import { MapView } from '@/components/MapView';
import { mockHotels } from '@/data/hotels';
import { Hotel, SearchFilters } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import { Map, List } from 'lucide-react';

const Hotels = () => {
  const [hotels] = useState<Hotel[]>(mockHotels);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(mockHotels);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const handleSearch = (filters: SearchFilters) => {
    let filtered = [...hotels];
    
    if (filters.location) {
      filtered = filtered.filter(hotel => 
        hotel.location.city.toLowerCase().includes(filters.location!.toLowerCase()) ||
        hotel.location.country.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    
    if (filters.priceRange) {
      filtered = filtered.filter(hotel => 
        hotel.price >= filters.priceRange![0] && hotel.price <= filters.priceRange![1]
      );
    }
    
    if (filters.rating) {
      filtered = filtered.filter(hotel => hotel.rating >= filters.rating!);
    }
    
    setFilteredHotels(filtered);
  };

  const handleHotelSelect = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    // Navigate to hotel detail page (implement routing later)
    console.log('Selected hotel:', hotel);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {filteredHotels.length} hotels found
          </h2>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              size="sm"
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              onClick={() => setViewMode('map')}
              size="sm"
            >
              <Map className="w-4 h-4 mr-2" />
              Map
            </Button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onSelect={handleHotelSelect}
              />
            ))}
          </div>
        ) : (
          <MapView 
            hotels={filteredHotels}
            onHotelSelect={handleHotelSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Hotels;