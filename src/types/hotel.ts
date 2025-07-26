export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  images: string[];
  amenities: string[];
  roomTypes: RoomType[];
  category: 'luxury' | 'comfort' | 'budget';
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  available: boolean;
}

export interface SearchFilters {
  location?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
  priceRange?: [number, number];
  rating?: number;
  amenities?: string[];
  category?: Hotel['category'];
}