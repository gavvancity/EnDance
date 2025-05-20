import React, { useState, useRef } from 'react';

// SVGs as constants
const locationIcon = (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 20C6.76667 20 6.56667 19.9333 6.4 19.8C6.23333 19.6667 6.10833 19.4917 6.025 19.275C5.70833 18.3417 5.30833 17.4667 4.825 16.65C4.35833 15.8333 3.7 14.875 2.85 13.775C2 12.675 1.30833 11.625 0.775 10.625C0.258333 9.625 0 8.41667 0 7C0 5.05 0.675 3.4 2.025 2.05C3.39167 0.683333 5.05 0 7 0C8.95 0 10.6 0.683333 11.95 2.05C13.3167 3.4 14 5.05 14 7C14 8.51667 13.7083 9.78333 13.125 10.8C12.5583 11.8 11.9 12.7917 11.15 13.775C10.25 14.975 9.56667 15.975 9.1 16.775C8.65 17.5583 8.275 18.3917 7.975 19.275C7.89167 19.5083 7.75833 19.6917 7.575 19.825C7.40833 19.9417 7.21667 20 7 20ZM7 16.425C7.28333 15.8583 7.6 15.3 7.95 14.75C8.31667 14.2 8.85 13.4667 9.55 12.55C10.2667 11.6167 10.85 10.7583 11.3 9.975C11.7667 9.175 12 8.18333 12 7C12 5.61667 11.5083 4.44167 10.525 3.475C9.55833 2.49167 8.38333 2 7 2C5.61667 2 4.43333 2.49167 3.45 3.475C2.48333 4.44167 2 5.61667 2 7C2 8.18333 2.225 9.175 2.675 9.975C3.14167 10.7583 3.73333 11.6167 4.45 12.55C5.15 13.4667 5.675 14.2 6.025 14.75C6.39167 15.3 6.71667 15.8583 7 16.425ZM7 9.5C7.7 9.5 8.29167 9.25833 8.775 8.775C9.25833 8.29167 9.5 7.7 9.5 7C9.5 6.3 9.25833 5.70833 8.775 5.225C8.29167 4.74167 7.7 4.5 7 4.5C6.3 4.5 5.70833 4.74167 5.225 5.225C4.74167 5.70833 4.5 6.3 4.5 7C4.5 7.7 4.74167 8.29167 5.225 8.775C5.70833 9.25833 6.3 9.5 7 9.5Z" fill="#816CC5"/>
  </svg>
);

const danceIcon = (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1.5C11 2.33 10.33 3 9.5 3C8.67 3 8 2.33 8 1.5C8 0.67 8.67 0 9.5 0C10.33 0 11 0.67 11 1.5ZM5.5 3C4.67 3 4 3.67 4 4.5C4 5.33 4.67 6 5.5 6C6.33 6 7 5.33 7 4.5C7 3.67 6.33 3 5.5 3ZM11 10L10.22 7.75H13.18L15.34 6.67C15.71 6.5 15.86 6.04 15.67 5.67C15.6277 5.5811 15.568 5.50158 15.4944 5.43613C15.4209 5.37068 15.335 5.32063 15.2418 5.28894C15.1485 5.25724 15.0499 5.24455 14.9517 5.2516C14.8535 5.25865 14.7577 5.28531 14.67 5.33L13.85 5.74L13.36 4.9C13.07 4.25 12.36 3.88 11.66 4.04L9.19 4.57C8.5 4.72 8 5.35 8 6.07V6.77L5.57 8.39H5.58C5.5 8.46 5.39 8.55 5.33 8.67L4.44 10.44L2.66 11.33C2.29 11.5 2.14 11.97 2.33 12.34C2.42051 12.5174 2.57759 12.6517 2.76687 12.7135C2.95615 12.7754 3.16223 12.7597 3.34 12.67L5.56 11.56L6.6 9.5L8 11C7 14 0 18 0 18C0 18 4 20 9 20C14 20 18 18 18 18C18 18 13 14 11 10ZM13.85 9.09L13.53 9.25H12.33L12.39 9.41C12.91 10.44 13.67 11.5 14.5 12.44L13.97 9.03L13.85 9.09Z" fill="#816CC5"/>
  </svg>
);

