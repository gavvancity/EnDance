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
          Welcome to EnDance, operated by PolygonalLassoTool. By accessing or using the App, you agree to these Visibility terms. If you do not agree, please do not use the App.
        </div>
        {/* (You can customize the rest of the content here) */}
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