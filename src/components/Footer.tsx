'use client';

import Link from 'next/link';

export default function Footer() {

  return (
    <footer 
      className="site-footer"
      style={{ 
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        marginTop: '30px'
      }}
    >
      {/* Centered Container */}
      <div 
        style={{ 
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '50px 20px'
        }}
      >
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Useful Links */}
          <div className="footer-column">
            <h4 
              style={{
                color: '#333333',
                fontWeight: '600',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid #ddd'
              }}
            >
              USEFUL LINKS
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link 
                  href="/about" 
                  style={{ color: '#2196F3', fontSize: '14px' }}
                  className="hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  style={{ color: '#2196F3', fontSize: '14px' }}
                  className="hover:underline"
                >
                  Un-Claimable Products
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  style={{ color: '#2196F3', fontSize: '14px' }}
                  className="hover:underline"
                >
                  Why Us?
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 
              style={{
                color: '#333333',
                fontWeight: '600',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid #ddd'
              }}
            >
              CONTACT INFO
            </h4>
            <address style={{ fontStyle: 'normal', color: '#555555', fontSize: '14px', lineHeight: '1.8' }}>
              <p>Vehari</p>
              <p>Pakistan</p>
            </address>
          </div>

          {/* Payment Info */}
          <div className="footer-column">
            <h4 
              style={{
                color: '#333333',
                fontWeight: '600',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid #ddd'
              }}
            >
              ACCEPT PAYMENT
            </h4>
            <p style={{ color: '#555555', fontSize: '14px' }}>
              CASH ON DELIVERY
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
