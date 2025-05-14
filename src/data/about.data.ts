import {
  Award as AwardIcon,
  Globe as GlobeIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
} from 'lucide-vue-next'
import { ref } from 'vue'

export const values = ref([
  {
    icon: StarIcon,
    title: 'Excellence',
    description:
      "We're committed to providing the best possible experience for our users, no compromises.",
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description:
      'We believe in building a community of travelers who share experiences and inspire each other.',
  },
  {
    icon: GlobeIcon,
    title: 'Sustainability',
    description:
      'We promote eco-friendly travel options and partner with hotels committed to sustainability.',
  },
])

export const team = ref([
  { name: 'Alex Rivera', role: 'Founder & CEO' },
  { name: 'Jamie Chen', role: 'CTO' },
  { name: 'Sam Wilson', role: 'Head of Design' },
  { name: 'Taylor Kim', role: 'Head of Partnerships' },
])

export const stats = ref([
  { icon: UsersIcon, value: '400K+', label: 'Happy Users' },
  { icon: GlobeIcon, value: '50+', label: 'Countries' },
  { icon: AwardIcon, value: '15+', label: 'Industry Awards' },
  { icon: TrendingUpIcon, value: '250K+', label: 'Bookings Monthly' },
])

export const testimonials = ref([
  {
    quote:
      'Aurorae changed how I book hotels. The interface is so intuitive, and I love the personalized recommendations!',
    name: 'Jordan T.',
    location: 'New York, USA',
  },
  {
    quote:
      "I've saved so much money using Aurorae. Their price matching is unbeatable, and the rewards program is actually worth it.",
    name: 'Priya M.',
    location: 'London, UK',
  },
  {
    quote:
      'As someone who travels for work constantly, Aurorae has been a game-changer. The mobile app is perfect for last-minute bookings.',
    name: 'Carlos R.',
    location: 'Mexico City, Mexico',
  },
])
