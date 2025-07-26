import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SearchFilters } from '@/types/hotel';
import { MapPin, Star, Wifi, Car, Utensils, Users } from 'lucide-react';
import heroHotel from '@/assets/hero-hotel.jpg';
import { mockHotels } from '@/data/hotels';

const Home = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    // Navigate to hotels page with filters
    window.location.href = '/hotels';
  };

  const featuredHotels = mockHotels.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHotel})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Discover amazing hotels around the world with Vista Stay
            </p>
          </div>
          
          <div className="w-full max-w-4xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vista Stay?</h2>
            <p className="text-lg text-muted-foreground">Experience the best in hospitality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Perfect Locations</h3>
                <p className="text-muted-foreground">
                  Find hotels in prime locations with easy access to attractions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-card to-hotel-luxury/10 border-hotel-luxury/20">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-hotel-luxury mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
                <p className="text-muted-foreground">
                  Only the highest rated hotels with verified reviews
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-card to-hotel-comfort/10 border-hotel-comfort/20">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-hotel-comfort mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock customer support for your peace of mind
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Featured Hotels */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Hotels</h2>
            <p className="text-lg text-muted-foreground">Handpicked destinations for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-hotel-luxury text-hotel-luxury-foreground">
                    {hotel.category.toUpperCase()}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-hotel-rating text-hotel-rating" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.location.city}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {hotel.description.slice(0, 80)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      ${hotel.price}<span className="text-sm font-normal">/night</span>
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-hotel-luxury">
                      View Hotel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;