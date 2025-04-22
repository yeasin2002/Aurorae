// Sample Users Data
const users = [
  {
    email: 'john.doe@example.com',
    password: '$2a$10$XYZ.ABC123.HASHED.PASSWORD', // Hashed password (example only)
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+1234567890',
    profilePicture: 'https://storage.example.com/profiles/johndoe.jpg',
    role: 'CUSTOMER',
    verified: true,
    verifyToken: null,
    resetToken: null,
    resetExpires: null,
    createdAt: new Date('2023-10-15T08:30:00Z'),
    updatedAt: new Date('2023-10-15T08:30:00Z'),
  },
  {
    email: 'jane.smith@example.com',
    password: '$2a$10$DEF.GHI456.HASHED.PASSWORD', // Hashed password (example only)
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    profilePicture: 'https://storage.example.com/profiles/janesmith.jpg',
    role: 'CUSTOMER',
    verified: true,
    verifyToken: null,
    resetToken: null,
    resetExpires: null,
    createdAt: new Date('2023-11-20T14:15:00Z'),
    updatedAt: new Date('2023-11-20T14:15:00Z'),
  },
  {
    email: 'admin@hotelmanager.com',
    password: '$2a$10$JKL.MNO789.HASHED.PASSWORD', // Hashed password (example only)
    firstName: 'Admin',
    lastName: 'User',
    phoneNumber: '+1555666777',
    profilePicture: null,
    role: 'ADMIN',
    verified: true,
    verifyToken: null,
    resetToken: null,
    resetExpires: null,
    createdAt: new Date('2023-01-01T00:00:00Z'),
    updatedAt: new Date('2023-01-01T00:00:00Z'),
  },
  {
    email: 'manager@fairmont.com',
    password: '$2a$10$PQR.STU012.HASHED.PASSWORD', // Hashed password (example only)
    firstName: 'Hotel',
    lastName: 'Manager',
    phoneNumber: '+1888999000',
    profilePicture: 'https://storage.example.com/profiles/manager.jpg',
    role: 'HOTEL_MANAGER',
    verified: true,
    verifyToken: null,
    resetToken: null,
    resetExpires: null,
    createdAt: new Date('2023-02-15T09:30:00Z'),
    updatedAt: new Date('2023-02-15T09:30:00Z'),
  },
]

