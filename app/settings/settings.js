import React from 'react';
import Avatar from '../components/Avatar/Avatar';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import MenuItem from '../components/MenuItem/MenuItem';

const avatarUrl = 'https://randomuser.me/api/portraits/women/44.jpg'; // Example avatar

export default function SettingsPage() {
  return (
    <div style={{ padding: '32px 20px', maxWidth: 400, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      {/* Hamburger icon */}
      <div style={{ marginBottom: 32 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </div>
      {/* Avatar and Settings title */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
        <Avatar src={avatarUrl} alt="Profile" />
        <SectionTitle>Settings</SectionTitle>
      </div>
      {/* Menu Items */}
      <MenuItem>Account preferences</MenuItem>
      <MenuItem>Sign in & security</MenuItem>
      <MenuItem>Visibility</MenuItem>
      <MenuItem bold>Notifications</MenuItem>
      <MenuItem disabled>Terms of Service</MenuItem>
      <MenuItem disabled>Sign Out</MenuItem>
      <MenuItem disabled>Version 1.1</MenuItem>
    </div>
  );
} 