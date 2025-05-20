import Image from "next/image";
import Link from "next/link";
import { Karla } from 'next/font/google';
import { useRouter } from 'next/navigation';

const karla = Karla({ subsets: ['latin'] });

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div
      style={{
        fontFamily: karla.style.fontFamily,
        minHeight: '100vh',
        width: '100vw',
        background: '#000000',
        display: 'flex',
        justifyContent: 'center',
        color: '#5E5E5E',
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
                marginLeft: 64,
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
                  color: '#816CC5',
                },
              }}
            >
              Account preferences
            </button>
          </Link>
          <Link href="/signin-security" style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginLeft: 64,
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
                  color: '#816CC5',
                },
              }}
            >
              Sign in & security
            </button>
          </Link>
          <Link href="/visibility" style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginLeft: 64,
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
                  color: '#816CC5',
                },
              }}
            >
              Visibility
            </button>
          </Link>
          <Link href="/notifications" style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginLeft: 64,
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
                  color: '#816CC5',
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
                marginLeft: 64,
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
                  color: '#816CC5',
                },
              }}
            >
              Terms of Service
            </button>
          </Link>
          <Link href="/signout" style={{ textDecoration: 'none' }}>
            <button
              style={{
                marginLeft: 64,
                fontSize: 17,
                color: '#5E5E5E',
                background: '000000',
                border: 'none',
                padding: '8px 0',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'color 0.2s ease',
                ':hover': {
                  color: '#816CC5',
                },
              }}
            >
              Sign Out
            </button>
          </Link>
          <div style={{ fontSize: 17, color: '#5E5E5E', marginLeft: 64, }}>Version 1.1</div>
        </div>
      </div>
    </div>
  );
}
