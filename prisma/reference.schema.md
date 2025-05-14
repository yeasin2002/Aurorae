generator client {
    provider = "prisma-client"
    output   = "../generated/prisma"
}

datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
}

// User model for customers and admins
model User {
    id             String    @id @default(auto()) @map("_id") @db.ObjectId
    email          String    @unique
    password       String // Hashed password
    firstName      String
    lastName       String
    phoneNumber    String?
    profilePicture String?
    role           UserRole  @default(CUSTOMER)
    verified       Boolean   @default(false)
    verifyToken    String?
    resetToken     String?
    resetExpires   DateTime?
    createdAt      DateTime  @default(now())
    updatedAt      DateTime  @updatedAt

    // Relations
    bookings      Booking[]
    reviews       Review[]
    notifications Notification[]
    wishlist      Wishlist?
    sessions      Session[]
}

enum UserRole {
    CUSTOMER
    HOTEL_MANAGER
    ADMIN
    SUPER_ADMIN
}

// Session management for auth
model Session {
    id        String   @id @default(auto()) @map("_id") @db.ObjectId
    userId    String   @db.ObjectId
    token     String   @unique
    expiresAt DateTime
    createdAt DateTime @default(now())

    // Relations
    user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// Hotel model
model Hotel {
    id           String       @id @default(auto()) @map("_id") @db.ObjectId
    name         String
    description  String
    address      Address
    contactEmail String
    contactPhone String
    website      String?
    starRating   Float
    checkInTime  String // Format: "14:00"
    checkOutTime String // Format: "11:00"
    policies     Json? // Cancellation policies, house rules, etc.
    amenities    String[] // Array of amenity IDs
    images       String[] // Array of image URLs
    featured     Boolean      @default(false)
    status       HotelStatus  @default(ACTIVE)
    createdAt    DateTime     @default(now())
    updatedAt    DateTime     @updatedAt
    coordinates  Coordinates?

    // Relations
    rooms       Room[]
    reviews     Review[]
    bookings    Booking[]
    wishlists   Wishlist[] @relation(fields: [wishlistIds], references: [id])
    wishlistIds String[]   @db.ObjectId
}

enum HotelStatus {
    ACTIVE
    INACTIVE
    MAINTENANCE
    PENDING_REVIEW
}

// Embedded document for hotel address
type Address {
    street     String
    city       String
    state      String
    postalCode String
    country    String
}

// Geographic coordinates for mapping
type Coordinates {
    latitude  Float
    longitude Float
}

// Room model
model Room {
    id          String     @id @default(auto()) @map("_id") @db.ObjectId
    hotelId     String     @db.ObjectId
    name        String
    type        String // Suite, Deluxe, Standard, etc.
    description String
    capacity    Int // Max number of guests
    beds        BedInfo[] // Array of bed info
    size        Int? // Size in square meters/feet
    price       Float // Base price per night
    discount    Float? // Discount percentage if applicable
    amenities   String[] // Room-specific amenities
    images      String[] // Array of image URLs
    status      RoomStatus @default(AVAILABLE)

    // Relations
    hotel    Hotel         @relation(fields: [hotelId], references: [id], onDelete: Cascade)
    bookings RoomBooking[]

    @@index([hotelId])
}

type BedInfo {
    type  String // King, Queen, Twin, etc.
    count Int // Number of this type of bed
}

enum RoomStatus {
    AVAILABLE
    OCCUPIED
    MAINTENANCE
    RESERVED
}

// Booking model
model Booking {
    id              String        @id @default(auto()) @map("_id") @db.ObjectId
    userId          String        @db.ObjectId
    hotelId         String        @db.ObjectId
    bookingNumber   String        @unique // Unique booking reference number
    checkInDate     DateTime
    checkOutDate    DateTime
    guests          GuestInfo
    totalAmount     Float
    paymentStatus   PaymentStatus @default(PENDING)
    bookingStatus   BookingStatus @default(CONFIRMED)
    specialRequests String?
    createdAt       DateTime      @default(now())
    updatedAt       DateTime      @updatedAt

    // Relations
    user         User          @relation(fields: [userId], references: [id], onDelete: Restrict)
    hotel        Hotel         @relation(fields: [hotelId], references: [id], onDelete: Restrict)
    roomBookings RoomBooking[]
    payments     Payment[]
    refund       Refund?
}

model RoomBooking {
    id            String @id @default(auto()) @map("_id") @db.ObjectId
    bookingId     String @db.ObjectId
    roomId        String @db.ObjectId
    pricePerNight Float
    quantity      Int    @default(1) // Number of rooms of this type

    // Relations
    booking Booking @relation(fields: [bookingId], references: [id], onDelete: Cascade)
    room    Room    @relation(fields: [roomId], references: [id], onDelete: Restrict)

    @@index([bookingId])
    @@index([roomId])
}

type GuestInfo {
    adults   Int
    children Int
    infants  Int?
    names    String[] // Names of all guests for check-in purposes
}

enum BookingStatus {
    PENDING
    CONFIRMED
    CHECKED_IN
    CHECKED_OUT
    CANCELLED
    NO_SHOW
}

enum PaymentStatus {
    PENDING
    PARTIALLY_PAID
    PAID
    REFUNDED
    FAILED
}

// Payment model
model Payment {
    id            String        @id @default(auto()) @map("_id") @db.ObjectId
    bookingId     String        @db.ObjectId
    amount        Float
    method        PaymentMethod
    status        String
    transactionId String?
    provider      String // Payment gateway used
    receiptUrl    String?
    createdAt     DateTime      @default(now())

    // Relations
    booking Booking @relation(fields: [bookingId], references: [id], onDelete: Cascade)
}

enum PaymentMethod {
    CREDIT_CARD
    PAYPAL
    BANK_TRANSFER
    CASH
    OTHER
}

// Refund model
model Refund {
    id            String    @id @default(auto()) @map("_id") @db.ObjectId
    bookingId     String    @unique @db.ObjectId
    amount        Float
    reason        String
    status        String
    processedAt   DateTime?
    transactionId String?
    createdAt     DateTime  @default(now())

    // Relations
    booking Booking @relation(fields: [bookingId], references: [id], onDelete: Cascade)
}

// Review model
model Review {
    id        String       @id @default(auto()) @map("_id") @db.ObjectId
    userId    String       @db.ObjectId
    hotelId   String       @db.ObjectId
    rating    Float // Scale of 1-5
    title     String?
    comment   String?
    images    String[] // Optional images with review
    response  Response? // Hotel's response to the review
    status    ReviewStatus @default(PENDING)
    createdAt DateTime     @default(now())
    updatedAt DateTime     @updatedAt

    // Relations
    user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)
    hotel Hotel @relation(fields: [hotelId], references: [id], onDelete: Cascade)

    @@index([userId])
    @@index([hotelId])
}

