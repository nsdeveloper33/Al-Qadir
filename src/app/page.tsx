'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <Header />
      
      {/* Hero Section with Enhanced Banner - Full Width */}
      <section 
        style={{ 
          width: '100%',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
          paddingTop: '0',
          paddingBottom: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        
        {/* Full Width Banner Container with Enhanced Effects */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            marginBottom: '50px',
            overflow: 'hidden'
          }}
        >
          {/* Animated Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.1) 0%, rgba(0,0,0,0.15) 50%, rgba(26, 26, 46, 0.1) 100%)',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
          
          {/* Shine Effect Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
              zIndex: 3,
              pointerEvents: 'none',
              animation: 'shine 3s infinite'
            }}
          />
          
          {/* Banner Image with Enhanced Filters */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/Al-Qadir-banner.png"
              alt="Al-Qadir Shopping Mall - Best Deals in Pakistan"
              width={1920}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '400px',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                transform: 'scale(1)',
                transition: 'transform 0.5s ease'
              }}
              priority
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>

        {/* Hero Content Below Banner */}
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            paddingLeft: '15px',
            paddingRight: '15px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              marginTop: '40px'
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: '800',
                color: '#1a1a2e',
                marginBottom: '24px',
                lineHeight: '1.2',
                fontFamily: 'var(--font-poppins), Arial, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '-0.5px'
              }}
            >
              Welcome to Al-Qadir Shopping Mall
            </h1>
            <p
              style={{
                fontSize: 'clamp(18px, 3vw, 24px)',
                color: '#333',
                marginBottom: '40px',
                maxWidth: '800px',
                margin: '0 auto 40px',
                lineHeight: '1.7',
                fontWeight: '500'
              }}
            >
              Your one-stop destination for premium products with unbeatable deals and free delivery across Pakistan
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '20px 50px',
                  backgroundColor: '#1a1a2e',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: '700',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(26, 26, 46, 0.4), 0 0 0 3px rgba(26, 26, 46, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '3px solid #1a1a2e',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4CAF50';
                  e.currentTarget.style.borderColor = '#4CAF50';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(76, 175, 80, 0.5), 0 0 0 3px rgba(76, 175, 80, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a2e';
                  e.currentTarget.style.borderColor = '#1a1a2e';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 26, 46, 0.4), 0 0 0 3px rgba(26, 26, 46, 0.1)';
                }}
              >
                <span>Shop Now</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '20px 50px',
                  backgroundColor: '#fff',
                  color: '#1a1a2e',
                  fontSize: '20px',
                  fontWeight: '700',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  border: '3px solid #1a1a2e',
                  boxShadow: '0 8px 30px rgba(26, 26, 46, 0.2), 0 0 0 3px rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a2e';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#1a1a2e';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 26, 46, 0.4), 0 0 0 3px rgba(26, 26, 46, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#1a1a2e';
                  e.currentTarget.style.borderColor = '#1a1a2e';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 26, 46, 0.2), 0 0 0 3px rgba(255, 255, 255, 0.5)';
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add CSS Animation for Shine Effect */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>

      {/* Features Section */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#fff',
          paddingTop: '60px',
          paddingBottom: '60px'
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
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              color: '#1a1a2e',
              textAlign: 'center',
              marginBottom: '50px',
              fontFamily: 'var(--font-poppins), Arial, sans-serif'
            }}
          >
            Why Choose Al-Qadir?
          </h2>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}
              >
                🚚
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a2e',
                  marginBottom: '12px'
                }}
              >
                Free Delivery
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                Enjoy free delivery on all orders across Pakistan. Fast and reliable shipping to your doorstep.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}
              >
                💰
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a2e',
                  marginBottom: '12px'
                }}
              >
                Best Prices
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                Unbeatable prices on electronics, cosmetics, watches, and more. Quality products at affordable rates.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}
              >
                💳
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a2e',
                  marginBottom: '12px'
                }}
              >
                Cash on Delivery
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                Pay when you receive. Safe and secure cash on delivery option available for all orders.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}
              >
                ✅
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a2e',
                  marginBottom: '12px'
                }}
              >
                Genuine Products
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
                Authentic and original products with quality guarantee. Shop with confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)',
          paddingTop: '60px',
          paddingBottom: '60px'
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
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              color: '#1a1a2e',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'var(--font-poppins), Arial, sans-serif'
            }}
          >
            Shop by Category
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px'
            }}
          >
            Explore our wide range of products
          </p>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}
          >
            {[
              { name: 'Electronics', icon: '⚡', color: '#2196F3' },
              { name: 'Cosmetics', icon: '💄', color: '#E91E63' },
              { name: 'Watches', icon: '⌚', color: '#FF9800' },
              { name: 'Mobile', icon: '📱', color: '#9C27B0' },
              { name: 'Kitchen', icon: '🍳', color: '#F44336' },
              { name: 'Ladies Bag', icon: '👜', color: '#4CAF50' }
            ].map((category, index) => (
              <Link
                key={index}
                href="/shop"
                style={{
                  padding: '30px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = `0 10px 30px ${category.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '12px'
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a1a2e',
                    margin: 0
                  }}
                >
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
          paddingTop: '80px',
          paddingBottom: '80px',
          color: '#fff'
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            paddingLeft: '15px',
            paddingRight: '15px',
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              marginBottom: '20px',
              fontFamily: 'var(--font-poppins), Arial, sans-serif'
            }}
          >
            Ready to Start Shopping?
          </h2>
          <p
            style={{
              fontSize: '18px',
              marginBottom: '40px',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}
          >
            Browse our collection of premium products and enjoy amazing deals with free delivery across Pakistan
          </p>
          <Link
            href="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 48px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              fontSize: '20px',
              fontWeight: '600',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(76, 175, 80, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#45a049';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(76, 175, 80, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4CAF50';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.4)';
            }}
          >
            <span>Explore Products</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Action Button */}
      <WhatsAppFab />
    </div>
  );
}
