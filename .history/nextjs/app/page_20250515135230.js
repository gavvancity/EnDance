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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 430,
          height: '100vh',
          margin: '0 auto',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 24,
          boxSizing: 'border-box',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          {/* Hamburger menu icon */}
          <div style={{ marginRight: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          </div>
        </div>
        {/* Profile and Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <Image
            src="/image-8.png"
            alt="Profile"
            width={48}
            height={48}
            style={{ borderRadius: '50%', marginRight: 16 }}
          />
          <span style={{ fontSize: 32, fontWeight: 600 }}>Settings</span>
        </div>
        {/* Settings Options */}
        <div style={{ marginLeft: 8 }}>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 20, color: '#222' }}>Account preferences</div>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 20, color: '#222' }}>Sign in & security</div>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 20, color: '#222' }}>Visibility</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 32, color: '#222' }}>Notifications</div>
          <div style={{ fontSize: 17, color: '#888', marginBottom: 28 }}>Terms of Service</div>
          <div style={{ fontSize: 17, color: '#888', marginBottom: 28 }}>Sign Out</div>
          <div style={{ fontSize: 17, color: '#888' }}>Version 1.1</div>
        </div>
      </div>
    </div>
  );
}
