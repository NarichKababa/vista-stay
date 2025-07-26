import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Calendar, Star, CreditCard, Heart } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '',
    joinDate: '2024-01-15',
    totalBookings: 12,
    favoriteDestinations: ['New York', 'Miami', 'Los Angeles'],
    membershipLevel: 'Gold'
  };

  const recentBookings = [
    {
      id: '1',
      hotelName: 'Grand Vista Palace',
      location: 'New York',
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      status: 'Completed'
    },
    {
      id: '2',
      hotelName: 'Ocean Breeze Resort',
      location: 'Miami',
      checkIn: '2024-03-20',
      checkOut: '2024-03-25',
      status: 'Upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <p className="text-muted-foreground">{user.email}</p>
                <Badge className="mt-2 bg-hotel-rating text-hotel-rating-foreground">
                  {user.membershipLevel} Member
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Member since</p>
                      <p className="font-semibold">{new Date(user.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total bookings</p>
                      <p className="font-semibold">{user.totalBookings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Favorite destinations</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {user.favoriteDestinations.map((dest) => (
                          <Badge key={dest} variant="secondary" className="text-xs">
                            {dest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-hotel-luxury">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Recent Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <Card key={booking.id} className="p-4 bg-gradient-to-r from-card to-secondary/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{booking.hotelName}</h3>
                          <div className="flex items-center gap-1 text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <span>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</span>
                            <span>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Badge 
                          className={
                            booking.status === 'Completed' 
                              ? 'bg-hotel-comfort text-hotel-comfort-foreground'
                              : 'bg-hotel-rating text-hotel-rating-foreground'
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 flex-col">
                    <MapPin className="w-6 h-6 mb-2" />
                    Find Hotels
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Heart className="w-6 h-6 mb-2" />
                    View Favorites
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Calendar className="w-6 h-6 mb-2" />
                    My Bookings
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Star className="w-6 h-6 mb-2" />
                    Write Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;