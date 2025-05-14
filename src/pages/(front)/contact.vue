<template>
  <div class="min-h-screen text-[#f2f5f9]">
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="mb-6 text-4xl font-bold md:text-6xl">Get in Touch</h1>
          <p class="mb-12 text-lg text-gray-400 md:text-xl">
            Have questions about our hotel booking platform? Our team is here to help you find the
            perfect accommodation for your next trip.
          </p>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div class="space-y-8">
            <h2 class="mb-6 text-2xl font-bold">Contact Information</h2>

            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-gray-800 p-3">
                <Icon name="lucide:mail" class="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 class="mb-1 font-medium">Email</h3>
                <p class="text-gray-400">support@aurorae.com</p>
                <p class="text-gray-400">bookings@aurorae.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-gray-800 p-3">
                <Icon name="lucide:phone" class="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 class="mb-1 font-medium">Phone</h3>
                <p class="text-gray-400">+1 (800) 123-4567</p>
                <p class="text-gray-400">+1 (800) 765-4321</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-gray-800 p-3">
                <Icon name="lucide:map-pin" class="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 class="mb-1 font-medium">Address</h3>
                <p class="text-gray-400">123 Booking Street</p>
                <p class="text-gray-400">San Francisco, CA 94103</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-gray-800 p-3">
                <Icon name="lucide:clock" class="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 class="mb-1 font-medium">Business Hours</h3>
                <p class="text-gray-400">Monday - Friday: 9am - 6pm</p>
                <p class="text-gray-400">Saturday: 10am - 4pm</p>
                <p class="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl bg-gray-900 p-8">
            <h2 class="mb-6 text-2xl font-bold">Send us a Message</h2>
            <form class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" class="mb-2 block text-sm font-medium"> Name </label>
                  <input
                    type="text"
                    id="name"
                    class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" class="mb-2 block text-sm font-medium"> Email </label>
                  <input
                    type="email"
                    id="email"
                    class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" class="mb-2 block text-sm font-medium"> Subject </label>
                <input
                  type="text"
                  id="subject"
                  class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" class="mb-2 block text-sm font-medium"> Message </label>
                <textarea
                  id="message"
                  rows="{5}"
                  class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-lg bg-yellow-400 px-6 py-3 font-medium text-[#1a1b1e] transition-colors hover:bg-yellow-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-6xl">
          <h2 class="mb-6 text-2xl font-bold">Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14602.259463162405!2d90.38425379666006!3d23.798504616397153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smirpur%2014!5e0!3m2!1sen!2sbd!4v1747238945930!5m2!1sen!2sbd"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="border-t border-gray-800 py-16">
      <div class="container mx-auto px-4">
        <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <p class="text-3xl font-bold text-yellow-400">400.00+</p>
            <p class="mt-2 text-gray-400">Client</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-yellow-400">250K+</p>
            <p class="mt-2 text-gray-400">Product</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-yellow-400">2.50K+</p>
            <p class="mt-2 text-gray-400">Year Experience</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
