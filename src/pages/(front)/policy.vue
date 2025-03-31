<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="border-b border-gray-800">
      <div class="container mx-auto flex items-center justify-between px-4 py-4">
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-400"
            >
              <path
                d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
              />
            </svg>
            <span class="ml-2 text-xl font-semibold text-yellow-400">Auronae</span>
          </a>
        </div>

        <nav class="hidden items-center space-x-8 md:flex">
          <a href="#" class="transition duration-300 hover:text-yellow-400">Home</a>
          <a href="#" class="transition duration-300 hover:text-yellow-400">Hotels</a>
          <a href="#" class="transition duration-300 hover:text-yellow-400">About</a>
        </nav>

        <button
          class="rounded-full bg-white px-5 py-2 font-medium text-gray-900 transition duration-300 hover:bg-gray-200"
        >
          Login
        </button>
      </div>
    </header>

    <!-- Policy Header -->
    <div class="container mx-auto px-4 py-12">
      <h1 class="mb-6 text-4xl font-bold md:text-5xl">Our Policies</h1>
      <p class="max-w-3xl text-lg text-gray-300">
        We are committed to transparency and fairness in all our operations. Please review our
        policies below to understand how we handle your data, the terms of using our platform, and
        our refund procedures.
      </p>
    </div>

    <!-- Policy Tabs -->
    <div class="container mx-auto mb-12 px-4">
      <div class="mb-8 flex flex-wrap border-b border-gray-700">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'px-6 py-3 font-medium focus:outline-none',
            activeTab === index
              ? 'border-b-2 border-yellow-400 text-yellow-400'
              : 'text-gray-400 hover:text-white',
          ]"
        >
          {{ tab.title }}
        </button>
      </div>

      <!-- Policy Content -->
      <div class="rounded-lg bg-gray-800 p-6 md:p-8">
        <div v-if="activeTab === 0">
          <h2 class="mb-6 text-2xl font-bold">Privacy Policy</h2>

          <div class="space-y-6">
            <div>
              <h3 class="mb-3 text-xl font-semibold">1. Information We Collect</h3>
              <p class="text-gray-300">
                We collect personal information that you voluntarily provide to us when you register
                on our platform, express interest in obtaining information about us or our products
                and services, participate in activities on the platform, or otherwise contact us.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">2. How We Use Your Information</h3>
              <p class="text-gray-300">
                We use personal information collected via our platform for a variety of business
                purposes described below. We process your personal information for these purposes in
                reliance on our legitimate business interests, in order to enter into or perform a
                contract with you, with your consent, and/or for compliance with our legal
                obligations.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">
                3. Will Your Information Be Shared With Anyone?
              </h3>
              <p class="text-gray-300">
                We only share information with your consent, to comply with laws, to provide you
                with services, to protect your rights, or to fulfill business obligations. We may
                process or share your data based on the following legal basis.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">4. How Long Do We Keep Your Information?</h3>
              <p class="text-gray-300">
                We will only keep your personal information for as long as it is necessary for the
                purposes set out in this privacy policy, unless a longer retention period is
                required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">5. How Do We Keep Your Information Safe?</h3>
              <p class="text-gray-300">
                We have implemented appropriate technical and organizational security measures
                designed to protect the security of any personal information we process. However,
                despite our safeguards and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology can be guaranteed
                to be 100% secure.
              </p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 1">
          <h2 class="mb-6 text-2xl font-bold">Terms of Use</h2>

          <div class="space-y-6">
            <div>
              <h3 class="mb-3 text-xl font-semibold">1. Agreement to Terms</h3>
              <p class="text-gray-300">
                By accessing our platform, you agree to be bound by these Terms of Use and all
                applicable laws and regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">2. Use License</h3>
              <p class="text-gray-300">
                Permission is granted to temporarily download one copy of the materials on our
                platform for personal, non-commercial transitory viewing only. This is the grant of
                a license, not a transfer of title, and under this license you may not modify or
                copy the materials.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">3. User Accounts</h3>
              <p class="text-gray-300">
                When you create an account with us, you guarantee that the information you provide
                is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete
                information may result in the immediate termination of your account on the platform.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">4. Prohibited Activities</h3>
              <p class="text-gray-300">
                You may not access or use the platform for any purpose other than that for which we
                make it available. The platform may not be used in connection with any commercial
                endeavors except those that are specifically endorsed or approved by us.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">5. Limitation of Liability</h3>
              <p class="text-gray-300">
                In no event shall we be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on our platform, even if we or an
                authorized representative has been notified orally or in writing of the possibility
                of such damage.
              </p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 2">
          <h2 class="mb-6 text-2xl font-bold">Refund Policy</h2>

          <div class="space-y-6">
            <div>
              <h3 class="mb-3 text-xl font-semibold">1. Cancellation Period</h3>
              <p class="text-gray-300">
                You can cancel your hotel booking and receive a full refund if the cancellation is
                made at least 48 hours before the scheduled check-in time. Cancellations made within
                48 hours of the check-in time may be subject to a cancellation fee equivalent to one
                night's stay.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">2. Refund Processing</h3>
              <p class="text-gray-300">
                Refunds will be processed within 5-7 business days after the cancellation is
                confirmed. The refund will be issued to the original payment method used for the
                booking. Please note that it may take an additional 3-5 business days for the refund
                to appear in your account, depending on your financial institution.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">3. Non-Refundable Bookings</h3>
              <p class="text-gray-300">
                Some hotel bookings may be marked as "non-refundable" at a discounted rate. These
                bookings cannot be refunded under any circumstances. Please check the booking
                details carefully before confirming your reservation.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">4. Exceptional Circumstances</h3>
              <p class="text-gray-300">
                In cases of exceptional circumstances (such as illness, death in the family, or
                natural disasters), we may consider refund requests on a case-by-case basis.
                Supporting documentation may be required to process such refunds.
              </p>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">5. Contact for Refund Requests</h3>
              <p class="text-gray-300">
                For any refund requests or inquiries, please contact our customer support team at
                support@auronae.com or call our 24/7 helpline at +1-800-123-4567. Our team will
                assist you with the refund process and provide any necessary information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8">
      <div class="container mx-auto flex flex-col items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mb-4 text-gray-500"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <div class="text-sm text-gray-500">© 2023 Auronae. All rights reserved.</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [{ title: 'Privacy Policy' }, { title: 'Terms of Use' }, { title: 'Refund Policy' }]

const activeTab = ref(0)
</script>