// Sample Hotels Data
const hotels = [
  {
    name: 'The Fairmont Orchid, Hawaii',
    description:
      'Luxurious resort with ocean views nestled on the Kohala Coast of Hawaii Island. Experience the true essence of island hospitality with our beachfront luxury resort.',
    address: {
      street: '1 North Kaniku Drive',
      city: 'Kohala Coast',
      state: 'Hawaii',
      postalCode: '96743',
      country: 'USA',
    },
    contactEmail: 'info@fairmontorchid.com',
    contactPhone: '+1-808-885-2000',
    website: 'https://www.fairmont.com/orchid-hawaii/',
    starRating: 4.9,
    checkInTime: '16:00',
    checkOutTime: '11:00',
    policies: {
      cancellation:
        'Free cancellation up to 72 hours before check-in. After that, the first night is charged.',
      pets: 'Pets allowed with additional fee of $75 per night.',
      smoking: 'No smoking in any rooms or indoor areas.',
      children:
        'Children of all ages are welcome. Children under 12 stay free when using existing beds.',
    },
    amenities: [
      'pool',
      'spa',
      'restaurant',
      'gym',
      'beach-access',
      'room-service',
      'wifi',
      'parking',
    ],
    images: [
      'https://storage.example.com/hotels/fairmont-orchid-1.jpg',
      'https://storage.example.com/hotels/fairmont-orchid-2.jpg',
      'https://storage.example.com/hotels/fairmont-orchid-3.jpg',
      'https://storage.example.com/hotels/fairmont-orchid-4.jpg',
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: new Date('2023-01-10T00:00:00Z'),
    updatedAt: new Date('2023-12-15T00:00:00Z'),
    coordinates: {
      latitude: 19.9428,
      longitude: -155.8652,
    },
    wishlistIds: [],
  },
  {
    name: 'Grand Plaza Downtown',
    description:
      'Located in the heart of the business district, Grand Plaza Downtown offers luxury accommodations with stunning city views and world-class amenities.',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
    },
    contactEmail: 'reservations@grandplaza.com',
    contactPhone: '+1-212-555-1234',
    website: 'https://www.grandplazahotel.com',
    starRating: 4.7,
    checkInTime: '15:00',
    checkOutTime: '12:00',
    policies: {
      cancellation:
        'Free cancellation up to 48 hours before check-in. After that, the first night is charged.',
      pets: 'No pets allowed except for service animals.',
      smoking: 'No smoking throughout the property.',
      children: 'Children of all ages are welcome.',
    },
    amenities: [
      'pool',
      'spa',
      'restaurant',
      'gym',
      'business-center',
      'room-service',
      'wifi',
      'parking',
    ],
    images: [
      'https://storage.example.com/hotels/grand-plaza-1.jpg',
      'https://storage.example.com/hotels/grand-plaza-2.jpg',
      'https://storage.example.com/hotels/grand-plaza-3.jpg',
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: new Date('2023-02-15T00:00:00Z'),
    updatedAt: new Date('2023-11-20T00:00:00Z'),
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    wishlistIds: [],
  },
  {
    name: 'Seaside Resort & Spa',
    description:
      'Escape to our tranquil beachfront resort featuring private balconies with ocean views, a full-service spa, and multiple dining options.',
    address: {
      street: '789 Ocean Drive',
      city: 'Miami Beach',
      state: 'FL',
      postalCode: '33139',
      country: 'USA',
    },
    contactEmail: 'info@seasideresort.com',
    contactPhone: '+1-305-555-6789',
    website: 'https://www.seasideresortandspa.com',
    starRating: 4.5,
    checkInTime: '16:00',
    checkOutTime: '11:00',
    policies: {
      cancellation:
        'Free cancellation up to 7 days before check-in. Within 7 days, 50% of the stay is charged.',
      pets: 'Small pets allowed with $100 non-refundable deposit.',
      smoking: 'Smoking permitted only in designated outdoor areas.',
      children: 'Children above 12 years old welcome. Adults-preferred property.',
    },
    amenities: ['beach-access', 'pool', 'spa', 'restaurant', 'bar', 'gym', 'wifi'],
    images: [
      'https://storage.example.com/hotels/seaside-resort-1.jpg',
      'https://storage.example.com/hotels/seaside-resort-2.jpg',
      'https://storage.example.com/hotels/seaside-resort-3.jpg',
      'https://storage.example.com/hotels/seaside-resort-4.jpg',
    ],
    featured: false,
    status: 'ACTIVE',
    createdAt: new Date('2023-03-20T00:00:00Z'),
    updatedAt: new Date('2023-10-05T00:00:00Z'),
    coordinates: {
      latitude: 25.7907,
      longitude: -80.13,
    },
    wishlistIds: [],
  },
]

// Sample Rooms Data
const rooms = [
  {
    name: 'Ocean View King Suite',
    type: 'Suite',
    description:
      'Luxurious suite featuring a king-sized bed, private lanai with ocean views, and spacious living area.',
    capacity: 2,
    beds: [{ type: 'King', count: 1 }],
    size: 65, // square meters
    price: 429.0,
    discount: null,
    amenities: ['air-conditioning', 'tv', 'minibar', 'safe', 'coffee-maker', 'bathtub'],
    images: [
      'https://storage.example.com/rooms/fairmont-king-suite-1.jpg',
      'https://storage.example.com/rooms/fairmont-king-suite-2.jpg',
    ],
    status: 'AVAILABLE',
  },
  {
    name: 'Garden View Double',
    type: 'Standard',
    description:
      'Comfortable room with two queen beds and a private lanai overlooking the tropical gardens.',
    capacity: 4,
    beds: [{ type: 'Queen', count: 2 }],
    size: 45, // square meters
    price: 329.0,
    discount: 10, // 10% discount
    amenities: ['air-conditioning', 'tv', 'minibar', 'safe', 'coffee-maker'],
    images: [
      'https://storage.example.com/rooms/fairmont-double-1.jpg',
      'https://storage.example.com/rooms/fairmont-double-2.jpg',
    ],
    status: 'AVAILABLE',
  },
  {
    name: 'Executive Suite',
    type: 'Suite',
    description:
      'Spacious suite with separate living area, executive desk, and panoramic city views.',
    capacity: 2,
    beds: [{ type: 'King', count: 1 }],
    size: 60, // square meters
    price: 589.0,
    discount: null,
    amenities: ['air-conditioning', 'tv', 'minibar', 'safe', 'coffee-maker', 'work-desk', 'robe'],
    images: [
      'https://storage.example.com/rooms/grandplaza-exec-1.jpg',
      'https://storage.example.com/rooms/grandplaza-exec-2.jpg',
    ],
    status: 'AVAILABLE',
  },
]

// Sample Bookings Data
const bookings = [
  {
    bookingNumber: 'BKG123456789',
    checkInDate: new Date('2024-06-15T16:00:00Z'),
    checkOutDate: new Date('2024-06-20T11:00:00Z'),
    guests: {
      adults: 2,
      children: 0,
      infants: 0,
      names: ['John Doe', 'Guest Doe'],
    },
    totalAmount: 2145.0, // 5 nights at $429/night
    paymentStatus: 'PAID',
    bookingStatus: 'CONFIRMED',
    specialRequests: 'High floor room if possible. Celebrating anniversary.',
    createdAt: new Date('2024-01-10T14:23:10Z'),
    updatedAt: new Date('2024-01-10T14:25:45Z'),
  },
]

// Sample Room Bookings Data
const roomBookings = [
  {
    pricePerNight: 429.0,
    quantity: 1,
  },
]

// Sample Reviews Data
const reviews = [
  {
    rating: 5.0,
    title: 'Exceptional Stay',
    comment:
      'Our stay at The Fairmont Orchid was absolutely perfect. The staff was attentive, the room was immaculate, and the ocean view was breathtaking. Would definitely recommend!',
    images: ['https://storage.example.com/reviews/review-fairmont-1.jpg'],
    response: {
      text: "Thank you for your wonderful review! We're delighted that you enjoyed your stay with us and hope to welcome you back soon.",
      respondedBy: 'Hotel Manager',
      createdAt: new Date('2023-09-12T10:30:00Z'),
    },
    status: 'APPROVED',
    createdAt: new Date('2023-09-10T18:45:00Z'),
    updatedAt: new Date('2023-09-12T10:30:00Z'),
  },
  {
    rating: 4.5,
    title: 'Great Business Trip Stay',
    comment:
      'Excellent location for my business meetings. Room was comfortable and the staff was very helpful. The only minor issue was street noise, but thats expected in the city center.',
    images: [],
    status: 'APPROVED',
    createdAt: new Date('2023-10-05T20:15:00Z'),
    updatedAt: new Date('2023-10-06T09:20:00Z'),
  },
]

// Sample Amenity Categories
const amenityCategories = [
  {
    name: 'Property',
    icon: 'building',
  },
  {
    name: 'Room',
    icon: 'bed',
  },
  {
    name: 'Services',
    icon: 'concierge-bell',
  },
]

// Sample Amenities
const amenities = [
  {
    name: 'Swimming Pool',
    icon: 'pool',
  },
  {
    name: 'Spa',
    icon: 'spa',
  },
  {
    name: 'Restaurant',
    icon: 'utensils',
  },
  {
    name: 'Gym',
    icon: 'dumbbell',
  },
  {
    name: 'Air Conditioning',
    icon: 'snowflake',
  },
  {
    name: 'Room Service',
    icon: 'room-service',
  },
]

// Sample Promotions
const promotions = [
  {
    code: 'SUMMER2024',
    name: 'Summer Special',
    description: 'Get 15% off on stays of 3 nights or more during summer.',
    discountType: 'PERCENTAGE',
    discountValue: 15.0,
    startDate: new Date('2024-06-01T00:00:00Z'),
    endDate: new Date('2024-08-31T23:59:59Z'),
    minStay: 3,
    maxDiscount: 500.0,
    usageLimit: 100,
    usedCount: 12,

    status: 'ACTIVE',
  },
]

// Sample Availability Data
const availability = [
  {
    date: new Date('2024-06-15T00:00:00Z'),
    available: 5,
    price: 429.0,
    closed: false,
  },
  {
    date: new Date('2024-06-16T00:00:00Z'),
    available: 5,
    price: 429.0,
    closed: false,
  },
  {
    date: new Date('2024-06-17T00:00:00Z'),
    available: 5,
    price: 429.0,
    closed: false,
  },
]

// Export all data
module.exports = {
  users,
  hotels,
  rooms,
  bookings,
  roomBookings,
  reviews,
  amenityCategories,
  amenities,
  promotions,
  availability,
}
