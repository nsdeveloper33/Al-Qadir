'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="bg-white"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
      dir="ltr" // Header always LTR to keep button position fixed
    >
      {/* Centered Container */}
      <div 
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          paddingLeft: '15px',
          paddingRight: '15px'
        }}
      >
        <div 
          className="flex items-center justify-between relative"
          style={{ height: '90px' }}
        >
          {/* Center Logo - Custom Text Design */}
          <Link 
            href="/shop" 
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: '1.2'
              }}
            >
              {/* Main Logo Text - Al-Qadir */}
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #4CAF50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '1px',
                  fontFamily: 'var(--font-poppins), Arial, sans-serif'
                }}
              >
                Al-Qadir
              </span>
              {/* Subtitle - Shopping Mall */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#666',
                  letterSpacing: '2px',
                  marginTop: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-poppins), Arial, sans-serif'
                }}
              >
                Shopping Mall
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden flex flex-col p-2"
            style={{ gap: '4px' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-gray-600 block ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ width: '20px', height: '2px', transition: 'all 0.2s' }}></span>
            <span className={`bg-gray-600 block ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ width: '20px', height: '2px', transition: 'all 0.2s' }}></span>
            <span className={`bg-gray-600 block ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ width: '20px', height: '2px', transition: 'all 0.2s' }}></span>
          </button>

          {/* Empty div for flex balance on desktop */}
          <div className="hidden md:block" style={{ width: '120px' }}></div>
        </div>
      </div>
    </header>
  );
}