const locations = ['New York', 'Los Angeles', 'London', 'Paris', 'Tokyo', 'Sydney', 'Berlin'];
const danceStyles = ['Hip Hop', 'Ballet', 'Salsa', 'Jazz', 'Contemporary', 'Tap', 'Ballroom'];

export default function CreatePost() {
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [danceStyle, setDanceStyle] = useState('');
  const [image, setImage] = useState(null);
  const fileInput = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div style={{
      maxWidth: 430,
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      padding: '24px 12px',
      background: '#fff',
      boxShadow: '0 2px 8px #eee',
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      <button style={{
        background: 'none',
        border: 'none',
        fontSize: 24,
        cursor: 'pointer',
        marginBottom: 8
      }}>&larr;</button>
      <h2 style={{ textAlign: 'center' }}>Create Post</h2>
      <h3 style={{ textAlign: 'center' }}>Add Image</h3>
      <label style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 16
      }}>
        {image ? (
          <img src={image} alt="Preview" style={{
            width: 120,
            height: 120,
            objectFit: 'cover',
            borderRadius: 0,
            marginBottom: 8
          }} />
        ) : (
          <div style={{
            width: 120,
            height: 120,
            background: '#b39ddb',
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
            position: 'relative'
          }}>
            <svg width="48" height="48" fill="#fff" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="#b39ddb"/>
              <circle cx="12" cy="12" r="3" fill="#fff"/>
              <rect x="16" y="16" width="6" height="6" rx="1" fill="#9575cd"/>
              <text x="19" y="21" fontSize="4" fill="#fff">+</text>
            </svg>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInput}
          style={{ display: 'none' }}
        />
      </label>
      <label style={{
        fontWeight: 500,
        fontSize: 15,
        marginBottom: 4,
        display: 'block'
      }}>Create Captions</label>
      <textarea
        placeholder="Type here..."
        value={caption}
        onChange={e => setCaption(e.target.value)}
        style={{
          width: '100%',
          minHeight: 60,
          borderRadius: 0,
          border: '1px solid #b39ddb',
          padding: '8px 16px',
          marginTop: 4,
          resize: 'vertical',
          fontSize: 16,
          boxSizing: 'border-box',
          marginBottom: 16
        }}
      />

      {/* Location Dropdown */}
      <div style={{
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        background: '#f3e5f5',
        borderRadius: 0,
        padding: '0 12px',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <span style={{
          fontSize: 18,
          margin: '0 8px 0 0',
          display: 'flex',
          alignItems: 'center'
        }}>{locationIcon}</span>
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            flex: 1,
            padding: '12px 8px',
            fontSize: 16,
            borderRadius: 0,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          <option value="">Location</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <span style={{ fontSize: 18, margin: '0 8px' }}>▼</span>
      </div>

      {/* Dance Style Dropdown */}
      <div style={{
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        background: '#f3e5f5',
        borderRadius: 0,
        padding: '0 12px',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>

        <span style={{
          fontSize: 18,
          margin: '0 8px 0 0',
          display: 'flex',
          alignItems: 'center'
        }}>{danceIcon}</span>

        <select
          value={danceStyle}
          onChange={e => setDanceStyle(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            flex: 1,
            padding: '12px 8px',
            fontSize: 16,
            borderRadius: 0,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          <option value="">Dance Style</option>
          {danceStyles.map(style => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
        
        <span style={{ fontSize: 18, margin: '0 8px' }}>▼</span>
      </div>
      <button style={{
        width: '100%',
        background: '#9575cd',
        color: '#fff',
        border: 'none',
        borderRadius: 0,
        padding: '16px 0',
        fontSize: 20,
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: 16
      }}>
        Create Post
      </button>
    </div>
  );
}
