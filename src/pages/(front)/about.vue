<template>
  <div class="min-h-screen bg-[#1a1b1e] text-[#f2f5f9]">
    <!-- Hero Section with Gradient -->
    <section class="relative overflow-hidden py-20 md:py-28">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We're changing how you
            <span class="relative">
              <span class="relative z-10 text-yellow-400"> book hotels</span>
              <span class="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/20 rounded-full -z-0"></span>
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Aurorae is the next-gen hotel booking platform built for travelers who want more than just a place to
            stay.
          </p>
          <div class="flex items-center space-x-4">
            <div class="flex -space-x-4">
              <div
                v-for="i in 4"
                :key="i"
                class="w-10 h-10 rounded-full border-2 border-[#1a1b1e] bg-gray-800 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="`https://picsum.photos/40?random=${i}`"
                  :alt="`Team member ${i}`"
                  class="w-10 h-10 object-cover"
                />
              </div>
            </div>
            <p class="text-gray-400">
              Join our <span class="text-yellow-400">400,000+</span> happy travelers
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="relative">
              <div class="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/600/600?random=1"
                  alt="Our story"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-6 -right-6 bg-yellow-400 text-[#1a1b1e] p-4 rounded-xl font-bold">
                <p class="text-4xl">5+</p>
                <p>Years</p>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="inline-block px-4 py-1 bg-gray-800 rounded-full text-yellow-400 text-sm font-medium mb-4">
              Our Story
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">From startup to industry disruptor</h2>
            <p class="text-gray-300 mb-6">
              Founded in 2018, Aurorae began with a simple mission: make hotel booking less boring and more rewarding.
              What started as a small team of travel enthusiasts has grown into a platform trusted by over 400,000
              travelers worldwide.
            </p>
            <p class="text-gray-300 mb-8">
              We're not just another booking site. We're building the future of travel by combining cutting-edge
              technology with personalized experiences that speak to a new generation of explorers.
            </p>
            <button class="group flex items-center text-yellow-400 font-medium">
              Learn more about our journey
              <arrow-right-icon class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section with Animated Cards -->
    <section class="py-20 bg-gray-900/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-block px-4 py-1 bg-gray-800 rounded-full text-yellow-400 text-sm font-medium mb-4">
            Our Values
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">What drives us forward</h2>
          <p class="text-gray-300">
            These core principles guide everything we do, from how we build our platform to how we treat our
            customers.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/5"
          >
            <div class="bg-gray-900 p-4 rounded-xl inline-block mb-6">
              <component :is="value.icon" class="h-8 w-8 text-yellow-400" />
            </div>
            <h3 class="text-xl font-bold mb-4">{{ value.title }}</h3>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-block px-4 py-1 bg-gray-800 rounded-full text-yellow-400 text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Meet the minds behind Aurorae</h2>
          <p class="text-gray-300">
            A diverse group of travel enthusiasts, tech wizards, and hospitality experts working to revolutionize how
            you book hotels.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(member, index) in team" :key="index" class="group">
            <div class="relative mb-4 overflow-hidden rounded-xl aspect-[3/4] bg-gray-800">
              <img
                :src="`https://picsum.photos/300/400?random=${index + 10}`"
                :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <button class="bg-yellow-400 text-[#1a1b1e] px-4 py-2 rounded-lg font-medium text-sm">
                  Connect
                </button>
              </div>
            </div>
            <h3 class="font-bold text-lg">{{ member.name }}</h3>
            <p class="text-gray-400 text-sm">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section with Animated Counters -->
    <section class="py-20 bg-gray-900/50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 text-yellow-400 mb-4">
              <component :is="stat.icon" class="h-8 w-8" />
            </div>
            <p class="text-3xl md:text-4xl font-bold mb-2">{{ stat.value }}</p>
            <p class="text-gray-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-block px-4 py-1 bg-gray-800 rounded-full text-yellow-400 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">What our users say</h2>
          <p class="text-gray-300">
            Don't just take our word for it. Here's what travelers like you have to say about Aurorae.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-gray-800/50 p-8 rounded-2xl relative"
          >
            <div class="absolute -top-4 left-8 text-yellow-400 text-6xl">"</div>
            <p class="text-gray-300 mb-8 relative z-10 pt-4">{{ testimonial.quote }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                <img
                  :src="`https://picsum.photos/48/48?random=${index + 20}`"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="font-medium">{{ testimonial.name }}</p>
                <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div class="relative z-10 max-w-2xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to experience better hotel booking?</h2>
            <p class="text-gray-300 mb-8">
              Join over 400,000 travelers who've discovered the Aurorae difference. Sign up today and get 15% off your
              first booking.
            </p>
            <button class="bg-yellow-400 text-[#1a1b1e] px-8 py-4 rounded-xl font-medium text-lg hover:bg-yellow-300 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight as ArrowRightIcon,
  Award as AwardIcon,
  Globe as GlobeIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon
} from 'lucide-vue-next'
import { ref } from 'vue'

// Values data
const values = ref([
  {
    icon: StarIcon,
    title: "Excellence",
    description: "We're committed to providing the best possible experience for our users, no compromises."
  },
  {
    icon: UsersIcon,
    title: "Community",
    description: "We believe in building a community of travelers who share experiences and inspire each other."
  },
  {
    icon: GlobeIcon,
    title: "Sustainability",
    description: "We promote eco-friendly travel options and partner with hotels committed to sustainability."
  }
])

// Team data
const team = ref([
  { name: "Alex Rivera", role: "Founder & CEO" },
  { name: "Jamie Chen", role: "CTO" },
  { name: "Sam Wilson", role: "Head of Design" },
  { name: "Taylor Kim", role: "Head of Partnerships" }
])

// Stats data
const stats = ref([
  { icon: UsersIcon, value: "400K+", label: "Happy Users" },
  { icon: GlobeIcon, value: "50+", label: "Countries" },
  { icon: AwardIcon, value: "15+", label: "Industry Awards" },
  { icon: TrendingUpIcon, value: "250K+", label: "Bookings Monthly" }
])

// Testimonials data
const testimonials = ref([
  {
    quote: "Aurorae changed how I book hotels. The interface is so intuitive, and I love the personalized recommendations!",
    name: "Jordan T.",
    location: "New York, USA"
  },
  {
    quote: "I've saved so much money using Aurorae. Their price matching is unbeatable, and the rewards program is actually worth it.",
    name: "Priya M.",
    location: "London, UK"
  },
  {
    quote: "As someone who travels for work constantly, Aurorae has been a game-changer. The mobile app is perfect for last-minute bookings.",
    name: "Carlos R.",
    location: "Mexico City, Mexico"
  }
])
</script>
