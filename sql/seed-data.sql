-- Replace this UUID with the real one from auth.users.id
INSERT INTO users (id, full_name, role, is_admin)
VALUES (
  'f3a61460-b0d2-4d17-b1e5-999a6ef91e01', 
  'Hotel Admin',
  'admin',
  TRUE
);



INSERT INTO hotels (name, location, description, price_per_night, rating, image_url, created_by)
VALUES
(
  'The Fairmont Orchid, Hawaii',
  'Hawaii, USA',
  'Luxurious resort with ocean views and premium amenities.',
  429.00,
  4.9,
  'https://example.com/images/fairmont_orchid.jpg',
  'f3a61460-b0d2-4d17-b1e5-999a6ef91e01'
),
(
  'Amangiri Resort',
  'Canyon Point, Utah',
  'Secluded desert retreat known for stunning views and modern design.',
  1600.00,
  4.8,
  'https://example.com/images/amangiri.jpg',
  'f3a61460-b0d2-4d17-b1e5-999a6ef91e01'
),
(
  'Marina Bay Sands',
  'Singapore',
  'Iconic hotel with rooftop infinity pool overlooking Singapore skyline.',
  550.00,
  4.7,
  'https://example.com/images/marina_bay_sands.jpg',
  'f3a61460-b0d2-4d17-b1e5-999a6ef91e01'
),
(
  'The Ritz-Carlton, Bali',
  'Nusa Dua, Bali',
  'Luxury beachfront escape with a world-class spa and tropical views.',
  380.00,
  4.6,
  'https://example.com/images/ritz_bali.jpg',
  'f3a61460-b0d2-4d17-b1e5-999a6ef91e01'
);


-- Facilities for Fairmont Orchid (hotel_id = 1)
INSERT INTO hotel_facilities (hotel_id, name) VALUES
(1, 'Pool'),
(1, 'Spa'),
(1, 'Beachfront'),
(1, 'Free WiFi');

-- Facilities for Amangiri (hotel_id = 2)
INSERT INTO hotel_facilities (hotel_id, name) VALUES
(2, 'Desert View'),
(2, 'Infinity Pool'),
(2, 'Luxury Suites');

-- Facilities for Marina Bay Sands (hotel_id = 3)
INSERT INTO hotel_facilities (hotel_id, name) VALUES
(3, 'SkyPark'),
(3, 'Infinity Pool'),
(3, 'Casino'),
(3, 'Mall Access');

-- Facilities for Ritz-Carlton Bali (hotel_id = 4)
INSERT INTO hotel_facilities (hotel_id, name) VALUES
(4, 'Beachfront'),
(4, 'Spa'),
(4, 'Yoga Pavilion'),
(4, 'Private Villas');
