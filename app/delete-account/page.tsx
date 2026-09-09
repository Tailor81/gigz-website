export default function DeleteAccount() {
  return (
    <div className="container">
      <article className="prose glass-card" style={{ marginTop: "40px" }}>
        <h1>Account Deletion Request</h1>
        
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(20, 184, 166, 0.1)",
          borderLeft: "4px solid var(--accent-teal)",
          borderRadius: "4px",
          marginBottom: "24px"
        }}>
          <p style={{ margin: 0, color: "var(--text-primary)" }}>
            We take your privacy seriously. You have the right to delete your Gigz account and all associated personal data at any time.
          </p>
        </div>

        <h2>How to Delete Your Account In-App</h2>
        <p>The fastest and easiest way to delete your account is directly within the Gigz mobile app:</p>
        <ol>
          <li>Open the <strong>Gigz</strong> app and log in.</li>
          <li>Go to your <strong>Profile</strong> tab.</li>
          <li>Tap the <strong>Settings</strong> gear icon in the top right corner.</li>
          <li>Scroll to the bottom and select <strong>Delete Account</strong>.</li>
          <li>Confirm your choice. Your account and data will be immediately and permanently deleted.</li>
        </ol>

        <h2>Submit a Manual Deletion Request</h2>
        <p>
          If you no longer have access to the app, you can request manual account deletion by contacting our support team.
        </p>
        <p>
          Please send an email to <strong>privacy@gigz-app.com</strong> from the email address associated with your account, with the subject line "<strong>Account Deletion Request</strong>".
        </p>

        <h3>What happens when your account is deleted?</h3>
        <ul>
          <li>Your profile, including photos and personal details, will be permanently removed.</li>
          <li>Your location history and active gig requests will be deleted.</li>
          <li>Your chat history will be removed.</li>
          <li>You will immediately lose access to your account and will not be able to recover it.</li>
        </ul>
      </article>
    </div>
  );
}
