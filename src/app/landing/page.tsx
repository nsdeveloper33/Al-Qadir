'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#eeeeee' }}>
      {/* Header */}
      <Header />
      
      {/* Hero Banner Section */}
      <div 
        style={{ 
          width: '100%',
          backgroundColor: '#eeeeee',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            paddingLeft: '15px',
            paddingRight: '15px'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="/Al-Qadir-banner.png"
              alt="Al-Qadir Banner"
              width={1300}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        style={{
          maxWidth: '1300px',
          margin: '40px auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          textAlign: 'center'
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            backgroundColor: '#1a1a2e',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '600',
            borderRadius: '10px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(26, 26, 46, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4CAF50';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1a1a2e';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Shop Now →
        </Link>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

