import Image from "next/image";

export default function SettingsPage() {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        width: '100vw',
        background: '#fff',
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
        {/* Hamburger menu */}
        <div style={{ marginBottom: 32, marginTop: 8 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
        </div>
        {/* Profile and Settings title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          <Image
            src="/image-8.png"
            alt="Profile"
            width={48}
            height={48}
            style={{ borderRadius: '50%', marginRight: 12, objectFit: 'cover' }}
          />
          <span style={{ fontSize: 32, fontWeight: 700, color: '#222' }}>Settings</span>
        </div>
        {/* Settings Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#222' }}>Account preferences</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#222' }}>Sign in & security</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#222' }}>Visibility</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>Notifications</div>
        </div>
        {/* Spacer to push bottom options down */}
        <div style={{ flex: 1 }} />
        {/* Bottom Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
          <div style={{ fontSize: 17, color: '#888' }}>Terms of Service</div>
          <div style={{ fontSize: 17, color: '#888' }}>Sign Out</div>
          <div style={{ fontSize: 17, color: '#888' }}>Version 1.1</div>
        </div>
      </div>
    </div>
  );
}
