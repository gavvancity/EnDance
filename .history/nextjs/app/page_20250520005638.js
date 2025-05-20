import Image from "next/image";
import Link from "next/link";
import { Karla } from 'next/font/google';

const karla = Karla({ subsets: ['latin'] });

export default function SettingsPage() {
  return (
    <div
      style={{
        fontFamily: karla.style.fontFamily,
        minHeight: '100vh',
        width: '100vw',
        background: '#000000',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 430,
          width: '100%',
          minHeight: '100vh',
          margin: '0 auto',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          padding: '24px 20px 0 20px',
        }}
      >
        {/* Profile and Settings title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, marginTop: 156 }}>
          <Image
            src="/image 8.png"
            alt="Profile"
            width={48}
            height={48}
            style={{ borderRadius: '50%', marginRight: 12, objectFit: 'cover' }}
          />
          <span style={{ fontSize: 32, fontWeight: 700, color: '#222' }}>Settings</span>
        </div>
        {/* Settings Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Link href="/account-preferences" style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginLeft: 120,
                fontSize: 18,
                fontWeight: 500,
                color: '#222',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#007AFF',
                },
              }}
            >
              Account preferences
            </button>
          </Link>
          <Link href="/signin-security" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#222',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#000000',
                },
              }}
            >
              Sign in & security
            </button>
          </Link>
          <Link href="/visibility" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#222',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#000000',
                },
              }}
            >
              Visibility
            </button>
          </Link>
          <Link href="/notifications" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#222',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#000000',
                },
              }}
            >
              Notifications
            </button>
          </Link>
        </div>
        {/* Spacer to push bottom options down */}
        <div style={{ flex: 1 }} />
        {/* Bottom Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
          <Link href="/terms" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: 17,
                color: '#888',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#000000',
                },
              }}
            >
              Terms of Service
            </button>
          </Link>
          <Link href="/signout" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: 17,
                color: '#000',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#000000',
                },
              }}
            >
              Sign Out
            </button>
          </Link>
          <div style={{ fontSize: 17, color: '#000' }}>Version 1.1</div>
        </div>
      </div>
    </div>
  );
}