type Response {
    text        String
    respondedBy String
    createdAt   DateTime @default(now())
}

enum ReviewStatus {
    PENDING
    APPROVED
    REJECTED
}

// Amenity categories for filtering
model AmenityCategory {
    id        String    @id @default(auto()) @map("_id") @db.ObjectId
    name      String    @unique
    icon      String?
    amenities Amenity[]
}

// Amenities for hotels and rooms
model Amenity {
    id         String          @id @default(auto()) @map("_id") @db.ObjectId
    name       String          @unique
    icon       String?
    categoryId String          @db.ObjectId
    category   AmenityCategory @relation(fields: [categoryId], references: [id], onDelete: Cascade)

    @@index([categoryId])
}

// Availability and pricing model
model Availability {
    id        String   @id @default(auto()) @map("_id") @db.ObjectId
    roomId    String   @db.ObjectId
    date      DateTime
    available Int // Number of rooms available
    price     Float // Price for this specific date (can differ from base price)
    closed    Boolean  @default(false) // If true, no bookings allowed for this date

    @@unique([roomId, date])
    @@index([date])
}

// Promotion and discount model
model Promotion {
    id               String          @id @default(auto()) @map("_id") @db.ObjectId
    code             String          @unique // Promotion code
    name             String
    description      String?
    discountType     DiscountType
    discountValue    Float // Percentage or fixed amount
    startDate        DateTime
    endDate          DateTime
    minStay          Int? // Minimum length of stay required
    maxDiscount      Float? // Maximum discount amount for percentage discounts
    usageLimit       Int? // How many times the code can be used
    usedCount        Int             @default(0)
    applicableHotels String[]        @db.ObjectId // Array of hotel IDs this applies to
    status           PromotionStatus @default(ACTIVE)
}

enum DiscountType {
    PERCENTAGE
    FIXED_AMOUNT
}

enum PromotionStatus {
    ACTIVE
    INACTIVE
    EXPIRED
}

// User wishlist
model Wishlist {
    id     String @id @default(auto()) @map("_id") @db.ObjectId
    userId String @unique @db.ObjectId

    // Relations
    user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    hotels   Hotel[]  @relation(fields: [hotelIds], references: [id])
    hotelIds String[] @db.ObjectId
}

// Notification system
model Notification {
    id        String   @id @default(auto()) @map("_id") @db.ObjectId
    userId    String   @db.ObjectId
    title     String
    message   String
    type      String
    read      Boolean  @default(false)
    data      Json? // Additional data specific to notification type
    createdAt DateTime @default(now())

    // Relations
    user User @relation(fields: [userId], references: [id], onDelete: Cascade)

    @@index([userId])
}

// Settings for system configuration
model SystemSetting {
    id          String   @id @default(auto()) @map("_id") @db.ObjectId
    key         String   @unique
    value       Json
    description String?
    updatedAt   DateTime @updatedAt
}
