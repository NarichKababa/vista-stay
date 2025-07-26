import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Hotel } from '@/types/hotel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  hotels: Hotel[];
  onHotelSelect: (hotel: Hotel) => void;
}

export const MapView = ({ hotels, onHotelSelect }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add hotel markers
    hotels.forEach((hotel) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-semibold">${hotel.name}</h3>
          <p class="text-sm text-gray-600">${hotel.location.city}</p>
          <p class="text-sm font-semibold">$${hotel.price}/night</p>
        </div>
      `);

      const marker = new mapboxgl.Marker({
        color: '#3B82F6'
      })
        .setLngLat([hotel.location.coordinates.lng, hotel.location.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current!);

      marker.getElement().addEventListener('click', () => {
        onHotelSelect(hotel);
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [hotels, onHotelSelect, mapboxToken]);

  const handleSetToken = () => {
    setMapboxToken(tokenInput);
  };

  if (!mapboxToken) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-muted rounded-lg p-8">
        <MapPin className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-4">Map Integration</h3>
        <p className="text-muted-foreground mb-6 text-center">
          To view hotels on the map, please enter your Mapbox public token.
          You can get one at <a href="https://mapbox.com/" target="_blank" className="text-primary underline">mapbox.com</a>
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            placeholder="Enter Mapbox token..."
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            type="password"
          />
          <Button onClick={handleSetToken}>
            Set Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};