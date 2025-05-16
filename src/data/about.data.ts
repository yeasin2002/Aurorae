import {
  Award as AwardIcon,
  Globe as GlobeIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
} from "lucide-vue-next";
import { ref } from "vue";

export const values = ref([
  {
    icon: StarIcon,
    title: "Excellence",
    description:
      "We're committed to providing the best possible experience for our users, no compromises.",
  },
  {
    icon: UsersIcon,
    title: "Community",
    description:
      "We believe in building a community of travelers who share experiences and inspire each other.",
  },
  {
    icon: GlobeIcon,
    title: "Sustainability",
    description:
      "We promote eco-friendly travel options and partner with hotels committed to sustainability.",
  },
]);

export const team = [
  {
    name: "Md Kawsar Islam Yeasin",
    role: "Founder & CEO",
    img: "https://avatars.githubusercontent.com/u/87494463?v=4",
  },
  {
    name: "Jamie Chen",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sam Wilson",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taylor Kim",
    role: "Head of Partnerships",
    img: "https://images.unsplash.com/photo-1517308883849-ceac3c24681e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const stats = ref([
  { icon: UsersIcon, value: "400K+", label: "Happy Users" },
  { icon: GlobeIcon, value: "50+", label: "Countries" },
  { icon: AwardIcon, value: "15+", label: "Industry Awards" },
  { icon: TrendingUpIcon, value: "250K+", label: "Bookings Monthly" },
]);

export const testimonials = ref([
  {
    quote:
      "Aurorae changed how I book hotels. The interface is so intuitive, and I love the personalized recommendations!",
    name: "Jordan T.",
    location: "New York, USA",
  },
  {
    quote:
      "I've saved so much money using Aurorae. Their price matching is unbeatable, and the rewards program is actually worth it.",
    name: "Priya M.",
    location: "London, UK",
  },
  {
    quote:
      "As someone who travels for work constantly, Aurorae has been a game-changer. The mobile app is perfect for last-minute bookings.",
    name: "Carlos R.",
    location: "Mexico City, Mexico",
  },
]);
