<template>
    <div class="min-h-screen bg-background text-primary-foreground font-aeonik">
      <div class="container mx-auto px-4 py-12">
        <h1 class="font-clash-display text-5xl md:text-6xl font-bold mb-8 text-primary">Contribution Guidelines</h1>
        
        <div class="prose prose-invert prose-lg max-w-none">
          <p>We are grateful for any contributions made to this project. Before contributing, please take a moment to review this document.</p>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Getting Started</h2>
          <ol class="list-decimal list-inside space-y-4">
            <li>Fork the repository to your GitHub account by clicking the "Fork" button in the top right corner of the repository page.</li>
            <li>Clone the forked repository to your local machine using the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">git clone &lt;repository-url&gt;</code>.</li>
            <li>Install the required dependencies by running the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">npm install</code> or <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">yarn install</code>.</li>
            <li>Make the necessary changes to the code. You can run the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">npm run dev</code> or <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">yarn dev</code> to start the development server and test your changes.</li>
          </ol>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Submitting Changes</h2>
          <ol class="list-decimal list-inside space-y-4">
            <li>Create a new branch for your changes. The branch name should follow the format <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">&lt;feature/bugfix&gt;/short-description</code>.</li>
            <li>Make the necessary changes to the code and commit them with a descriptive commit message.</li>
            <li>Push the branch to your forked repository using the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">git push origin &lt;branch-name&gt;</code>.</li>
            <li>Create a pull request by clicking the "New pull request" button on your forked repository page. Make sure to select the correct base branch and compare branch.</li>
          </ol>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Code Style</h2>
          <ol class="list-decimal list-inside space-y-4">
            <li>This project uses the <a href="https://prettier.io/" class="text-primary hover:underline">Prettier</a> code formatter. You can run the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">npm run format</code> or <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">yarn format</code> to format your code.</li>
            <li>This project uses the <a href="https://eslint.org/" class="text-primary hover:underline">ESLint</a> linter. You can run the command <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">npm run lint</code> or <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">yarn lint</code> to lint your code.</li>
          </ol>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Commit Message Guidelines</h2>
          <ol class="list-decimal list-inside space-y-4">
            <li>The first line of the commit message should be a short summary of the changes. This line should be no more than 50 characters long.</li>
            <li>The second line of the commit message should be blank.</li>
            <li>The third line of the commit message should include a detailed description of the changes. This line can be as long as necessary.</li>
            <li>Use the present tense when writing commit messages. For example, "Fix bug" instead of "Fixed bug".</li>
            <li>Use an imperative tone when writing commit messages. For example, "Add new feature" instead of "Added new feature".</li>
            <li>Use the following prefixes for your commit messages:
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">feat:</code> for new features</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">fix:</code> for bug fixes</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">docs:</code> for documentation changes</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">style:</code> for code style changes</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">refactor:</code> for code refactorings</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">perf:</code> for performance improvements</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">test:</code> for new or updated tests</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">build:</code> for build-related changes</li>
                <li><code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">ci:</code> for continuous integration changes</li>
              </ul>
            </li>
          </ol>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">License</h2>
          <p>By contributing to this project, you agree to license your contributions under the <a href="https://opensource.org/licenses/MIT" class="text-primary hover:underline">MIT License</a>.</p>
  
          <h1 class="font-clash-display text-5xl md:text-6xl font-bold mt-24 mb-8 text-primary">Suggested Routes and Advanced Features for Hotel Booking Application</h1>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Routes</h2>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">User-Facing Routes</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Home/Landing Page (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/</code>)</strong><br />
              The main entry point showcasing featured hotels, promotions, and navigation options.</li>
            <li><strong>Hotel Listings (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/hotels</code>)</strong><br />
              A page displaying a list of available hotels with filtering and sorting capabilities.</li>
            <li><strong>Hotel Details (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/hotels/:id</code>)</strong><br />
              Detailed information about a specific hotel, including amenities, pricing, and availability.</li>
            <li><strong>Booking Page (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/booking/:hotelId</code>)</strong><br />
              A form for users to select dates, room types, and complete the booking process.</li>
            <li><strong>User Reviews (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/hotels/:id/reviews</code>)</strong><br />
              A section where users can read and submit reviews for a particular hotel.</li>
            <li><strong>User Profile (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/profile</code>)</strong><br />
              Allows users to view and manage their bookings, personal information, and preferences.</li>
            <li><strong>Authentication (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/login</code>, <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/register</code>)</strong><br />
              Routes for user login and registration processes.</li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">Admin-Facing Routes</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Admin Dashboard (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/admin</code>)</strong><br />
              Overview of administrative functions and system metrics.</li>
            <li><strong>Manage Hotels (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/admin/hotels</code>)</strong><br />
              Interface for adding, editing, or deleting hotel listings.</li>
            <li><strong>Manage Bookings (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/admin/bookings</code>)</strong><br />
              Monitor and manage current and past bookings.</li>
            <li><strong>Manage Reviews (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/admin/reviews</code>)</strong><br />
              Review and moderate user-submitted reviews.</li>
            <li><strong>Admin Authentication (<code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/admin/login</code>)</strong><br />
              Secure login page for administrators.</li>
          </ol>
  
          <h2 class="font-clash-display text-3xl font-bold mt-12 mb-6 text-primary">Advanced Features</h2>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">1. User-Focused Features</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Interactive Map View</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow users to view hotels on a map with filters for price, ratings, and proximity to landmarks.</li>
                <li>Example: <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/hotels/map</code>.</li>
              </ul>
            </li>
            <li><strong>Dynamic Pricing</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Implement price changes based on demand, season, or user location.</li>
              </ul>
            </li>
            <li><strong>Wishlist/Favorites</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Let users save hotels for future reference.</li>
                <li>Example: <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/wishlist</code>.</li>
              </ul>
            </li>
            <li><strong>Multi-Language Support</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Provide translations for your website content to target international users.</li>
                <li>Example: <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/en</code> for English, <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/es</code> for Spanish.</li>
              </ul>
            </li>
            <li><strong>Notifications</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Push or email notifications for booking reminders, special offers, or cancellations.</li>
              </ul>
            </li>
            <li><strong>Guest Reviews with Media Uploads</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow users to upload photos/videos along with their reviews.</li>
              </ul>
            </li>
            <li><strong>Loyalty Program</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Offer points or discounts for frequent bookings.</li>
              </ul>
            </li>
            <li><strong>Personalized Recommendations</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Suggest hotels based on previous bookings, preferences, or search history.</li>
              </ul>
            </li>
            <li><strong>Multi-Currency Support</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Enable users to view and pay in their preferred currency.</li>
              </ul>
            </li>
            <li><strong>Virtual Room Tours</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Add 360-degree images or videos for a virtual room experience.</li>
              </ul>
            </li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">2. Admin-Focused Features</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Analytics Dashboard</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Provide insights into bookings, revenue, most popular hotels, and user trends.</li>
              </ul>
            </li>
            <li><strong>Role-Based Access Control</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow different levels of access for admins, staff, and managers.</li>
              </ul>
            </li>
            <li><strong>Bulk Management</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Enable batch uploading/editing of hotels, room availability, and pricing.</li>
              </ul>
            </li>
            <li><strong>Revenue Management</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Tools for optimizing pricing strategies based on demand and seasonality.</li>
              </ul>
            </li>
            <li><strong>Customer Feedback Analysis</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Use AI or charts to summarize feedback trends and sentiments.</li>
              </ul>
            </li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">3. Booking Features</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Calendar Availability</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Display a visual calendar showing room availability.</li>
                <li>Example: <code class="bg-primary text-background bg-opacity-10 px-2 py-1 rounded">/hotels/:id/calendar</code>.</li>
              </ul>
            </li>
            <li><strong>Group Bookings</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow users to book multiple rooms or plan events like weddings.</li>
              </ul>
            </li>
            <li><strong>Flexible Cancellation Policies</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Provide partial or full refunds based on the cancellation timeframe.</li>
              </ul>
            </li>
            <li><strong>Booking Modifications</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow users to reschedule or modify their bookings online.</li>
              </ul>
            </li>
            <li><strong>Coupon Codes and Discounts</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Add support for promotional codes or seasonal discounts.</li>
              </ul>
            </li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">4. Search and Filter Enhancements</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Advanced Search Filters</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Filters for pet-friendly hotels, free Wi-Fi, swimming pools, etc.</li>
              </ul>
            </li>
            <li><strong>Sorting Options</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Sort hotels by price, reviews, proximity, or star ratings.</li>
              </ul>
            </li>
            <li><strong>Voice Search</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Enable users to search hotels using voice commands.</li>
              </ul>
            </li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">5. Technical Features</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Progressive Web App (PWA)</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Allow users to access the application offline and install it as a mobile app.</li>
              </ul>
            </li>
            <li><strong>AI Chatbot Integration</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Provide instant assistance for booking queries or hotel details.</li>
              </ul>
            </li>
            <li><strong>Payment Gateways</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Support multiple gateways like PayPal, Stripe, or Razorpay for secure transactions.</li>
              </ul>
            </li>
            <li><strong>API Integrations</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Connect with third-party services like Google Maps, weather forecasts, or TripAdvisor reviews.</li>
              </ul>
            </li>
            <li><strong>Performance Optimization</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Lazy-load images, use CDN, and implement server-side rendering (SSR) for better performance.</li>
              </ul>
            </li>
          </ol>
  
          <h3 class="font-clash-display text-2xl font-bold mt-8 mb-4 text-primary">6. Security Features</h3>
          <ol class="list-decimal list-inside space-y-4">
            <li><strong>Data Encryption</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Secure sensitive user data like payment and personal information.</li>
              </ul>
            </li>
            <li><strong>CAPTCHA for Forms</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Prevent spam bookings and malicious activities.</li>
              </ul>
            </li>
            <li><strong>Audit Logs</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Track changes made by admins and staff.</li>
              </ul>
            </li>
            <li><strong>Two-Factor Authentication (2FA)</strong>
              <ul class="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Add an extra layer of security for admin and user accounts.</li>
              </ul>
            </li>
          </ol>
  
          <p class="mt-8">By integrating these routes and features, your application will provide an excellent user experience while maintaining robust functionality and security. Start with the core features and expand as your application grows.</p>
        </div>
      </div>
    </div>
  </template>
  