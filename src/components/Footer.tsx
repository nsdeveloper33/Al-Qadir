'use client';

import Link from 'next/link';

export default function Footer() {

  return (
    <footer 
      className="site-footer"
      style={{ 
        backgroundColor: '#1a1a2e',
        color: '#fff',
        borderTop: '3px solid #4CAF50',
        marginTop: '60px'
      }}
    >
      {/* Centered Container */}
      <div 
        style={{ 
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '60px 20px 30px'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          
          {/* Company Info */}
          <div>
            <h3 
              style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: '20px',
                marginBottom: '20px',
                fontFamily: 'var(--font-poppins), Arial, sans-serif'
              }}
            >
              Al-Qadir Shopping Mall
            </h3>
            <p style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Your trusted destination for premium products with unbeatable deals and free delivery across Pakistan.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: '16px',
                marginBottom: '20px',
                fontFamily: 'var(--font-poppins), Arial, sans-serif'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link 
                  href="/" 
                  style={{ 
                    color: '#b0b0b0', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  style={{ 
                    color: '#b0b0b0', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  style={{ 
                    color: '#b0b0b0', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  style={{ 
                    color: '#b0b0b0', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: '16px',
                marginBottom: '20px',
                fontFamily: 'var(--font-poppins), Arial, sans-serif'
              }}
            >
              Contact Info
            </h4>
            <div style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '2' }}>
              <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📍</span>
                <span>Vehari, Pakistan</span>
              </p>
              <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📞</span>
                <a href="tel:+923001234567" style={{ color: '#4CAF50', textDecoration: 'none' }}>
                  +92 300 1234567
                </a>
              </p>
              <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✉️</span>
                <span>info@alqadir.com</span>
              </p>
            </div>
          </div>

          {/* Payment & Services */}
          <div>
            <h4 
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: '16px',
                marginBottom: '20px',
                fontFamily: 'var(--font-poppins), Arial, sans-serif'
              }}
            >
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0, color: '#b0b0b0', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span>
                <span>Free Delivery</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span>
                <span>Cash on Delivery</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span>
                <span>Genuine Products</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span>
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#b0b0b0', fontSize: '14px', margin: 0 }}>
            © {new Date().getFullYear()} Al-Qadir Shopping Mall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
