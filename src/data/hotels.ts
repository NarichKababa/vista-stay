import { Hotel } from '@/types/hotel';
import heroHotel from '@/assets/hero-hotel.jpg';
import hotelRoom from '@/assets/hotel-room.jpg';
import hotelLobby from '@/assets/hotel-lobby.jpg';
import resortPool from '@/assets/resort-pool.jpg';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Grand Vista Palace',
    description: 'A luxurious 5-star hotel offering breathtaking city views and world-class amenities.',
    location: {
      address: '123 Downtown Avenue',
      city: 'New York',
      country: 'USA',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    rating: 4.8,
    reviewCount: 1247,
    price: 299,
    currency: 'USD',
    images: [heroHotel, hotelLobby, hotelRoom],
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Room Service', 'Concierge'],
    roomTypes: [
      {
        id: 'deluxe',
        name: 'Deluxe Room',
        description: 'Spacious room with city views',
        price: 299,
        capacity: 2,
        amenities: ['King Bed', 'City View', 'Mini Bar'],
        images: [hotelRoom],
        available: true
      }
    ],
    category: 'luxury'
  },
  {
    id: '2',
    name: 'Ocean Breeze Resort',
    description: 'Tropical paradise with pristine beaches and infinity pools.',
    location: {
      address: '456 Beach Road',
      city: 'Miami',
      country: 'USA',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    rating: 4.6,
    reviewCount: 892,
    price: 199,
    currency: 'USD',
    images: [resortPool, heroHotel, hotelRoom],
    amenities: ['Beach Access', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Water Sports'],
    roomTypes: [
      {
        id: 'ocean-view',
        name: 'Ocean View Suite',
        description: 'Stunning ocean views with private balcony',
        price: 199,
        capacity: 4,
        amenities: ['Ocean View', 'Balcony', 'Kitchenette'],
        images: [hotelRoom],
        available: true
      }
    ],
    category: 'luxury'
  },
  {
    id: '3',
    name: 'Central Plaza Hotel',
    description: 'Modern comfort hotel in the heart of downtown.',
    location: {
      address: '789 Central Plaza',
      city: 'Chicago',
      country: 'USA',
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    rating: 4.2,
    reviewCount: 564,
    price: 149,
    currency: 'USD',
    images: [hotelLobby, hotelRoom, heroHotel],
    amenities: ['Free WiFi', 'Gym', 'Business Center', 'Restaurant'],
    roomTypes: [
      {
        id: 'standard',
        name: 'Standard Room',
        description: 'Comfortable room with modern amenities',
        price: 149,
        capacity: 2,
        amenities: ['Queen Bed', 'Work Desk', 'Coffee Maker'],
        images: [hotelRoom],
        available: true
      }
    ],
    category: 'comfort'
  },
  {
    id: '4',
    name: 'Mountain View Lodge',
    description: 'Cozy mountain retreat with stunning alpine views.',
    location: {
      address: '321 Mountain Road',
      city: 'Denver',
      country: 'USA',
      coordinates: { lat: 39.7392, lng: -104.9903 }
    },
    rating: 4.4,
    reviewCount: 328,
    price: 179,
    currency: 'USD',
    images: [heroHotel, hotelRoom, hotelLobby],
    amenities: ['Mountain Views', 'Hiking Trails', 'Restaurant', 'Fireplace'],
    roomTypes: [
      {
        id: 'mountain-view',
        name: 'Mountain View Room',
        description: 'Cozy room with panoramic mountain views',
        price: 179,
        capacity: 2,
        amenities: ['Mountain View', 'Fireplace', 'Balcony'],
        images: [hotelRoom],
        available: true
      }
    ],
    category: 'comfort'
  }
];