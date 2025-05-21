'use client';

import { useRouter } from 'next/navigation';
import styles from './terms.module.css';

export default function TermsOfService() {
  const router = useRouter();

  const sections = [
    {
      title: 'Last Updated: 2025-03-27',
      content: 'Welcome to EnDance, operated by PolygonalLassoTool. By accessing or using the App, you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the App.',
      isHeader: true
    },
    {
      title: 'Eligibility',
      content: ['You must be at least 18 years old to use the App.']
    },
    {
      title: 'User Accounts',
      content: [
        'You must provide accurate and up-to-date information when creating an account.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You may not share or transfer your account to another person without our permission.'
      ]
    },
    {
      title: 'Acceptable Use Users agree to:',
      content: [
        'Use the App only for lawful purposes.',
        'Respect the rights and safety of other users.',
        'Refrain from posting misleading, offensive, or harmful content.'
      ]
    },
    {
      title: 'Prohibited activities include but are not limited to:',
      content: [
        'Impersonating others.',
        'Spamming, harassing, or exploiting users.',
        'Uploading content that violates intellectual property rights or community guidelines.'
      ]
    },
    {
      title: 'Content Ownership and License',
      content: [
        'You retain ownership of any content you upload to the App.',
        'By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and promote your content within the App.',
        'We reserve the right to remove any content that violates these Terms.'
      ]
    },
    {
      title: 'Auditions, Jobs, and Third-Party Opportunities',
      content: [
        'The App serves as a platform to connect users with opportunities but does not guarantee job placements or auditions.',
        'We are not responsible for third-party job listings, auditions, or agreements made between users.',
        'Users must exercise caution and conduct due diligence before accepting any opportunities.'
      ]
    },
    {
      title: 'Payments and Subscriptions',
      content: [
        'Some features may require payment or a subscription. By purchasing, you agree to the payment terms provided at checkout.',
        'Subscription services renew automatically unless canceled before the renewal date.',
        'We do not offer refunds unless required by law.'
      ]
    },
    {
      title: 'Termination of Account',
      content: [
        'We reserve the right to suspend or terminate your account if you violate these Terms.',
        'Users may delete their accounts at any time through the App settings.'
      ]
    },
    {
      title: 'Disclaimers and Limitation of Liability',
      content: [
        'The App is provided on an "as-is" basis. We do not guarantee uninterrupted service, accuracy, or availability of opportunities.',
        'We are not responsible for any damages, losses, or disputes arising from the use of the App.'
      ]
    },
    {
      title: 'Changes to These Terms',
      content: [
        'We may update these Terms periodically.',
        'Continued use of the App after updates means you accept the revised Terms.'
      ]
    },
    {
      title: '11. Contact Information',
      content: [
        'For any questions regarding these Terms, please contact us at endance@gmail.com'
      ]
    }
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <button 
          className={styles.backButton}
          onClick={() => router.back()}
        >
          ←
        </button>
        <h1 className={styles.title}>Terms of Service</h1>
      </header>

      <div className={styles.content}>
        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            {section.isHeader ? (
              <>
                <p className={styles.date}>{section.title}</p>
                <p className={styles.intro}>{section.content}</p>
              </>
            ) : (
              <>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <ul className={styles.list}>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}
      </div>

      <button 
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </button>
    </main>
  );
} 