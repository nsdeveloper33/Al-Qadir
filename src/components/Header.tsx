'use client';

import { useState } from 'react';
import Image from 'next/image';
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
          {/* Center Logo - Image */}
          <Link 
            href="/" 
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/Qeelu.png"
              alt="Qeelu Logo"
              width={220}
              height={90}
              style={{ width: 'auto', height: '75px' }}
              priority
            />
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
