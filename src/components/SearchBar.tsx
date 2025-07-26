import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SearchFilters } from '@/types/hotel';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    const filters: SearchFilters = {
      location: location || undefined,
      checkIn: checkIn ? new Date(checkIn) : undefined,
      checkOut: checkOut ? new Date(checkOut) : undefined,
      guests: guests > 0 ? guests : undefined,
    };
    onSearch(filters);
  };

  return (
    <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="date"
            placeholder="Check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="date"
            placeholder="Check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              min="1"
              className="pl-10"
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="bg-gradient-to-r from-primary to-hotel-luxury hover:from-primary/90 hover:to-hotel-luxury/90"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};