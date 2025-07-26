import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ebc0bc6e5e6a409aa4e516d9c5466d52',
  appName: 'vista-stay',
  webDir: 'dist',
  server: {
    url: 'https://ebc0bc6e-5e6a-409a-a4e5-16d9c5466d52.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Geolocation: {
      permissions: {
        location: 'when-in-use'
      }
    }
  }
};

export default config;