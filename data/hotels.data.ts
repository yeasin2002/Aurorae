import type { Hotel, HotelDetails, Review } from '~/types'

export const amenities = [
  'Pool',
  'Spa',
  'Beach Access',
  'Free WiFi',
  'Restaurant',
  'Gym',
  'Room Service',
  'Pet Friendly',
]
export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'The Fairmont Orchid, Hawaii',
    description: 'Luxurious resort with ocean views',
    price: 429,
    rating: 4.9,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service'],
    image:
      'https://images.marriott.com/MARRI/content/dam/marriott-hotel-images/mcikl/ki/ki-exterior.jpg',
  },
  {
    id: '2',
    name: 'The Ritz-Carlton, Half Moon Bay',
    description: 'Luxurious coastal resort with golf course',
    price: 519,
    rating: 4.8,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service', 'Beach Access'],
    image:
      'https://images.marriott.com/MARRI/content/dam/marriott-hotel-images/hmbcc/hmb/lobby.jpg',
  },
  {
    id: '3',
    name: 'The St. Regis, Aspen Resort',
    description: 'Luxurious ski resort with mountain views',
    price: 499,
    rating: 4.7,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service', 'Pet Friendly'],
    image:
      'https://images.marriott.com/MARRI/content/dam/marriott-hotel-images/aspxr/aspx/aspx-exterior.jpg',
  },
  {
    id: '4',
    name: 'The Four Seasons, Maui at Wailea',
    description: 'Luxurious resort with ocean views',
    price: 499,
    rating: 4.9,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service', 'Beach Access'],
    image:
      'https://images.marriott.com/MARRI/content/dam/marriott-hotel-images/waif/waif-exterior.jpg',
  },
  {
    id: '5',
    name: 'The Grand Hyatt, Kauai Resort and Spa',
    description: 'Luxurious resort with ocean views',
    price: 349,
    rating: 4.8,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service', 'Beach Access'],
    image:
      'https://images.marriott.com/MARRI/content/dam/marriott-hotel-images/kaua/kaua-exterior.jpg',
  },
]

export const review: Review[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Absolutely stunning resort with impeccable service. The ocean view from our room was breathtaking!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4,
    comment:
      'Great amenities and beautiful location. The staff was very friendly and accommodating.',
  },
]

export const hotel: HotelDetails = {
  id: '1',
  name: 'Luxury Ocean View Resort',
  description:
    'Experience unparalleled luxury at our oceanfront resort. Nestled on pristine beaches with breathtaking views, our resort offers world-class amenities, exquisite dining, and personalized service to ensure an unforgettable stay.',
  price: 499,
  rating: 4.8,
  reviews: 382,
  reviewsDetails: review,
  location: 'Malibu, California',
  amenities: [
    'Free WiFi',
    'Ocean View',
    'Spa',
    'Fitness Center',
    'Restaurant',
    '24/7 Room Service',
    'Swimming Pool',
    'Beach Access',
  ],
  image: `https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
}
