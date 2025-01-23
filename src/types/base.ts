export interface Hotel {
  id: string
  name: string
  description: string
  price: number
  rating: number
  amenities: string[]
  image: string
}

export interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
}

export interface HotelDetails {
  id: string
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  reviewsDetails: Review[]
  location: string
  amenities: string[]
  image: string
}
