"use client";
import React from "react";

export default function VisibilityPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff', minHeight: '100vh', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 430, margin: '0 auto', padding: '0 20px 32px 20px', minHeight: '100vh', background: '#fff', boxSizing: 'border-box' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24, marginBottom: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: '#222' }}>Visibility</span>
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 18 }}>Last Updated: 2025-03-27</div>
        <div style={{ fontSize: 16, marginBottom: 18 }}>
          Welcome to EnDance, operated by PolygonalLassoTool. By accessing or using the App, you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the App.
        </div>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Eligibility</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>You must be at least 18 years old to use the App.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>User Accounts</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>You must provide accurate and up-to-date information when creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You may not share or transfer your account to another person without our permission.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Acceptable Use Users agree to:</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>Use the App only for lawful purposes.</li>
          <li>Respect the rights and privacy of other users.</li>
          <li>Refrain from posting misleading, offensive, or harmful content.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Prohibited activities include but are not limited to:</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>Impersonating others.</li>
          <li>Spamming, harassing, or exploiting users.</li>
          <li>Uploading content that violates intellectual property rights or community guidelines.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Content Ownership and License</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>You retain ownership of any content you upload to the App.</li>
          <li>By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and promote your content within the App.</li>
          <li>We reserve the right to remove any content that violates these Terms.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Auditions, Jobs, and Third-Party Opportunities</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>The App serves as a platform to connect users with opportunities but does not guarantee job placements or auditions.</li>
          <li>We are not responsible for third-party job listings, auditions, or agreements made between users and recruiters.</li>
          <li>Users must exercise caution and conduct due diligence before accepting any opportunities.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Payments and Subscriptions</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>Some features may require payment or a subscription. By purchasing, you agree to the payment terms provided at checkout.</li>
          <li>Subscription services renew automatically unless canceled before the renewal date.</li>
          <li>We do not offer refunds unless required by law.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Termination of Account</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>We reserve the right to suspend or terminate your account if you violate these Terms.</li>
          <li>Users may delete their accounts at any time through the App settings.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Disclaimers and Limitation of Liability</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>The App is provided on an "as-is" basis. We do not guarantee uninterrupted service, accuracy, or availability of opportunities.</li>
          <li>We are not responsible for any damages, losses, or disputes arising from the use of the App.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>Changes to These Terms</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>We may update these Terms periodically. Continued use of the App after updates means you accept the revised Terms.</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '18px 0 6px 0' }}>11. Contact Information</div>
        <ul style={{ fontSize: 16, marginTop: 0 }}>
          <li>For any questions regarding these Terms, please contact us at endance@gmail.com</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: '#7B61FF',
              color: '#fff',
              border: 'none',
              borderRadius: 28,
              padding: '16px 0',
              width: 280,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(123,97,255,0.08)'
            }}
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
} 