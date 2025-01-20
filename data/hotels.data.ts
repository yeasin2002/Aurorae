interface Hotel {
  id: string
  name: string
  description: string
  price: number
  rating: number
  amenities: string[]
  image: string
}

export const amenities = ref([
  'Pool',
  'Spa',
  'Beach Access',
  'Free WiFi',
  'Restaurant',
  'Gym',
  'Room Service',
  'Pet Friendly',
])
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
