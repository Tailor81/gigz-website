export default function PrivacyPolicy() {
  return (
    <div className="container">
      <article className="prose glass-card" style={{ marginTop: "40px" }}>
        <h1>Privacy Policy for Gigz</h1>
        <p><strong>Effective Date:</strong> August 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Gigz. We are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you register on the app. This includes:</p>
        
        <h3>2.1 Personal Details</h3>
        <ul>
          <li><strong>Identity:</strong> First name, last name, email address, and phone number.</li>
          <li><strong>Profile Data:</strong> Profile pictures, bios, and service categories.</li>
        </ul>

        <h3>2.2 Location Data (Prominent Disclosure)</h3>
        <p>
          Gigz requires access to your location to function as a hyper-local marketplace.
        </p>
        <ul>
          <li><strong>For Clients:</strong> We access your location while the app is in use to show you nearby service providers and relevant gigs in your area.</li>
          <li><strong>For Service Providers (Background Location):</strong> We collect location data in the background (even when the app is closed or not in use) when you are marked as "Online" or "Available". This is strictly required to connect you with nearby clients in real-time. Background location tracking stops immediately when you go offline.</li>
        </ul>

        <h3>2.3 Camera and Media</h3>
        <p>
          We request access to your device's camera and photo library for the following purposes:
        </p>
        <ul>
          <li>To allow you to upload a profile picture.</li>
          <li>To allow service providers to upload photos to their portfolio.</li>
          <li>To share images in real-time chat with other users.</li>
        </ul>

        <h3>2.4 Push Notifications</h3>
        <p>
          We request permission to send you push notifications to alert you of new gig requests, messages, and status updates regarding your bookings.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for various business purposes, including:</p>
        <ul>
          <li>Facilitating account creation and logon processes.</li>
          <li>Connecting clients with nearby service providers based on real-time location.</li>
          <li>Verifying user identities to maintain a secure marketplace.</li>
          <li>Providing real-time chat and communication features.</li>
          <li>Sending administrative information, such as terms updates and booking confirmations.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your personal data. We only share information with third parties in the following situations:
        </p>
        <ul>
          <li><strong>Other Users:</strong> When you book a gig or accept a request, necessary details (like your name, profile photo, and approximate location) are shared with the other party to facilitate the service.</li>
          <li><strong>Service Providers (Firebase):</strong> We use Firebase (by Google) for authentication, database hosting (Firestore), file storage, and push notifications. Your data is securely processed by these infrastructure providers.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or a judicial proceeding.</li>
        </ul>

        <h2>5. Data Retention and Deletion</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
        </p>
        <p>
          You have the right to request the deletion of your account and all associated data at any time. When you request deletion, we will permanently remove your profile, location history, and media from our active databases.
        </p>
        <p>
          To delete your account and data, please visit our <a href="/delete-account">Account Deletion Page</a>.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or comments about this policy, you may contact us via the Support section in the Gigz mobile application, or email us at privacy@gigz-app.com.
        </p>
      </article>
    </div>
  );
}
