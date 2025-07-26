import { Star, MapPin, Wifi, Car, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hotel } from '@/types/hotel';

interface HotelCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
}

export const HotelCard = ({ hotel, onSelect }: HotelCardProps) => {
  const getCategoryColor = (category: Hotel['category']) => {
    switch (category) {
      case 'luxury':
        return 'bg-hotel-luxury text-hotel-luxury-foreground';
      case 'comfort':
        return 'bg-hotel-comfort text-hotel-comfort-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
      <div className="relative">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className={getCategoryColor(hotel.category)}>
            {hotel.category.toUpperCase()}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-black/50 text-white border-0">
            ${hotel.price}/night
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg leading-tight">{hotel.name}</h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-hotel-rating text-hotel-rating" />
            <span className="text-sm font-medium">{hotel.rating}</span>
            <span className="text-xs text-muted-foreground">({hotel.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{hotel.location.city}, {hotel.location.country}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {hotel.description}
        </p>
        
        <div className="flex items-center gap-2 mb-4">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1">
              {amenity === 'Free WiFi' && <Wifi className="w-3 h-3" />}
              {amenity === 'Pool' && <div className="w-3 h-3 rounded-full bg-primary" />}
              {amenity === 'Restaurant' && <Utensils className="w-3 h-3" />}
              <span className="text-xs text-muted-foreground">{amenity}</span>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={() => onSelect(hotel)}
          className="w-full bg-gradient-to-r from-primary to-hotel-luxury hover:from-primary/90 hover:to-hotel-luxury/90"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};